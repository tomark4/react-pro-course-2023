import React, { lazy } from "react";

type JSXComponent = () => JSX.Element;

export interface RouteI {
  to: string;
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: RouteI[] = [
  { to: "/lazy1", path: "lazy1", component: Lazy1, name: "Lazy page one" },
  { to: "/lazy2", path: "lazy2", component: Lazy2, name: "Lazy page two" },
  {
    to: "/lazy3",
    path: "lazy3",
    component: Lazy3,
    name: "Lazy page Three",
  },
];

export default routes;
