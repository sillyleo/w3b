/**
 * @title Button shadow Demo1 Title
 * @description Button shadow demo1 description
 */

import React from 'react';
import LucideIcon from '../../LucideIcon';
import Button from '..';
import Stack from '../../Stack';

{
  /* <div> */
}
const Demo1 = () => {
  return (
    <Stack direction={'row'}>
      <Button
        align='left'
        leftIcon={<LucideIcon name='plus' />}
        intent='primary'
        tone='blue'
        size='sm'
      >
        New Button
      </Button>
      <Button
        align='between'
        rightIcon={<LucideIcon name='plus' />}
        intent='secondary'
        tone='blue'
        size='md'
      >
        New Button
      </Button>
      <Button
        leftIcon={<LucideIcon name='plus' />}
        intent='ghost'
        tone='blue'
        size='lg'
      >
        New Button
      </Button>

      <Button shadow size='sm' tone='gray' intent='primary'>
        Button
      </Button>
      <Button shadow size='md' tone='gray' intent='primary'>
        Button
      </Button>
      <Button shadow size='lg' tone='gray' intent='primary'>
        Button
      </Button>

      <Button shadow size='sm' tone='gray' intent='secondary'>
        Button
      </Button>
      <Button shadow size='md' tone='gray' intent='secondary'>
        Button
      </Button>
      <Button shadow size='lg' tone='gray' intent='secondary'>
        Button
      </Button>

      <Button shadow tone={'sky'} size='sm' intent='secondary'>
        Button Here
      </Button>
      <Button shadow tone={'sky'} size='md' intent='secondary'>
        Button
      </Button>
      <Button shadow tone={'sky'} size='lg' intent='secondary'>
        Button
      </Button>

      <Button shadow tone={'blue'} size='sm' intent='secondary'>
        Button
      </Button>
      <Button shadow tone={'blue'} size='md' intent='secondary'>
        Button
      </Button>
      <Button shadow tone={'blue'} size='lg' intent='secondary'>
        Button
      </Button>

      <Button shadow tone={'lime'} size='sm' intent='secondary'>
        Button
      </Button>
      <Button shadow tone={'lime'} size='md' intent='secondary'>
        Button
      </Button>
      <Button shadow tone={'lime'} size='lg' intent='secondary'>
        Button
      </Button>

      <Button shadow size='sm' tone='gray' intent='ghost'>
        Button
      </Button>
      <Button shadow size='md' tone='gray' intent='ghost'>
        Button
      </Button>
      <Button shadow size='lg' tone='gray' intent='ghost'>
        Button
      </Button>
    </Stack>
  );
};

export default Demo1;
