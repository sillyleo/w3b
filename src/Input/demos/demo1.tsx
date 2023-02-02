/**
 * @title Input Demo1 Title
 * @description Input demo1 description
 */
import { loremIpsum } from 'react-lorem-ipsum';

import React from 'react';
import Input from '..';
import Stack from '../../Stack';
import LucideIcon from '../../LucideIcon';
import IconButton from '../../IconButton';

const Demo1 = () => {
  return (
    <Stack>
      <Stack direction='row'>
        <Input
          invalid
          errorMessage={'meo'}
          rightIcon={<LucideIcon name={'chevron-down'} />}
          leftIcon={<LucideIcon name={'search'} />}
          size={'sm'}
          placeholder={'invalid Input field'}
        />
        <IconButton size='sm' />
      </Stack>
      <Input
        disabled
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        placeholder={'disabled Input field'}
        size={'md'}
      />
      <Input
        error
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        placeholder={'error Input field'}
        size={'md'}
      />
      <Input
        invalid
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'lg'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'sm'}
        tone={'tomato'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'md'}
        tone={'tomato'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'lg'}
        tone={'tomato'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'sm'}
        tone={'lime'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'md'}
        tone={'lime'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'lg'}
        tone={'lime'}
        placeholder={'Input field'}
      />

      <Input size={'sm'} tone={'sage'} placeholder={'Input field'} />
      <Input size={'md'} tone={'sage'} placeholder={'Input field'} />
      <Input size={'lg'} tone={'sage'} placeholder={'Input field'} />

      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'sm'}
        tone={'sage'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'md'}
        tone={'sage'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        size={'lg'}
        tone={'sage'}
        placeholder={'Input field'}
      />
      <Input
        label='Label'
        rightIcon={<LucideIcon name={'chevron-down'} />}
        leftIcon={<LucideIcon name={'search'} />}
        disabled
        size={'sm'}
        placeholder={'Input field'}
      />
      <Input disabled size={'md'} placeholder={'Input field'} />
      <Input disabled size={'lg'} placeholder={'Input field'} />
    </Stack>
  );
};

export default Demo1;
