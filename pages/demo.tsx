import { Text, Display, Checkbox } from "nomimono";

export function Demo() {
  return (
    <Display>
      <input type={"checkbox"} defaultChecked />
      <Checkbox defaultSelected>Checkbox</Checkbox>
      <Checkbox defaultSelected tone="sky">
        Checkbox
      </Checkbox>
      <Checkbox defaultSelected tone="lime">
        Checkbox
      </Checkbox>
      <Text color="text">Lorem</Text>
      <Checkbox tone="tomato">Checkbox</Checkbox>
      <Checkbox isDisabled>Checkbox</Checkbox>
    </Display>
  );
}
