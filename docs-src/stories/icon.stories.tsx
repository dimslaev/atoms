import { Icon } from "../../src/components/icon";
import { mdiStar } from "@mdi/js";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "2rem",
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap",
    }}
  >
    {children}
  </div>
);

export function Default() {
  return (
    <>
      <Container>
        <Icon path={mdiStar} size="sm" />
        <Icon path={mdiStar} size="md" />
        <Icon path={mdiStar} size="lg" />
      </Container>
    </>
  );
}
