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
import CategoryCauLong from "@/pages/category-cau-long";
import CategoryBida from "@/pages/category-bida";
import CategoryBongBan from "@/pages/category-bong-ban";
import DiscoverPage from "@/pages/discover";
import NotificationPage from "@/pages/notification";
import ProfilePage from "@/pages/profile";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/discover" element={<DiscoverPage />}></Route>
            <Route path="/notification" element={<NotificationPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/category/pickleball" element={<CategoryPickleball />}></Route>
            <Route path="/category/tennis" element={<CategoryTennis />}></Route>
            <Route path="/category/bong-da" element={<CategoryBongDa />}></Route>
            <Route path="/category/cau-long" element={<CategoryCauLong />}></Route>
            <Route path="/category/bida" element={<CategoryBida />}></Route>
            <Route path="/category/bong-ban" element={<CategoryBongBan />}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;
