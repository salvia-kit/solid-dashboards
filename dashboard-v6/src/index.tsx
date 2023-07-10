/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "@solidjs/router";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import routes from "~solid-pages";
import "tailwindcss/tailwind.css";
import { DashboardLayout } from "./dashboard/Layout";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <DashboardLayout>
        <Routes />
      </DashboardLayout>
    </Router>
  );
}, root!);
