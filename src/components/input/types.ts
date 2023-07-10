import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  disabled?: boolean;
  icon?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
}
