import type { ReactElement } from "react";
import type { CalendarProps } from "./interface";
import React, { useMemo } from "react";
import { MonthBox } from "./MonthBox";
import { WeekHeader } from "./WeekHeader/WeekHeader";
import { Button } from "../Button";

export function Calendar({
  weekHeaderClassName,
  weekHeaderStyle,
  labelClassName,
  labelStyle,
  headerClassName,
  headerStyle,
  leftArrowClassName,
  leftArrowStyle,
  rightArrowClassName,
  rightArrowStyle,
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
      <div
        className={headerClassName}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ...headerStyle,
        }}
      >
        <Button className={leftArrowClassName} style={{ ...leftArrowStyle }}>
          {"<"}
        </Button>
        <div
          style={{ flex: 1, textAlign: "center", ...labelStyle }}
          className={labelClassName}
        >
          {label}
        </div>
        <Button className={rightArrowClassName} style={{ ...rightArrowStyle }}>
          {">"}
        </Button>
      </div>
      <WeekHeader className={weekHeaderClassName} style={weekHeaderStyle} />
      <MonthBox {...res} current={current} />
    </div>
  );
}
