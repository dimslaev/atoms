import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
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

export type CombinedButtonProps = CombineBoxProps<ButtonProps>;

const ButtonBase = createBox<ButtonProps>({}, "button");

export const Button = forwardRef<HTMLElement, CombinedButtonProps>((props, ref) => {
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
  } = props;

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
    [className!]: !!className,
  });

  return (
    <ButtonBase
      ref={ref}
      as={href ? "a" : "button"}
      type={!href ? type : undefined}
      href={href}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={href ? disabled || loading : undefined}
      role={href ? "button" : undefined}
      className={classes}
      {...rest}
    >
      {startIcon}
      <div className="btn-label">{children}</div>
      {endIcon}
    </ButtonBase>
  );
});

Button.displayName = "Button";
