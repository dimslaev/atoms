import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "../../src/components/dialog";
import { Text } from "../../src/components/text";
import { Button } from "../../src/components//button";

export function Default() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ padding: "4rem 2rem" }}>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        {open && (
          <Dialog
            onClose={() => {
              setOpen(false);
            }}
          >
            <DialogTitle>
              <Text variant="h3">Are you sure?</Text>
            </DialogTitle>
            <DialogContent>
              <Text>Please confirm by clicking confirm or otherwise cancel.</Text>
            </DialogContent>
            <DialogActions>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </>
  );
}
