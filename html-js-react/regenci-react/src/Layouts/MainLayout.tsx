import { FC } from "react";
import { routes } from "../utils/routes";
import { Route, Switch, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { iRouteProps } from "../utils/interfaces/routes";
import { AnimatePresence } from "framer-motion";

const MainLayout: FC = (_props) => {
  const location = useLocation();

  const getRoutes = (routes: iRouteProps[]) => {
    return routes?.map((prop: iRouteProps, key: number) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop?.component}
          key={key}
        />
      );
    });
  };
  return (
    <div className="main__layout">
      <Sidebar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location?.pathname}>
          {getRoutes(routes)}
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
