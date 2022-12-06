import type { CSSProperties } from "react";
import type { MonthBoxProps } from "./MonthBox";

export interface CalendarProps extends MonthBoxProps {
  monthClassName?: string;
  monthStyle?: CSSProperties;
  weekHeaderClassName?: string;
  weekHeaderStyle?: CSSProperties;
  labelClassName?: string;
  labelStyle?: CSSProperties;
}
