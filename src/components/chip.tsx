import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "error";
  variant?: "solid" | "outline";
  label: string;
  onClick?: () => unknown;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const ChipBase = createBox<Omit<ChipProps, "label">>({}, "div");

export const Chip = forwardRef<HTMLDivElement, CombineBoxProps<ChipProps>>(
  (
    {
      size = "md",
      color = "primary",
      variant = "solid",
      label,
      onClick,
      disabled = false,
      startIcon,
      endIcon,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn({
      chip: true,
      [`chip-${size}`]: true,
      [`chip-${color}`]: true,
      [`chip-${variant}`]: true,
      ["chip-btn"]: !!onClick,
      ["chip-disabled"]: disabled,
      ["chip-w-start"]: startIcon,
      ["chip-w-end"]: endIcon,
      [className!]: !!className,
    });

    return (
      <ChipBase ref={ref} className={classes} onClick={onClick} {...props}>
        {startIcon}
        <div className="chip-label">{label}</div>
        {endIcon}
      </ChipBase>
    );
  }
);

Chip.displayName = "Chip";
