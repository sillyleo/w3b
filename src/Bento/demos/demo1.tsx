/**
 * @title Bento Demo1 Title
 * @description Bento demo1 description
 */
import { loremIpsum } from 'react-lorem-ipsum';

import React from 'react';
import Button from '../../Button';
import Bento from '..';

const Demo1 = () => {
  return (
    <div>
      <Bento>{loremIpsum()}</Bento>
      <Bento>{loremIpsum()}</Bento>
      <Bento>{loremIpsum()}</Bento>
    </div>
  );
};

export default Demo1;
