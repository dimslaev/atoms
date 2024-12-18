import { Card, CardMedia, CardContent, CardTitle, CardActions } from "../../src/components/card";
import { Text } from "../../src/components/text";
import { Button } from "../../src/components/button";
import { AspectRatio } from "../../src/components/aspect-ratio";
import { Container } from "../components/story-container";

export function Default() {
  return (
    <div className="flex flex-col gap-4" style={{ maxWidth: 450 }}>
      <Container title="All elements">
        <Card>
          <CardMedia>
            <AspectRatio ratio={16 / 9}>
              <img src="/lake.jpeg" alt="" />
            </AspectRatio>
          </CardMedia>
          <CardTitle>
            <Text variant="h3">The standard Lorem Ipsum passage</Text>
          </CardTitle>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </CardContent>
          <CardActions>
            <Button variant="outline">Like</Button>
            <Button>Buy</Button>
          </CardActions>
        </Card>
      </Container>
      <Container title="No media">
        <Card>
          <CardTitle>
            <Text variant="h3">The standard Lorem Ipsum passage</Text>
          </CardTitle>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </CardContent>
          <CardActions>
            <Button variant="outline">Like</Button>
            <Button>Buy</Button>
          </CardActions>
        </Card>
      </Container>
      <Container title="No actions">
        <Card>
          <CardTitle>
            <Text variant="h3">The standard Lorem Ipsum passage</Text>
          </CardTitle>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </Container>
      <Container title="No tite">
        <Card>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </CardContent>
          <CardActions>
            <Button variant="outline">Like</Button>
            <Button>Buy</Button>
          </CardActions>
        </Card>
      </Container>
      <Container title="Only content">
        <Card>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </CardContent>
        </Card>
      </Container>
      <Container title="With border">
        <Card border>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
