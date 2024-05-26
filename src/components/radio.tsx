import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    HelperProps {
  label?: string;
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Radio = forwardRef(
  (props: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
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
    } = restProps as Omit<RadioProps, keyof HelperProps>;
    const classes = cn({
      radio: true,
      [`radio-${size}`]: true,
      ["radio-error"]: error,
      ["radio-success"]: success,
      ["radio-disabled"]: disabled,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    return (
      <div className={classes}>
        <input id={id} type="radio" disabled={disabled} {...rest} ref={ref} />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);
