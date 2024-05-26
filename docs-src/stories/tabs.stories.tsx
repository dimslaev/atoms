import { Tabs, Tab } from "../../src/components/tabs";
import { Icon } from "../../src/components/icon";
import { useState, Children, cloneElement } from "react";
import { mdiStarOutline } from "@mdi/js";
import { Container } from "../components/story-container";

const TabsWithState = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(0);
  return (
    <Tabs>
      {Children.map(children, (child, index) => {
        // @ts-expect-error no undefined child
        return cloneElement(child, {
          active: active === index,
          onClick: () => setActive(index),
        });
      })}
    </Tabs>
  );
};

export function Default() {
  return (
    <>
      <Container title="size: sm">
        <TabsWithState>
          <Tab size="sm">Tab #1</Tab>
          <Tab size="sm">Tab #2</Tab>
          <Tab size="sm">Tab #3</Tab>
        </TabsWithState>
      </Container>
      <Container title="size: md">
        <TabsWithState>
          <Tab>Tab #1</Tab>
          <Tab>Tab #2</Tab>
          <Tab>Tab #3</Tab>
        </TabsWithState>
      </Container>
      <Container title="size: lg">
        <TabsWithState>
          <Tab size="lg">Tab #1</Tab>
          <Tab size="lg">Tab #2</Tab>
          <Tab size="lg">Tab #3</Tab>
        </TabsWithState>
      </Container>

      <Container title="size: sm | iconOnly: true">
        <TabsWithState>
          <Tab size="sm" iconOnly>
            <Icon path={mdiStarOutline} size="sm" />
          </Tab>
          <Tab size="sm" iconOnly>
            <Icon path={mdiStarOutline} size="sm" />
          </Tab>
          <Tab size="sm" iconOnly>
            <Icon path={mdiStarOutline} size="sm" />
          </Tab>
        </TabsWithState>
      </Container>

      <Container title="size: md | iconOnly: true">
        <TabsWithState>
          <Tab iconOnly>
            <Icon path={mdiStarOutline} size="md" />
          </Tab>
          <Tab iconOnly>
            <Icon path={mdiStarOutline} size="md" />
          </Tab>
          <Tab iconOnly>
            <Icon path={mdiStarOutline} size="md" />
          </Tab>
        </TabsWithState>
      </Container>

      <Container title="size: lg | iconOnly: true">
        <TabsWithState>
          <Tab size="lg" iconOnly>
            <Icon path={mdiStarOutline} size="lg" />
          </Tab>
          <Tab size="lg" iconOnly>
            <Icon path={mdiStarOutline} size="lg" />
          </Tab>
          <Tab size="lg" iconOnly>
            <Icon path={mdiStarOutline} size="lg" />
          </Tab>
        </TabsWithState>
      </Container>
    </>
  );
}
