import type { ReactElement } from "react";
import type { DayBoxProps } from "./interface";
import dayjs from "dayjs";
import React, { useCallback, useMemo } from "react";

export function DayBox({
  year,
  month,
  date,
  onChange,
  className,
  style,
}: DayBoxProps): ReactElement {
  const day = useMemo(
    () => dayjs().year(year).month(month).date(date).startOf("D"),
    [date, month, year]
  );
  const onClick = useCallback(
    () => onChange((p) => p.year(year).month(month).date(date)),
    [onChange, date, month, year]
  );
  const color = useMemo(() => {
    if (day.isSame(day.startOf("w"), "D")) return "red";
    else if (day.isSame(day.endOf("w"), "D")) return "blue";
    else return "gray";
  }, [day]);

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color,
        ...style,
      }}
    >
      {date}
    </div>
  );
}
