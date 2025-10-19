import type { TopTableData } from "../domain";
import { FieldsManager } from "../ui/fields-manager";

export function TableSquareManager({
  topTableData,
  onChange,
}: {
  topTableData: TopTableData;
  onChange: (data: TopTableData) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        zIndex: 10,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.4)",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <FieldsManager topTableData={topTableData} onChange={onChange} />
    </div>
  );
}
