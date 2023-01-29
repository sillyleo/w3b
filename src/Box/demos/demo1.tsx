/**
 * @title Box Demo1 Title
 * @description Box demo1 description
 */

import React from "react";
import Button from "../../Button";
import Box from "..";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Demo1 = () => {
  return (
    <div>
      <MotionBox
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
        // backgroundColor="red"
        // borderRadius="2xl"

        width="100px"
        color="violet1"
        height="100px"
        borderRadius="lg"
        fontFamily={"heading"}
        p="6"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        background="violet10"
        fontSize="xl"
        fontWeight="bold"
      >
        Hello
      </MotionBox>
      <Box
        // backgroundColor="red"
        // borderRadius="2xl"

        width="100px"
        color="violet1"
        height="100px"
        borderRadius="lg"
        fontFamily={"heading"}
        p="6"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        background="violet10"
        fontSize="xl"
        fontWeight="bold"
      >
        Hello
      </Box>
    </div>
  );
};

export default Demo1;
