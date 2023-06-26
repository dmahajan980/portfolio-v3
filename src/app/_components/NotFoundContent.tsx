import { css } from '@foundation/css';
import { stack } from '@foundation/patterns';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const NotFoundContent = ({
  children,
  title = 'Page Not Found',
}: Props): JSX.Element => {
  return (
    <div className={css({ w: 'full' })}>
      <div className={stack({ gap: 'm' })}>
        <h1 className={css({ textStyle: 'heading' })}>404 - {title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default NotFoundContent;
