import render from "../core/render";
import isLogin from "../utils/isLogin";
import handleProfile from "../pages/handleProfile";

import ROUTES from "./routes";
import ErrorPage from "../pages/ErrorPage";

const router = (path) => {
  if (window.location.hash) return;
  path = path || window.location.pathname;

  if (path === "/profile") {
    if (!isLogin()) {
      path = "/login";
    }
  }

  if (path === "/login" && isLogin()) {
    path = "/";
  }

  window.history.pushState({}, "", path);
  const component = (ROUTES[path] || (() => ErrorPage()))();
  render(component);
  handleProfile();
};

export default router;
