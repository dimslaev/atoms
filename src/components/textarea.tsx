import {
  TextareaHTMLAttributes,
  ReactNode,
  forwardRef,
  ForwardedRef,
} from "react";
import { type HelperProps } from "../lib/types";
import { useHelperClasses } from "../lib/hooks";
import cn from "classnames";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    HelperProps {
  size?: "md" | "lg" | "sm";
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  rows?: number;
  cols?: number;
}

export const Textarea = forwardRef(
  (props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { helperClasses, restProps } = useHelperClasses(props);
    const {
      size = "md",
      error = false,
      success = false,
      disabled = false,
      startIcon,
      endIcon,
      className,
      placeholder,
      ...rest
    } = restProps as Omit<TextareaProps, keyof HelperProps>;
    const classes = cn({
      textarea: true,
      [`textarea-${size}`]: true,
      ["textarea-error"]: error,
      ["textarea-success"]: success,
      ["textarea-disabled"]: disabled,
      ["textarea-w-start"]: startIcon,
      ["textarea-w-end"]: endIcon,
      [helperClasses]: !!helperClasses,
      [className as string]: !!className,
    });

    return (
      <div className={classes}>
        {startIcon}
        <textarea
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

Textarea.displayName = "Textarea";
