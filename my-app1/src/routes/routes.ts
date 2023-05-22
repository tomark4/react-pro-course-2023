import React from "react";
import { ShoppingPage } from "../02-compound-component-patterns/pages";

type JSXComponent = () => JSX.Element;

export interface RouteI {
  to: string;
  path: string;
  component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: RouteI[] = [
  {
    to: "/shop",
    path: "/shop",
    component: ShoppingPage,
    name: "store",
  },
];

export default routes;
