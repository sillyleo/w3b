/**
 * @title Macaron Card Demo1 Title
 * @description Card demo1 description
 */

import React from 'react';
import Button from '..';

const Demo1 = () => {
  return (
    <div>
      <Button
        align={'center'}
        style={{ width: '300px' }}
        size='lg'
        onClick={() => {
          console.log('he');
        }}

        intent='primary'
        iconRight={<div style={{ width: '100%', height: '100%', background: 'red' }} />
        }
        iconLeft={<div style={{ width: 20, height: 20, background: 'green' }} />
        }
      >
        primary1!
      </Button>
      <Button align={'center'}
              style={{ width: '300px' }} intent='secondary'>secondary</Button>
      <Button align={'left'}
              style={{ width: '300px' }} intent='tertiary'>tertiary</Button>
      <Button intent='primary' tone='blue'>
        primary blue
      </Button>
      <Button intent='secondary' tone='blue'>
        secondary blue
      </Button>
      <Button intent='tertiary' tone='blue'>
        tertiary blue
      </Button>{' '}
      <Button intent='primary' tone='sky'>
        primary sky
      </Button>
      <Button intent='secondary' tone='sky'>
        secondary sky
      </Button>
      <Button intent='tertiary' tone='sky'>
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
