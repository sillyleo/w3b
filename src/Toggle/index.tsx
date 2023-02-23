import { styled, darkTheme } from "../stitches.config";

const TogglePrimitive = styled("div", {
  borderRadius: "9999px",
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
};

const Toggle = ({ tone, ...props }: ToggleProps) => {
  return (
    <TogglePrimitive
      {...props}
      css={{
        // backgroundColor: `$${props.tone}9`,
        bgTone: tone,
      }}
    >
      Toggle
    </TogglePrimitive>
  );
};

export default Toggle;
