import { InputProps } from "./types";

import styles from "./input.module.css";
import { Label } from "@/components/label";

export const Input = ({
  hasError,
  disabled,
  onChange,
  value,
  label,
  ...rest
}: InputProps) => {
  function renderLabel() {
    if (label) {
      return <Label hasError={hasError} label={label} />;
    }
  }

  return (
    <div className="relative w-full">
      {renderLabel()}
      <input
        className={styles.input}
        data-error={hasError}
        disabled={disabled}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  );
};
