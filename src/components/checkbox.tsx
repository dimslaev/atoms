import { InputHTMLAttributes } from "react";
import { Icon } from "./icon";
import { mdiCheckBold } from "@mdi/js";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";
import { Label } from "./label";

export interface IntrinsicCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}
export type CheckboxProps = CombineBoxProps<IntrinsicCheckboxProps>;
export const CheckboxBase = createBox<IntrinsicCheckboxProps>({}, "div");
export const Checkbox = ({
  size = "md",
  error = false,
  success = false,
  disabled = false,
  id = "",
  label = "",
  className,
  ...props
}: CheckboxProps) => {
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
      <Icon path={mdiCheckBold} size={size} />
      {label && (
        <Label htmlFor={id} size={size} error={error} success={success} disabled={disabled}>
          {label}
        </Label>
      )}
    </CheckboxBase>
  );
};

Checkbox.displayName = "Checkbox";
