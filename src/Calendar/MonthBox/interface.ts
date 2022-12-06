import type { CSSProperties } from "react";
import type { WeekBoxProps } from "../WeekBox";

export interface MonthBoxProps extends Omit<WeekBoxProps, "week"> {
  weekClassName?: string;
  weekStyle?: CSSProperties;
}
