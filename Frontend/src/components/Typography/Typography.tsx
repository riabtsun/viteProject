import { createElement } from 'react';

interface TypographyProps {
  tag: string;
  className: string;
  children?: string | undefined;
}

const Typography = ({ tag, className, children }: TypographyProps) => {
  return createElement(tag, { className: className }, children);
};

export default Typography;
