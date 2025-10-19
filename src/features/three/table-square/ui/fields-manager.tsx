import { useId } from "react";
import type { TopTableData } from "../domain";

export function FieldsManager({
  topTableData,
  onChange,
}: {
  topTableData: TopTableData;
  onChange: (data: TopTableData) => void;
}) {
  const lengthId = useId();
  const widthId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...topTableData, [name]: Number(value) });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label htmlFor={lengthId}>Длина стола</label>
      <input
        id={lengthId}
        type="range"
        name="length"
        min={2}
        max={6}
        step={0.1}
        value={topTableData.length}
        onChange={handleChange}
      />
      <label htmlFor={widthId}>Ширина стола</label>
      <input
        id={widthId}
        type="range"
        name="width"
        min={1}
        max={4}
        step={0.1}
        value={topTableData.width}
        onChange={handleChange}
      />
    </div>
  );
}
