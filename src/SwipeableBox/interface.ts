import type { CSSProperties, ReactNode } from "react";

export interface SwipeableBoxProps {
  toLeftSwipe?: () => void;
  toRightSwipe?: () => void;
  toUpSwipe?: () => void;
  toDownSwipe?: () => void;
  threshold: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
