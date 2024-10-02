import { FC } from "react";

export interface iRouteProps {
  path: string;
  name: string;
  icon: ForwardRefExoticComponent;
  component: FC;
  layout: string;
}
export interface iRoutes {
  map(arg0: (prop: iRouteProps, key: number) => JSX.Element | null);
  route: iRouteProps;
}
