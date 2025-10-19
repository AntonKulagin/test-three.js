import { getLegPosition, type Leg, type TopTableData } from "../domain";

export function useTable({ topTableData }: { topTableData: TopTableData }) {
  const legs: Leg[] = [
    {
      type: "frontRight",
      values: getLegPosition("frontRight", {
        lengthTable: topTableData.length,
        widthTable: topTableData.width,
      }),
    },
    {
      type: "backRight",
      values: getLegPosition("backRight", {
        lengthTable: topTableData.length,
        widthTable: topTableData.width,
      }),
    },
    {
      type: "frontLeft",
      values: getLegPosition("frontLeft", {
        lengthTable: topTableData.length,
        widthTable: topTableData.width,
      }),
    },
    {
      type: "backLeft",
      values: getLegPosition("backLeft", {
        lengthTable: topTableData.length,
        widthTable: topTableData.width,
      }),
    },
  ];

  return {
    legsData: legs,
  };
}
