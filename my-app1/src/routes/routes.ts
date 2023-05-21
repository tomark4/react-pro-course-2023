import React, { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

export interface RouteI {
  to: string;
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);
// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2 */ "../01-lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
// );

export const routes: RouteI[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    component: LazyLayout,
    name: "Dashboard",
  },
  // { to: "/lazy2", path: "lazy2", component: Lazy2, name: "Lazy page two" },
  // {
  //   to: "/lazy3",
  //   path: "lazy3",
  //   component: Lazy3,
  //   name: "Lazy page Three",
  // },
  {
    to: "/no-lazy",
    path: "no-lazy",
    component: NoLazy,
    name: "No Lazy",
  },
];

export default routes;
