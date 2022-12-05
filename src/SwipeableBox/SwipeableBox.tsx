import type { ReactElement } from "react";
import type { SwipeableBoxProps } from "./interface";
import React from "react";
import { animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export function SwipeableBox({
  threshold,
  toDownSwipe = () => undefined,
  toLeftSwipe = () => undefined,
  toRightSwipe = () => undefined,
  toUpSwipe = () => undefined,
  children,
}: SwipeableBoxProps): ReactElement {
  const drag = useDrag(({ type, movement: [mx, my] }) => {
    if (type === "pointerup") {
      if (mx > threshold) toLeftSwipe();
      else if (mx < -threshold) toRightSwipe();
      else if (my > threshold) toUpSwipe();
      else if (my < -threshold) toDownSwipe();
    }
  });
  return (
    <animated.div
      {...drag()}
      style={{
        touchAction: "none",
      }}
    >
      {children}
    </animated.div>
  );
}
