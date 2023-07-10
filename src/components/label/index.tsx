import { LabelProps } from "./types";

import styles from "./label.module.css";

export const Label = ({ hasError, label }: LabelProps) => {
  return (
    <label data-error={hasError} className={styles.label}>
      {label}
    </label>
  );
};
