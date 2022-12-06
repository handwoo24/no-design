import type { ReactElement } from "react";
import type { CalendarProps } from "./interface";
import React, { useMemo } from "react";
import { MonthBox } from "./MonthBox";
import { WeekHeader } from "./WeekHeader/WeekHeader";

export function Calendar({
  weekHeaderClassName,
  weekHeaderStyle,
  labelClassName,
  labelStyle,
  current,
  ...res
}: CalendarProps): ReactElement {
  const label = useMemo(() => current?.format("MMMM YYYY"), [current]);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={labelClassName} style={labelStyle}>
        {label}
      </div>
      <WeekHeader className={weekHeaderClassName} style={weekHeaderStyle} />
      <MonthBox {...res} current={current} />
    </div>
  );
}
