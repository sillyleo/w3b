import { motion } from "framer-motion";
import { Bento, Stack } from "nomimono";
import { useState, useEffect } from "react";

// An utility display for component
export default function Display(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("theme");
    if (item !== null) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: loaded ? 1 : 0 }}>
      <Stack
        __borderWidth="1px"
        p="6"
        borderColor="slate6"
        borderRadius={"xl"}
        {...props}
      />
    </motion.div>
  );
}
