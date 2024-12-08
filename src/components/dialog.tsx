import { useRef, HTMLAttributes } from "react";
import { createBaseComponent, type CombineBaseProps } from "./base";
import cn from "classnames";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  innerClassName?: string;
}

const DialogBase = createBaseComponent<DialogProps>();

export const Dialog = ({
  className,
  innerClassName,
  onClose,
  children,
  ...props
}: CombineBaseProps<DialogProps>) => {
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

type DialogContentProps = HTMLAttributes<HTMLDivElement>;

const DialogContentBase = createBaseComponent<DialogContentProps>();

export const DialogContent = ({ className, ...props }: CombineBaseProps<DialogContentProps>) => {
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

type DialogTitleProps = HTMLAttributes<HTMLDivElement>;

const DialogTitleBase = createBaseComponent<DialogTitleProps>();

export const DialogTitle = ({ className, ...props }: CombineBaseProps<DialogTitleProps>) => {
  return (
    <DialogTitleBase
      className={cn({
        "dialog-title": true,
        [className!]: !!className,
      })}
      {...props}
    />
  );
};

type DialogActionsProps = HTMLAttributes<HTMLDivElement>;

const DialogActionsBase = createBaseComponent<DialogActionsProps>();

export const DialogActions = ({ className, ...props }: CombineBaseProps<DialogActionsProps>) => {
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
