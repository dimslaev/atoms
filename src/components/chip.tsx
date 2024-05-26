import { HTMLAttributes, ReactNode, forwardRef, ForwardedRef } from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface ChipProps extends HTMLAttributes<HTMLDivElement>, HelperProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "error";
  variant?: "solid" | "outline";
  label: string;
  onClick?: () => unknown;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}

export const Chip = forwardRef(
  (props: ChipProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const {
      size = "md",
      color = "primary",
      variant = "solid",
      label,
      onClick,
      disabled = false,
      startIcon,
      endIcon,
      className,
    } = restProps as Omit<ChipProps, keyof HelperProps>;
    const classes = cn({
      chip: true,
      [`chip-${size}`]: true,
      [`chip-${color}`]: true,
      [`chip-${variant}`]: true,
      ["chip-btn"]: !!onClick,
      ["chip-disabled"]: disabled,
      ["chip-w-start"]: startIcon,
      ["chip-w-end"]: endIcon,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    const children = (
      <>
        {startIcon}
        <div className="chip-label">{label}</div>
        {endIcon}
      </>
    );

    return (
      <div className={classes} onClick={onClick} ref={ref}>
        {children}
      </div>
    );
  }
);
