/**
 * @title HeroIcon Demo1 Title
 * @description HeroIcon demo1 description
 */

import React from 'react';
import HeroIcon from '..';

const Demo1 = () => {
  return (
    <div>
      <HeroIcon />
      <HeroIcon iconStyle={'outline'} name='archive-box-x-mark' />
      <HeroIcon iconStyle={'solid'} name='archive-box-x-mark' />
      <HeroIcon iconStyle={'mini'} name='archive-box-x-mark' />
    </div>
  );
};

export default Demo1;
