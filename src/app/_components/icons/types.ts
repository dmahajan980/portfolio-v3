import { SVGAttributes } from 'react';

export interface Props extends SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}
