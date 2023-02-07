/**
 * @title Stack Demo1 Title
 * @description Stack demo1 description
 */

import Stack from "..";
import Bento from "../../Bento";

const Demo1 = () => {
  return (
    <Stack>
      <Stack borderRadius={"2xl"} bg="slate3" p="6" direction="column">
        {/* use for loop to create 10 <Bento/> */}
        {[...Array(4)].map((_, index) => (
          <Bento
            boxSize={"20"}
            key={index}
            bg="slate6"
            p="4"
            borderRadius="lg"
          />
        ))}
      </Stack>
      <Stack borderRadius={"2xl"} bg="slate3" p="6" direction="row">
        {/* use for loop to create 10 <Bento/> */}
        {[...Array(17)].map((_, index) => (
          <Bento
            boxSize={"20"}
            key={index}
            bg="slate6"
            p="4"
            borderRadius="lg"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Demo1;
