import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import DefaultLayout from "../components/DefaultLayout";

const HASH_ROUTES = {
  "#/": () => DefaultLayout(MainPage),
  "#/profile": () => DefaultLayout(ProfilePage),
  "#/login": () => LoginPage(),
};

export default HASH_ROUTES;
