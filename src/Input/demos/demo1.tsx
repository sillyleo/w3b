/**
 * @title Input Demo1 Title
 * @description Input demo1 description
 */
import { loremIpsum } from 'react-lorem-ipsum';

import React from 'react';
import Input from '..';
import Stack from '../../Stack';

const Demo1 = () => {
  return (
    <Stack>
      <Input fontSize={'2xl'} size={'sm'} placeholder={'Input field'} />
      <Input size={'md'} placeholder={'Input field'} />
      <Input size={'lg'} placeholder={'Input field'} />
      <Input size={'sm'} tone={'tomato'} placeholder={'Input field'} />
      <Input size={'md'} tone={'tomato'} placeholder={'Input field'} />
      <Input size={'lg'} tone={'tomato'} placeholder={'Input field'} />
      <Input size={'sm'} tone={'lime'} placeholder={'Input field'} />
      <Input size={'md'} tone={'lime'} placeholder={'Input field'} />
      <Input size={'lg'} tone={'lime'} placeholder={'Input field'} />
      <Input size={'sm'} tone={'sage'} placeholder={'Input field'} />
      <Input size={'md'} tone={'sage'} placeholder={'Input field'} />
      <Input size={'lg'} tone={'sage'} placeholder={'Input field'} />
      <Input disabled size={'sm'} placeholder={'Input field'} />
      <Input disabled size={'md'} placeholder={'Input field'} />
      <Input disabled size={'lg'} placeholder={'Input field'} />
    </Stack>
  );
};

export default Demo1;
