import { Route, Routes } from "react-router";
import { routes } from "./Routes";

export function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
