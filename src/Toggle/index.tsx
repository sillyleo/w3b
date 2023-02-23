import { styled, darkTheme, CSS } from "../stitches.config";

const TogglePrimitive = styled("div", {
  variants: {
    size: {
      sm: {
        padding: 8,
      },
      md: {
        padding: 16,
      },
      lg: {
        padding: 24,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ToggleProps = React.ComponentProps<typeof TogglePrimitive> & {
  tone?: keyof Colors;
  css?: CSS;
};

const Toggle = ({ tone, css, ...props }: ToggleProps) => {
  return (
    <TogglePrimitive
      css={{
        bgTone7: tone,
        ...css,
      }}
      {...props}
    >
      Toggle
    </TogglePrimitive>
  );
};

export default Toggle;
