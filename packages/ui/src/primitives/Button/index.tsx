import React, { ComponentProps } from 'react';

import { classNames } from '../../utils';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Button label text via children
   */
  label: string;
  /**
   * Button styling defaults to `primary`
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Chick handler for action needing to be preformed
   */
  onClick?: () => void;
  /**
   * Background color, overwrites tailwind colors using inline styling
   */
  backgroundColor?: string;
}

export const Button = ({ label, variant = 'primary', backgroundColor, ...rest }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={classNames(
        variant === 'primary' ? ' border-transparent text-white bg-indigo-600 hover:bg-indigo-700' : '',
        variant === 'secondary' ? 'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200' : '',
        variant === 'outline' ? 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50' : '',
        'inline-flex items-center px-2.5 py-1.5 border shadow-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}
      style={{ backgroundColor }}
      {...rest}
    >

      {label}
    </button>
  );
};
