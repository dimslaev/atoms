import { HTMLAttributes, ReactNode, forwardRef, ForwardedRef } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    HelperProps {
  size?: "md" | "lg" | "sm";
  color?: "primary" | "success" | "error";
  variant?: "solid" | "outline" | "text";
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  circle?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const Button = forwardRef(
  (
    props: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const {
      size = "md",
      color = "primary",
      variant = "solid",
      disabled = false,
      loading = false,
      iconOnly = false,
      circle = false,
      type = "button",
      startIcon,
      endIcon,
      href,
      className,
      children,
      ...rest
    } = restProps as Omit<ButtonProps, keyof HelperProps>;
    const classes = cn({
      btn: true,
      [`btn-${size}`]: true,
      [`btn-${color}`]: true,
      [`btn-${variant}`]: true,
      ["btn-disabled"]: disabled || loading,
      ["btn-loading"]: loading,
      ["btn-icon"]: iconOnly,
      ["btn-circle"]: circle,
      ["btn-w-start"]: startIcon,
      ["btn-w-end"]: endIcon,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    if (href) {
      return (
        <a
          className={classes}
          href={href}
          {...rest}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        >
          {startIcon}
          <div className="btn-label">{children}</div>
          {endIcon}
        </a>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        disabled={disabled || loading}
        {...rest}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        {startIcon}
        <div className="btn-label">{children}</div>
        {endIcon}
      </button>
    );
  }
);
