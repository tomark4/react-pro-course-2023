import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export interface RouteI {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: RouteI[] = [
  { to: "/lazy1", path: "lazy1", Component: LazyPage1, name: "Lazy page one" },
  { to: "/lazy2", path: "lazy2", Component: LazyPage2, name: "Lazy page two" },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy page Three",
  },
];

export default routes;
