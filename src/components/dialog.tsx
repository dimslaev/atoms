import { useRef, HTMLAttributes } from "react";
import cn from "classnames";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  innerClassName?: string;
}

export const Dialog = (props: DialogProps) => {
  const { className, innerClassName, onClose, children, ...rest } = props;
  const ref = useRef(null);
  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === ref.current && onClose) {
      onClose();
    }
  };
  const classes = cn({
    dialog: true,
    [className as string]: !!className,
  });

  const innerClasses = cn({
    "dialog-inner": true,
    [innerClassName as string]: !!innerClassName,
  });

  return (
    <div className={classes} onClick={onClickOutside} {...rest} ref={ref}>
      <div className={innerClasses}>{children}</div>
    </div>
  );
};

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {}

export const DialogContent = (props: DialogContentProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "dialog-content": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface DialogTitleProps extends HTMLAttributes<HTMLDivElement> {}

export const DialogTitle = (props: DialogTitleProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "dialog-title": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};

export interface DialogActionsProps extends HTMLAttributes<HTMLDivElement> {}

export const DialogActions = (props: DialogActionsProps) => {
  const { className, ...rest } = props;
  const classes = cn({
    "dialog-actions": true,
    [className as string]: !!className,
  });

  return <div className={classes} {...rest} />;
};
