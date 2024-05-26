import { RouteObject } from "react-router-dom";
import * as stories from "../stories";
import { Layout } from "./layout";

const storyTree = Object.keys(stories).map((item) => ({
  title: item,
  storyList: Object.keys(stories[item as keyof typeof stories]),
}));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout stories={storyTree} />,
    children: Object.keys(stories).flatMap((key) => {
      const module = stories[key as keyof typeof stories];
      return Object.keys(module).map((storyKey) => {
        const StoryComponent = module[storyKey as keyof typeof module];
        return {
          path: `${key}/${storyKey.toLowerCase()}`,
          // @ts-expect-error does not have call signatures
          element: <StoryComponent />,
        };
      });
    }),
  },
];
