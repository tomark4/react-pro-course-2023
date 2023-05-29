import React from "react";
import { ShoppingPage } from "../02-compound-component-patterns/pages";
import { FormsPage } from "../03-forms/pages/";

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
  {
    to: "/forms",
    path: "/forms",
    component: FormsPage,
    name: "forms",
  },
];

export default routes;
