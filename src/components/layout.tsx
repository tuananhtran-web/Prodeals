import { getSystemInfo } from "zmp-sdk";
import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";
import { AppProps } from "zmp-ui/app";

import HomePage from "@/pages/index";
import CategoryPickleball from "@/pages/category-pickleball";
import CategoryTennis from "@/pages/category-tennis";
import CategoryBongDa from "@/pages/category-bongda";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/category/pickleball" element={<CategoryPickleball />}></Route>
            <Route path="/category/tennis" element={<CategoryTennis />}></Route>
            <Route path="/category/bong-da" element={<CategoryBongDa />}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;
