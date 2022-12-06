import type { CSSProperties } from "react";
import type { DayBoxProps } from "../DayBox";

export interface WeekBoxProps extends Omit<DayBoxProps, "date"> {
  week: number;
  dayClassName?: string;
  dayStyle?: CSSProperties;
}
