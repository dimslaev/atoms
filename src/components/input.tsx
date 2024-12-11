import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface IntrinsicInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
export type InputProps = CombineBoxProps<IntrinsicInputProps>;
export const InputBase = createBox<IntrinsicInputProps>({}, "div");
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      type = "text",
      startIcon,
      endIcon,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn({
      input: true,
      [`input-${size}`]: true,
      ["input-error"]: error,
      ["input-success"]: success,
      ["input-disabled"]: disabled,
      ["input-w-start"]: startIcon,
      ["input-w-end"]: endIcon,
      [className!]: !!className,
    });

    return (
      <InputBase className={classes}>
        {startIcon}
        <input ref={ref} type={type} disabled={disabled} {...props} />
        {endIcon}
      </InputBase>
    );
  }
);

Input.displayName = "Input";
