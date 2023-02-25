// get intent and tone from props, and return the correct style
// in your component:
// css = { _.merge(getButtonToneStyle(tone,intent), props.css) }

export function getButtonToneStyle(
  tone: keyof Colors
  //   intent: "primary" | "secondary" | "ghost"
) {
  if (!tone) {
    return;
  } else if (
    tone === "sky" ||
    tone === "mint" ||
    tone === "lime" ||
    tone === "yellow" ||
    tone === "amber"
  ) {
    return {
      bgTone9: tone,
      "&:hover": {
        bgTone10: tone,
      },
      "&:active": {
        bgTone11: tone,
      },
      color: "black",
    };
  } else if (
    tone === "gray" ||
    tone === "mauve" ||
    tone === "slate" ||
    tone === "sage" ||
    tone === "olive" ||
    tone === "sand"
  ) {
    // grayscale series
    return {
      bgTone12: tone,
      "&:hover": {
        bgTone12: tone,
      },
      "&:active": {
        bgTone11: tone,
      },
      color: `$${tone}2`,
    };
  } else {
    return {
      bgTone9: tone,
      "&:hover": {
        bgTone10: tone,
      },
      "&:active": {
        bgTone11: tone,
      },
      color: "white",
    };
  }
}
