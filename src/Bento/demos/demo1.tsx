/**
 * @title Bento Demo1 Title
 * @description Bento demo1 description
 */
import { loremIpsum } from 'react-lorem-ipsum';

import React from 'react';
import Button from '../../Button';
import Bento from '..';
import { motion } from 'framer-motion';
import Box from '../../Box';

const MotionBento = motion(Bento);
const Demo1 = () => {
  return (
    <div>


      <Bento
        // style={{ width: '150px' }}
        __width={'50%'}
        backgroundColor={'tomato10'}
        // atoms={{
        //   display: 'block',
        //   color: 'tomato9',
        //   background: 'tomato6',
        //   p: '3',
        //   borderRadius: 'lg',
        //   fontWeight: 'bold',
        //   fontFamily: 'heading',
        //   fontSize: 'lg'
        // }}
      >
        {loremIpsum()}
      </Bento>

      <Bento
        // backgroundColor="red"
        // borderRadius="2xl"

        __width='200px'
        __height='100px'
        color='violet1'
        borderRadius='lg'
        fontFamily={'heading'}
        p='6'
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
        fontSize='xl'
        background='grass8'
        fontWeight='bold'
      >
        Hello
      </Bento>
      <MotionBento

        initial={{
          opacity: 0
        }}
        animate={{
          opacity: [1, 0.5, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
        color='violet1'
        borderRadius='lg'
        fontFamily={'heading'}
        p='6'
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
        background={'grass8'}
      >
        {loremIpsum()}
      </MotionBento>
      {/* <Bento>{loremIpsum()}</Bento>
      <Bento>{loremIpsum()}</Bento> */}
    </div>
  );
};

export default Demo1;
