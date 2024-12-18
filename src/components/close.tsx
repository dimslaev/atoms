import cn from "classnames";
import { Button, ButtonProps } from "./button";
import { Icon } from "./icon";
import { mdiClose } from "@mdi/js";

export const Close = ({ className, ...props }: ButtonProps) => {
  const classes = cn("close-btn", className);
  return (
    <Button
      size="sm"
      variant="text"
      color="inherit"
      startIcon={<Icon path={mdiClose} size="sm" />}
      iconOnly
      className={classes}
      {...props}
    />
  );
};

Close.displayName = "Close";
