import { useRef, HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import { Close } from "./close";
import cn from "classnames";

export interface IntrinsicDialogProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  innerClassName?: string;
}
export type DialogProps = CombineBoxProps<IntrinsicDialogProps>;
export const DialogBase = createBox<IntrinsicDialogProps>();
export const Dialog = ({ className, innerClassName, onClose, children, ...props }: DialogProps) => {
  const ref = useRef(null);
  const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === ref.current && onClose) {
      onClose();
    }
  };

  return (
    <DialogBase
      className={cn({
        dialog: true,
        [className!]: !!className,
      })}
      onClick={onClickOutside}
      ref={ref}
      {...props}
    >
      <div
        className={cn({
          "dialog-inner": true,
          [innerClassName!]: !!innerClassName,
        })}
      >
        {children}
      </div>
    </DialogBase>
  );
};

export type IntrinsicDialogContentProps = HTMLAttributes<HTMLDivElement>;
export type DialogContentProps = CombineBoxProps<IntrinsicDialogContentProps>;
export const DialogContentBase = createBox<IntrinsicDialogContentProps>();
export const DialogContent = ({ className, ...props }: DialogContentProps) => {
  return (
    <DialogContentBase
      className={cn({
        "dialog-content": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

export interface IntrinsicDialogTitleProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}
export type DialogTitleProps = CombineBoxProps<IntrinsicDialogTitleProps>;
export const DialogTitleBase = createBox<IntrinsicDialogTitleProps>();
export const DialogTitle = ({ className, children, onClose, ...props }: DialogTitleProps) => {
  return (
    <DialogTitleBase
      className={cn({
        "dialog-title": true,
        [className!]: !!className,
      })}
      {...props}
    >
      {children}
      {onClose && <Close onClick={onClose} />}
    </DialogTitleBase>
  );
};

export type IntrinsicDialogActionsProps = HTMLAttributes<HTMLDivElement>;
export type DialogActionsProps = CombineBoxProps<IntrinsicDialogActionsProps>;
export const DialogActionsBase = createBox<IntrinsicDialogActionsProps>();
export const DialogActions = ({ className, ...props }: DialogActionsProps) => {
  return (
    <DialogActionsBase
      className={cn({
        "dialog-actions": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};
