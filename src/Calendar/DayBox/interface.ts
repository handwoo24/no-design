import type { Dayjs } from "dayjs";
import type { CSSProperties, Dispatch, SetStateAction } from "react";

export interface DayBoxProps {
  onChange: Dispatch<SetStateAction<Dayjs>>;
  date: number;
  month: number;
  year: number;
  className?: string;
  style?: CSSProperties;
  current: Dayjs;
}
