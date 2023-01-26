import React from "react";
import {
  buttonStyle,
  ghostClass,
  primaryClass,
  secondaryClass,
} from "./style.css";
import { clsx } from "clsx";

export function getVariant(intent: string, tone: keyof Colors) {
  if (intent === "primary") {
    return primaryClass[tone];
  } else if (intent === "secondary") {
    return secondaryClass[tone];
  } else if (intent === "ghost") {
    return ghostClass[tone];
  } else {
    return primaryClass[tone];
  }
}

function Button() {
  return (
    <button
      // clsx is only for combing multiple classes together
      className={clsx(
        buttonStyle({
          size: "md",
        }),
        getVariant("secondary", "sky")
      )}
    >
      Button
    </button>
  );
}

export default Button;
