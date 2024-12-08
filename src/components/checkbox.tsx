import { InputHTMLAttributes } from "react";
import { Icon } from "./icon";
import { mdiCheck } from "@mdi/js";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}

const CheckboxBase = createBaseComponent<CheckboxProps>({}, "div");

export const Checkbox = ({
  size = "md",
  error = false,
  success = false,
  disabled = false,
  id = "",
  label = "",
  className,
  ...props
}: CombineBaseProps<CheckboxProps>) => {
  const classes = cn({
    checkbox: true,
    [`checkbox-${size}`]: true,
    ["checkbox-error"]: error,
    ["checkbox-success"]: success,
    ["checkbox-disabled"]: disabled,
    [className!]: !!className,
  });

  return (
    <CheckboxBase className={classes}>
      <input id={id} type="checkbox" disabled={disabled} {...props} />
      <Icon path={mdiCheck} size={size} />
      {label && <label htmlFor={id}>{label}</label>}
    </CheckboxBase>
  );
};

Checkbox.displayName = "Checkbox";
