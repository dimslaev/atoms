import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactRouterProvider router={router} />
  </React.StrictMode>
);
