import type { TopTableData } from "../domain";
import { useTable } from "../model/useTable";
import { TableLayout } from "../ui/layout";
import { TableLeg } from "../ui/table-leg";
import { TableTop } from "../ui/table-top";

export function TableSquare({
  animate,
  topTableData,
}: {
  animate: boolean;
  topTableData: TopTableData;
}) {
  const { legsData } = useTable({ topTableData });

  return (
    <>
      <TableLayout
        tableTop={<TableTop value={topTableData} />}
        legs={legsData.map((leg) => (
          <TableLeg key={leg.type} position={leg.values} />
        ))}
        animated={animate}
      />
    </>
  );
}
