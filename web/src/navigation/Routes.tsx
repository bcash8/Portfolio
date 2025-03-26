import { Overview } from "../pages/Overview/Overview";
import { ProjectsPage } from "../pages/Projects/Projects";

export const routes = [
  {
    path: "/",
    element: <Overview />
  },
  {
    path: "/projects",
    element: <ProjectsPage />
  }
];
