import { useEffect, useState } from "react";
import { Bento, Button, Text, Stack } from "nomimono";
import { motion } from "framer-motion";

const MotionBento = motion(Bento);

export const Mono = () => {
  // A function to cycle through the following characters: 🥃🥛🥤🍵🍶🍷🍸🍹🍺🧋🍼

  const cycleText = () => {
    const text = [
      "🥃",
      "🥛",
      "🥤",
      "🍵",
      "🍶",
      "🍷",
      "🍸",
      "🍹",
      "🍺",
      "🧋",
      "🍼",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((index) => index + 1);
      }, 1500);
      return () => clearInterval(interval);
    }, []);

    return text[index % text.length];
  };

  return <div>{cycleText()}</div>;
};

export const Banner = () => {
  return (
    <MotionBento
      drag
      dragElastic={2}
      dragSnapToOrigin={true}
      mt="3"
      zindex="999"
      position="relative"
      display="flex"
      lineHeight="single"
      flexWrap="wrap"
      __gap="1.3em"
      alignItems="center"
      justifyContent="center"
      px="8"
      py="12"
      borderRadius="2xl"
      background="basebackgroundTertiary"
    >
      <div style={{ fontSize: "clamp(5rem, 5vw, 8rem)", lineHeight: 1.2 }}>
        <Mono />
      </div>
      <Stack gap="0">
        <Stack direction="column" gap="0">
          <Text
            color="basetextTertiary"
            size="page-title"
            fontWeight="bold"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 3rem)",
              lineHeight: 0.6,
              opacity: 0.3,
            }}
          >
            のみもの
          </Text>
          <Text
            color="basetext"
            size="page-title"
            fontWeight="bold"
            style={{ fontSize: "clamp(2rem, 5vw, 7rem)", lineHeight: 1.1 }}
          >
            Nomimono
          </Text>
        </Stack>
        <Text size="subtitle1" color="basetextTertiary">
          A simple web3-flavored component library
        </Text>
      </Stack>
    </MotionBento>
  );
};
