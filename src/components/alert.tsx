import { HTMLAttributes, ReactNode, forwardRef } from "react";
import { createBox, type CombineBoxProps } from "./box";
import { Close } from "./close";
import cn from "classnames";

export interface IntrinsicAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  color?: "primary" | "success" | "error";
  variant?: "solid" | "outline";
  icon?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
}
export type AlertProps = CombineBoxProps<IntrinsicAlertProps>;
export const AlertBase = createBox<Omit<IntrinsicAlertProps, "title">>({}, "div");
export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    color = "primary",
    variant = "outline",
    icon,
    title,
    children,
    className,
    onClose,
    ...rest
  } = props;

  const classes = cn({
    alert: true,
    [`alert-${variant}`]: true,
    [`alert-${color}`]: true,
    [className!]: !!className,
  });

  return (
    <AlertBase ref={ref} className={classes} {...rest}>
      {icon && <div className="alert-icon">{icon}</div>}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {onClose && <Close className="alert-close" onClick={onClose} />}
    </AlertBase>
  );
});

Alert.displayName = "Alert";
