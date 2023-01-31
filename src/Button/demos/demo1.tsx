/**
 * @title Button shadow Demo1 Title
 * @description Button shadow demo1 description
 */

import React from 'react';
import Icon from '../../Icon';
import Button from '..';

{
  /* <div> */
}
const Demo1 = () => {
  return (
    <div>
      <Button
        align='left'

        leftIcon={<Icon name='ice-cream' />}
        intent='primary'
        tone='blue'
        size='sm'
      >
        New Button
      </Button>
      <Button
        align='between'

        rightIcon={<Icon name='ice-cream' />}
        intent='secondary'
        tone='blue'
        size='md'
      >
        New Button
      </Button>
      <Button

        leftIcon={<Icon name='ice-cream' />}
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

      <Button backgroundColor={'tomato9'} borderRadius={'full'} shadow tone={'sky'} size='sm' intent='secondary'>
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
    </div>
  );
};

export default Demo1;
