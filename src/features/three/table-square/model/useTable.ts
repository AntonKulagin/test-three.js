import { getLegPosition, type Leg } from "../domain";

export function useTable({
  value,
}: // defaultValue = 4,
{
  value: number;
  // defaultValue?: number;
}) {
  const legs: Leg[] = [
    {
      type: "frontRight",
      values: getLegPosition("frontRight", {
        lengthTable: value,
        // defaultValue,
      }),
    },
    {
      type: "backRight",
      values: getLegPosition("backRight", {
        lengthTable: value,
        // defaultValue,
      }),
    },
    {
      type: "frontLeft",
      values: getLegPosition("frontLeft", {
        lengthTable: value,
        // defaultValue,
      }),
    },
    {
      type: "backLeft",
      values: getLegPosition("backLeft", {
        lengthTable: value,
        // defaultValue,
      }),
    },
  ];

  const tableTop = value;

  return {
    legsData: legs,
    tableTopData: tableTop,
  };
}
