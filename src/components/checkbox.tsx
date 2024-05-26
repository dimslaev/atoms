import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import { Icon } from "./icon";
import { mdiCheck } from "@mdi/js";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    HelperProps {
  label?: string;
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Checkbox = forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      id = "",
      label = "",
      className,
      ...rest
    } = restProps as Omit<CheckboxProps, keyof HelperProps>;
    const classes = cn({
      checkbox: true,
      [`checkbox-${size}`]: true,
      ["checkbox-error"]: error,
      ["checkbox-success"]: success,
      ["checkbox-disabled"]: disabled,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    return (
      <div className={classes}>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          {...rest}
          ref={ref}
        />
        <Icon path={mdiCheck} size={size} />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);
