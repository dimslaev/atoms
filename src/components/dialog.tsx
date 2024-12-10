import { useRef, HTMLAttributes } from "react";
import { createBox, type CombineBoxProps } from "./box";
import cn from "classnames";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  innerClassName?: string;
}

const DialogBase = createBox<DialogProps>();

export const Dialog = ({
  className,
  innerClassName,
  onClose,
  children,
  ...props
}: CombineBoxProps<DialogProps>) => {
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

const DialogContentBase = createBox<DialogContentProps>();

export const DialogContent = ({ className, ...props }: CombineBoxProps<DialogContentProps>) => {
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

const DialogTitleBase = createBox<DialogTitleProps>();

export const DialogTitle = ({ className, ...props }: CombineBoxProps<DialogTitleProps>) => {
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

const DialogActionsBase = createBox<DialogActionsProps>();

export const DialogActions = ({ className, ...props }: CombineBoxProps<DialogActionsProps>) => {
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
