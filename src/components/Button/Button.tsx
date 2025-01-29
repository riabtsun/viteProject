// import { useRef } from 'react';

import * as React from 'react';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className: string;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, text }: ButtonProps, ref) => {
    return (
      <button ref={ref} onClick={onClick} className={className}>
        {text}
      </button>
    );
  }
);

export default Button;
