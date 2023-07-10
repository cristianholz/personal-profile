import { HTMLAttributes } from "react";

interface OptionsType {
  value: string;
  label: string;
}

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  options: OptionsType[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  disabled?: boolean;
}
