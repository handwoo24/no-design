import type { ReactElement } from "react";
import type { WeekHeaderProps } from "./interface";
import dayjs from "dayjs";
import React, { useMemo } from "react";

export function WeekHeader({
  className,
  style,
}: WeekHeaderProps): ReactElement {
  const renderDays = useMemo(() => {
    const start = dayjs().startOf("w");
    return Array(7)
      .fill(0)
      .map((_, i) => {
        const day = start.date(start.date() + i);
        const label = day.format("ddd");
        let color = "gray";
        if (day.day() === 0) {
          color = "red";
        } else if (day.day() === 6) {
          color = "blue";
        }
        return (
          <div key={label} style={{ flex: 1, textAlign: "center", color }}>
            {label}
          </div>
        );
      });
  }, []);
  return (
    <div
      className={className}
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {renderDays}
    </div>
  );
}
