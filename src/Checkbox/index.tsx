import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import Bento from '../Bento';
import { TextProps } from '../Text';
import './style.css';
import { checkboxIcon, checkboxIndicator, checkboxLabel, checkboxRoot } from './style.css';

export interface CheckboxProps {

  // basic props from radix-ui
  children?: React.ReactNode | string;
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;

  disabled?: boolean;

  required?: boolean;

  name?: string;

  value?: 'on' | 'off';

  // extra custom  props

  fontSize?: TextProps['fontSize'];

}

export const Checkbox = ({

                           children,
                           defaultChecked,
                           checked,
                           onCheckedChange,
                           disabled,
                           required,
                           name,
                           value = 'on',
                           fontSize = 'base',
                           ...props
                         }: CheckboxProps) => {
  return (
    <Bento
      fontSize={fontSize}
      as={'label'}
      className={checkboxLabel} htmlFor={name}
      {...props}
    >
      <CheckboxPrimitive.Root
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        className={checkboxRoot} id={name}>
        <CheckboxPrimitive.Indicator className={checkboxIndicator}>
          <CheckIcon strokeWidth={3} className={checkboxIcon} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {children}
    </Bento>
  );
};

export default Checkbox;
