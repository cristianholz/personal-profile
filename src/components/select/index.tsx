import { SelectProps } from "./types";

import styles from "./select.module.css";
import { Label } from "@/components/label";

export const Select = ({
  hasError,
  options,
  onChange,
  label,
  disabled,
}: SelectProps) => {
  function renderLabel() {
    if (label) {
      return <Label hasError={hasError} label={label} />;
    }
  }

  return (
    <div className="relative w-full">
      {renderLabel()}
      <select
        data-error={hasError}
        className={styles.select}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
