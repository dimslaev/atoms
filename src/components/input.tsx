import {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    HelperProps {
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: number;
}

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      type = "text",
      startIcon,
      endIcon,
      className,
      placeholder,
      ...rest
    } = restProps as Omit<InputProps, keyof HelperProps>;
    const classes = cn({
      input: true,
      [`input-${size}`]: true,
      ["input-error"]: error,
      ["input-success"]: success,
      ["input-disabled"]: disabled,
      ["input-w-start"]: startIcon,
      ["input-w-end"]: endIcon,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    return (
      <div className={classes}>
        {startIcon}
        <input
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
          ref={ref}
        />
        {endIcon}
      </div>
    );
  }
);
