import { styled, darkTheme } from "../stitches.config";

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
  css?: any;
};

const Toggle = ({ tone, css, ...props }: ToggleProps) => {
  return (
    <TogglePrimitive
      {...props}
      css={{
        bgTone7: "brown",
        ...css,
      }}
    >
      Toggle
    </TogglePrimitive>
  );
};

export default Toggle;
