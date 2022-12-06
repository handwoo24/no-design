import type { ReactElement } from "react";
import type { MonthBoxProps } from "./interface";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import { WeekBox } from "../WeekBox";

export function MonthBox({
  year,
  month,
  onChange,
  weekClassName,
  weekStyle,
  dayClassName,
  dayStyle,
  className,
  style,
}: MonthBoxProps): ReactElement {
  const startDay = useMemo(
    () => dayjs().year(year).month(month).startOf("M"),
    [year, month]
  );
  const renderedWeeks = useMemo(() => {
    return Array(startDay.endOf("M").diff(startDay, "w") + 1)
      .fill(0)
      .map((_, i) => {
        const key = [year, month, "week", i].join("-");
        return (
          <WeekBox
            key={key}
            year={year}
            month={month}
            week={i}
            onChange={onChange}
            className={weekClassName}
            style={weekStyle}
            dayClassName={dayClassName}
            dayStyle={dayStyle}
          />
        );
      });
  }, [
    dayClassName,
    dayStyle,
    month,
    onChange,
    startDay,
    weekClassName,
    weekStyle,
    year,
  ]);
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        ...style,
      }}
    >
      {renderedWeeks}
    </div>
  );
}
