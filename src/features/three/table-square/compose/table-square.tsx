import { useTable } from "../model/useTable";
import { TableLayout } from "../ui/layout";
import { TableLeg } from "../ui/table-leg";
import { TableTop } from "../ui/table-top";

export function TableSquare({
  value,
  animate,
}: {
  value: number;
  animate: boolean;
}) {
  const { legsData, tableTopData } = useTable({ value });

  return (
    <TableLayout
      animated={animate}
      tableTop={<TableTop value={tableTopData} />}
      legs={legsData.map((leg) => (
        <TableLeg key={leg.type} position={leg.values} />
      ))}
    />
  );
}
