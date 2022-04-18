import React, { ComponentProps } from 'react';

import { Icon, IconName } from '../Icon';
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
   * Button size defaults to `md`
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Chick handler for action needing to be preformed
   */
  onClick?: () => void;
  /**
   * className values being passed as props and concatenated with the default classNames
   */
  className?: string;
  /**
   * Name of icon to be displayed
   */
  backgroundColor?: string;
  /**
   * Name of icon to be displayed
   */
  iconName?: IconName;
  /**
   * boolean prop for switching icon to be displayed
   */
  hasLeadingIcon?: boolean;
}

export const Button = ({
  label,
  variant = 'primary',
  size = 'md',
  className,
  backgroundColor,
  iconName,
  hasLeadingIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="submit"
      className={classNames(
        size === 'xs' ? 'px-2 py-1 text-xs' : '',
        size === 'sm' ? 'px-4 py-2 text-xs' : '',
        size === 'md' ? 'px-6 py-3 text-sm' : '',
        size === 'lg' ? 'px-10 py-6 text-xl' : '',
        variant === 'primary'
          ? 'text-white bg-purple-700 border-transparent cursor-pointer focus:outline-purple-700 hover:bg-purple-600 focus:outline-purple-700'
          : '',
        variant === 'secondary'
          ? 'text-green-800 bg-green-200 border-transparent hover:bg-green-300 hover:text-green-900'
          : '',
        variant === 'outline'
          ? 'text-green-800 bg-green-200 border-green-500 rounded cursor-pointer focus:outline-green-200hover:text-green-900 hover:bg-green-300 hover:border-green-300 '
          : '',
        'font-medium tracking-wide transition duration-500 border border-transparent ease-in-out rounded-md outline-offset-2 hover:shadow-xl ',
        className || ''
      )}
      style={{ backgroundColor }}
      {...rest}
    >
      <div className="flex items-center justify-center">
        {iconName && hasLeadingIcon && (
          <Icon name={iconName} className="w-5 h-5 mr-3 -ml-1" aria-hidden="true" isSolid />
        )}

        {label}

        {iconName && !hasLeadingIcon && (
          <Icon name={iconName} className="w-5 h-5 ml-3 -mr-1" aria-hidden="true" isSolid />
        )}
      </div>
    </button>
  );
};
