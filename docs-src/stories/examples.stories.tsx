import { useState } from "react";
import { Box } from "../../src/components/box";
import { Card, CardTitle, CardContent, CardActions } from "../../src/components/card";
import { Text } from "../../src/components/text";
import { Input } from "../../src/components/input";
import { Button } from "../../src/components/button";
import { Divider } from "../../src/components/divider";
import { Checkbox } from "../../src/components/checkbox";
import { Radio } from "../../src/components/radio";
import { Label } from "../../src/components/label";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "../../src/components/dialog";
import { Tabs, Tab } from "../../src/components/tabs";
import { Chip } from "../../src/components/chip";
import { Icon } from "../../src/components/icon";
import { mdiAccount, mdiBell, mdiEmail, mdiLock, mdiClose } from "@mdi/js";

export const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <Box className="md:mx-auto md:p-4">
      <Card>
        <CardTitle className="flex items-center justify-between">
          <Text variant="h3" as="div">
            Account Settings
          </Text>
          <Chip label="Pro Plan" color="success" size="sm" startIcon={<Icon path={mdiAccount} />} />
        </CardTitle>

        <Tabs>
          <Tab
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
            startIcon={<Icon path={mdiAccount} />}
          >
            Profile
          </Tab>
          <Tab
            active={activeTab === "notifications"}
            onClick={() => setActiveTab("notifications")}
            startIcon={<Icon path={mdiBell} />}
          >
            Notifications
          </Tab>
          <Tab
            active={activeTab === "security"}
            onClick={() => setActiveTab("security")}
            startIcon={<Icon path={mdiLock} />}
          >
            Security
          </Tab>
        </Tabs>

        <CardContent>
          {activeTab === "profile" && (
            <Box className="flex flex-col gap-4">
              <Box className="flex flex-col md:flex-row gap-4">
                <Box className="flex flex-col gap-1">
                  <Label required>Display Name</Label>
                  <Input
                    placeholder="Enter your display name"
                    defaultValue="John Doe"
                    startIcon={<Icon path={mdiAccount} />}
                  />
                </Box>

                <Box className="flex flex-col gap-1">
                  <Label required>Email Address</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    defaultValue="john.doe@example.com"
                    startIcon={<Icon path={mdiEmail} />}
                  />
                </Box>
              </Box>

              <Box className="flex flex-col gap-2">
                <Text>Theme Preference</Text>
                <Box className="flex flex-col gap-2">
                  <Radio
                    name="theme"
                    id="light"
                    label="Light Mode"
                    checked={theme === "light"}
                    onChange={() => setTheme("light")}
                  />
                  <Radio
                    name="theme"
                    id="dark"
                    label="Dark Mode"
                    checked={theme === "dark"}
                    onChange={() => setTheme("dark")}
                  />
                  <Radio
                    name="theme"
                    id="system"
                    label="System Default"
                    checked={theme === "system"}
                    onChange={() => setTheme("system")}
                  />
                </Box>
              </Box>

              <Divider />

              <Box className="flex flex-col gap-2">
                <Text>Privacy Settings</Text>
                <Box className="flex flex-col gap-2">
                  <Checkbox id="public-profile" label="Make my profile public" defaultChecked />
                  <Checkbox id="show-email" label="Show my email to other users" />
                </Box>
              </Box>

              <Divider />

              <Box className="flex flex-col gap-2">
                <Text>Danger Zone</Text>
                <Button
                  color="error"
                  variant="outline"
                  onClick={() => setShowDeleteDialog(true)}
                  className="mr-auto"
                >
                  Delete Account
                </Button>
              </Box>
            </Box>
          )}
        </CardContent>

        <CardActions>
          <Button>Save Changes</Button>
        </CardActions>
      </Card>

      {showDeleteDialog && (
        <Dialog onClose={() => setShowDeleteDialog(false)}>
          <DialogTitle className="flex items-center justify-between">
            <Text variant="h3" as="div">
              Delete Account
            </Text>
            <Button
              iconOnly
              variant="text"
              onClick={() => setShowDeleteDialog(false)}
              startIcon={<Icon path={mdiClose} />}
            />
          </DialogTitle>
          <DialogContent>
            <Text>
              Are you sure you want to delete your account? This action cannot be undone and all
              your data will be permanently removed.
            </Text>
          </DialogContent>
          <DialogActions>
            <Button color="error">Delete Account</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};
