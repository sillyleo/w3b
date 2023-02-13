/**
 * @title Bento Demo1 Title
 * @description Bento demo1 description
 */

import { motion } from "framer-motion";
import React from "react";
import Bento from "..";

const MotionBento = motion(Bento);
const Demo1 = () => {
  return (
    <div>
      <Bento>sioud</Bento>
      <Bento
        // backgroundColor="red"
        // borderRadius="2xl"

        __width="200px"
        __height="100px"
        color="violet1"
        borderRadius="lg"
        fontFamily={"heading"}
        p="6"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        fontSize="xl"
        background="grass8"
        fontWeight="bold"
      >
        Hello
      </Bento>
      <MotionBento
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        color="violet1"
        borderRadius="lg"
        fontFamily={"heading"}
        p="6"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        background={"grass8"}
      ></MotionBento>
    </div>
  );
};

export default Demo1;
