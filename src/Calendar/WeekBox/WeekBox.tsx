import type { ReactElement } from "react";
import type { WeekBoxProps } from "./interface";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import { DayBox } from "../DayBox";

export function WeekBox({
  year,
  month,
  week,
  onChange,
  dayClassName,
  dayStyle,
  className,
  style,
}: WeekBoxProps): ReactElement {
  const startDay = useMemo(
    () =>
      dayjs().year(year).month(month).startOf("M").add(week, "w").startOf("w"),
    [year, month, week]
  );
  const renderedDays = useMemo(() => {
    return Array(7)
      .fill(0)
      .map((_, i) => {
        const day = startDay.date(startDay.date() + i);
        const dayMonth = day.month();
        const date = day.date();
        const key = day.format("YYYY-MM-DD");
        return (
          <DayBox
            key={key}
            date={date}
            year={year}
            month={dayMonth}
            onChange={onChange}
            className={dayClassName}
            style={dayStyle}
          />
        );
      });
  }, [startDay, year, onChange, dayClassName, dayStyle]);
  return (
    <div
      className={className}
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {renderedDays}
    </div>
  );
}
