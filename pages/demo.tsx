import { Text, BrandButton, Display, Checkbox } from "nomimono";

export default function Demo() {
  return (
    <Display>
      <BrandButton>Brand</BrandButton>
      <BrandButton as="a" href="https://apple.com" isLoading>
        As a button
      </BrandButton>
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
