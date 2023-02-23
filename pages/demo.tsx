import { Toggle, Display, Checkbox } from "nomimono";

export default function Demo() {
  return (
    <Display>
      <Toggle
        size="lg"
        tone="slate"
        css={{
          background: "red",
        }}
      />
      <Checkbox defaultChecked>Checkbox defaultChecked</Checkbox>
      <Checkbox defaultChecked tone="sky">
        Checkbox defaultChecked
    </Checkbox>
      <Checkbox checked={true} tone="lime">
        Checkbox checked=true
      </Checkbox>
      <Checkbox tone="tomato"> normal Checkbox</Checkbox>
      <Checkbox> Checkbox</Checkbox>
    </Display>
  );
}
