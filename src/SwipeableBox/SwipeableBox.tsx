import type { ReactElement } from "react";
import type { SwipeableBoxProps } from "./interface";
import React from "react";
import { animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export function SwipeableBox({
  threshold,
  type = "shot",
  toDownSwipe = () => undefined,
  toLeftSwipe = () => undefined,
  toRightSwipe = () => undefined,
  toUpSwipe = () => undefined,
  children,
}: SwipeableBoxProps): ReactElement {
  const drag = useDrag(({ type: pointerType, movement: [mx, my] }) => {
    if (pointerType === "pointerup" && type === "shot") {
      if (mx > threshold) toLeftSwipe();
      else if (mx < -threshold) toRightSwipe();
      else if (my > threshold) toUpSwipe();
      else if (my < -threshold) toDownSwipe();
    } else if (type === "wheel") {
    }
  });
  return (
    <animated.div
      {...drag}
      style={{
        touchAction: "none",
      }}
    >
      {children}
    </animated.div>
  );
}
