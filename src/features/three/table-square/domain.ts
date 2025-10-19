export type Leg = { type: LegTypes; values: LegPosition };

export type LegPosition = [number, number, number];

export type LegTypes = "frontRight" | "backRight" | "frontLeft" | "backLeft";

export function getLegPosition(
  type: LegTypes,
  {
    lengthTable,
  }: {
    lengthTable: number;
  }
): LegPosition {
  switch (type) {
    case "frontRight":
      return [lengthTable / 2 - 0.2, 0.75, 0.8];
    case "backRight":
      return [lengthTable / 2 - 0.2, 0.75, -0.8];
    case "frontLeft":
      return [lengthTable / 2 - lengthTable + 0.2, 0.75, 0.8];
    case "backLeft":
      return [lengthTable / 2 - lengthTable + 0.2, 0.75, -0.8];
  }
}
