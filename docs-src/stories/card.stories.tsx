import {
  Card,
  CardMedia,
  CardContent,
  CardTitle,
  CardActions,
} from "../../src/components/card";
import { Text } from "../../src/components/text";
import { Button } from "../../src/components/button";
import { Container } from "../components/story-container";

export function Default() {
  return (
    <div style={{ maxWidth: 450 }}>
      <Container title="All elements">
        <Card>
          <CardMedia>
            <img src="/lake.jpeg" alt="" />
          </CardMedia>
          <CardTitle>
            <Text variant="h3">The standard Lorem Ipsum passage</Text>
          </CardTitle>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </Container>
      <Container title="No tite">
        <Card>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </CardContent>
        </Card>
      </Container>
      <Container title="No border">
        <Card noBorder>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
