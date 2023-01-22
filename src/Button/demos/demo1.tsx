/**
 * @title Macaron Card Demo1 Title
 * @description Card demo1 description
 */

import React from 'react';
import Button from '..';
// import { darkTheme } from "../../theme";

const Demo1 = () => {
  return (
    <div>
      <Button size='lg' intent='secondary' tone='tomato'>
        Heelo
      </Button>
      <Button
        size='lg'
        intent='primary'
        tone='e'
        align='left'
        style={{ width: '300px' }}
      >
        Hello
      </Button>
      <Button tone={'amber'} align='left' style={{ width: '150px' }}>
        eaofj
      </Button>
      <Button
        align={'center'}
        style={{ width: '300px' }}
        size='lg'
        onClick={() => {
          console.log('he');
        }}
        intent='primary'
        // iconRight={
        //   <div style={{ width: '100%', height: '100%', background: 'red' }} />
        // }
        // iconLeft={
        //   <div style={{ width: 20, height: 20, background: 'green' }} />
        // }
      >
        primary1!
      </Button>
      <Button align={'center'} style={{ width: '300px' }} intent='secondary'>
        secondary
      </Button>
      <Button align={'left'} style={{ width: '300px' }} intent='ghost'>
        tertiary
      </Button>
      <Button intent='primary' tone='blue'>
        primary blue
      </Button>
      <Button intent='secondary' tone='blue'>
        secondary blue
      </Button>
      <Button intent='ghost' tone='blue'>
        tertiary blue
      </Button>{' '}
      <Button intent='primary' tone='sky'>
        primary sky
      </Button>
      <Button>euhfi</Button>
      <Button intent='secondary' tone='sky'>
        secondary sky
      </Button>
      <Button intent='ghost' tone='sky'>
        tertiary sky
      </Button>
      <Button>Default Button</Button>
      <Button tone='slate' size='lg'>
        Button
      </Button>
      <Button tone='slate' size='md'>
        Button
      </Button>
      <Button tone='slate' size='sm'>
        Button
      </Button>
      <Button tone='blue' size='lg'>
        Button
      </Button>
      <Button tone='blue' size='md'>
        Button
      </Button>
      <Button tone='blue' size='sm'>
        Button
      </Button>
      <Button tone='red' size='lg'>
        Button
      </Button>
      <Button tone='red' size='md'>
        Button
      </Button>
      <Button tone='red' size='sm'>
        Button
      </Button>
      <Button tone='yellow' size='lg'>
        Button
      </Button>
      <Button tone='yellow' size='md'>
        Button
      </Button>
      <Button tone='yellow' size='sm'>
        Button
      </Button>
    </div>
  );
};

export default Demo1;
