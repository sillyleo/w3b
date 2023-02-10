import { Text, Display, Checkbox } from "nomimono";

export function Demo() {
  return (
    <Display>
      <input type={"checkbox"} defaultChecked />
      <Checkbox defaultChecked>Checkbox</Checkbox>
      <Checkbox defaultChecked disabled tone="sky">
        Checkbox
      </Checkbox>
      <Checkbox checked={true} tone="lime">
        Checkbox
      </Checkbox>
      <Text color="text">Lorem</Text>
      <Checkbox tone="tomato">Checkbox</Checkbox>
      <Checkbox disabled>Checkbox</Checkbox>
    </Display>
  );
}
