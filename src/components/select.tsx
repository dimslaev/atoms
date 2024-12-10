import { SelectHTMLAttributes, ReactNode, forwardRef } from "react";
import { Icon } from "./icon";
import { mdiMenuDown } from "@mdi/js";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "multiple"> {
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  options: SelectOption[];
  startIcon?: ReactNode;
}

const SelectBase = createBox<Omit<SelectProps, "options">>({}, "div");

export const Select = forwardRef<HTMLSelectElement, CombineBoxProps<SelectProps>>(
  (
    {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      options,
      startIcon,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn({
      select: true,
      [`select-${size}`]: true,
      ["select-error"]: error,
      ["select-success"]: success,
      ["select-disabled"]: disabled,
      ["select-w-start"]: startIcon,
      ["select-w-end"]: true,
      [className!]: !!className,
    });

    return (
      <SelectBase className={classes}>
        {startIcon}
        <select ref={ref} disabled={disabled} {...props}>
          {options?.map(({ value, label }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
        <Icon path={mdiMenuDown} size={size} />
      </SelectBase>
    );
  }
);

Select.displayName = "Select";
