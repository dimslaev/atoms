import {
  SelectHTMLAttributes,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from "react";
import { Icon } from "./icon";
import { mdiMenuDown } from "@mdi/js";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "multiple">,
    HelperProps {
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  options: SelectOption[];
  startIcon?: ReactNode;
  className?: string;
}

export const Select = forwardRef(
  (props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      options,
      startIcon,
      className,
      ...rest
    } = restProps as Omit<SelectProps, keyof HelperProps>;

    const classes = cn({
      select: true,
      [`select-${size}`]: true,
      ["select-error"]: error,
      ["select-success"]: success,
      ["select-disabled"]: disabled,
      ["select-w-start"]: startIcon,
      ["select-w-end"]: true,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    return (
      <div className={classes}>
        {startIcon}

        <select disabled={disabled} {...rest} ref={ref}>
          {options.map(({ value, label }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>

        <Icon path={mdiMenuDown} size={size} />
      </div>
    );
  }
);
