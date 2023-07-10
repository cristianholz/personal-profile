import { LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  label?: string;
}
