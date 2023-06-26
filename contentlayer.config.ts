import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings, {
  Options as AutolinkHeadingsOptions,
} from 'rehype-autolink-headings';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the page',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date the page was published',
      required: true,
    },
    featured: {
      type: 'boolean',
      description: 'Whether the page should be featured',
      required: true,
    },
    status: {
      type: 'enum',
      options: ['draft', 'published'],
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: ({ _raw }) => {
        return _raw.sourceFileName.replace(/\.mdx?$/, '');
      },
    },
    readingTime: {
      type: 'string',
      resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 275 }).text,
    },
  },
}));

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
  onVisitLine: (node) => {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }

    node.properties.className?.push('syntax-line');
  },
  onVisitHighlightedLine: (node) => {
    node.properties.className?.push('syntax-line--highlighted');
  },
  onVisitHighlightedWord: (node) => {
    node.properties.className = ['syntax-word--highlighted'];
  },
};

const rehypeAutolinkHeadingsOptions: AutolinkHeadingsOptions = {
  properties: {
    className: ['subheading-anchor'],
    ariaLabel: 'Link to section',
  },
};

export default makeSource({
  contentDirPath: './src',
  date: { timezone: 'IST' },
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});
