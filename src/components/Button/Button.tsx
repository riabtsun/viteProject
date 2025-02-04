// import { useRef } from 'react';

import * as React from 'react';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className: string;
  onClick?: () => void;
  type: 'button' | 'reset' | 'submit';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, text, type }: ButtonProps, ref) => {
    return (
      <button type={type} ref={ref} onClick={onClick} className={className}>
        {text}
      </button>
    );
  }
);

export default Button;
