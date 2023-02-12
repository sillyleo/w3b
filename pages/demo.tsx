import { Text, Display, Checkbox } from "nomimono";

export function Demo() {
  return (
    <Display>
      <Checkbox defaultChecked>Checkbox defaultChecked</Checkbox>
      <Checkbox defaultChecked disabled tone="sky">
        Checkbox defaultChecked disabled
      </Checkbox>
      <Checkbox checked={true} tone="lime">
        Checkbox checked=true
      </Checkbox>
      <Checkbox tone="tomato"> normal Checkbox</Checkbox>
      <Checkbox disabled> disabled Checkbox</Checkbox>
    </Display>
  );
}
