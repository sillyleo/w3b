/**
 * @title Avatar Demo1 Title
 * @description Avatar demo1 description
 */
import { loremIpsum } from 'react-lorem-ipsum';

import React from 'react';
import Button from '../../Button';
import Avatar from '..';
import { motion } from 'framer-motion';
import Box from '../../Box';
import Checkbox from '..';
import Stack from '../../Stack';

const Demo1 = () => {
  return <Stack>
    <Checkbox name={'c1'} fontSize={'xl'}>This is a checkbox</Checkbox>
    <Checkbox name={'c2'} fontSize={'lg'}>This is a checkbox</Checkbox>
    <Checkbox name={'c3'} fontSize={'base'}>This is a checkbox</Checkbox>
    <Checkbox name={'c4'} fontSize={'sm'}>This is a checkbox</Checkbox>
    <Checkbox name={'c5'} fontSize={'xs'}>This is a checkbox</Checkbox>
  </Stack>;
};

export default Demo1;
