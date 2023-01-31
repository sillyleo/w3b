import Bento, { BentoProps } from '../Bento';
import { inputStyle, InputStyleVariants, inputToneVariants } from './style.css';
import React, { HTMLInputTypeAttribute, ReactHTMLElement } from 'react';
import { ghostClass, primaryClass, secondaryClass } from '../styles/theme.css';
import { clsx } from 'clsx';

export interface InputProps extends InputStyleVariants, BentoProps {

  size?: 'sm' | 'md' | 'lg';

  align?: 'left' | 'center' | 'right';
  tone?: keyof Colors;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
  label?: string;
}


export const Input = ({
                        size = 'md',
                        type = 'text',
                        align = 'left',
                        tone = 'gray',
                        leftIcon,
                        rightIcon,
                        label,
                        ...props
                      }: InputProps) => {
  return (
    <Bento as={'input'}
           type={type}
           className={
             clsx(
               inputStyle({ size: size }),
               inputToneVariants[tone]
             )
           }
           {...props}
    />
  );
};

export default Input;
