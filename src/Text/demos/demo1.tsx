/**
 * @title Text Demo1 Title
 * @description Text demo1 description
 */
import { loremIpsum } from 'react-lorem-ipsum';

import React from 'react';
import Button from '../../Button';
import Text from '..';

const Demo1 = () => {
  return (
    <div>
      <Text size='page-title'>Page Title</Text>
      <Text size='title1'>Title 1</Text>
      <Text size='title2'>Title 2</Text>
      <Text size='title3'>Title 3</Text>
      <Text size='subtitle1' color={'textSecondary'}>Subtitle
        1</Text>
      <Text size='subtitle2' color={'textSecondary'}>Subtitle 2</Text>
      <Text size='overline' color={'textTertiary'}>Overline</Text>
      <Text size='body'>Body {loremIpsum()}</Text>
      <Text size='body-bold'>Body Bold </Text>
      <Text size='label' color={'textSecondary'}>Label</Text>
      <Text size='caption' color={'textTertiary'}>Caption</Text>
    </div>
  );
};

export default Demo1;
