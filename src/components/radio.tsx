import { InputHTMLAttributes, forwardRef } from "react";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}

const RadioBase = createBaseComponent<RadioProps>({}, "div");

export const Radio = forwardRef<HTMLInputElement, CombineBaseProps<RadioProps>>(
  (
    {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      id = "",
      label = "",
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn({
      radio: true,
      [`radio-${size}`]: true,
      ["radio-error"]: error,
      ["radio-success"]: success,
      ["radio-disabled"]: disabled,
      [className!]: !!className,
    });

    return (
      <RadioBase className={classes}>
        <input ref={ref} id={id} type="radio" disabled={disabled} {...props} />
        {label && <label htmlFor={id}>{label}</label>}
      </RadioBase>
    );
  }
);

Radio.displayName = "Radio";
