import { useEffect, useState } from "react";
import { Bento, Button, Text, Stack } from "nomimono";

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
    <Bento
      mt="3"
      display="flex"
      lineHeight="single"
      flexWrap="wrap"
      __gap="1em"
      alignItems="center"
      justifyContent="center"
      px="8"
      py="10"
      borderRadius="2xl"
      background="backgroundSecondary"
    >
      <div style={{ fontSize: "clamp(5rem, 5vw, 8rem)", lineHeight: 1.2 }}>
        <Mono />
      </div>
      <Stack gap="0">
        <Text
          size="page-title"
          fontWeight="bold"
          style={{ fontSize: "clamp(2rem, 5vw, 7rem)", lineHeight: 1.1 }}
        >
          Nomimono
        </Text>
        <Text size="subtitle1" color="textTertiary">
          A simple web3-flavored component library
        </Text>
      </Stack>
    </Bento>
  );
};
