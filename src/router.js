import { HomePage } from "./pages/HomePage.js";
import { ProfilePage } from "./pages/ProfilePage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";
export const routes = {
  "/": HomePage,
  "/profile": ProfilePage,
  "/login": LoginPage,
  "/404": NotFoundPage,
};
const handlers = {
  login: (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    localStorage.setItem(
      "user",
      JSON.stringify({ username, email: "", bio: "" }),
    );
    navigate("/profile");
  },
  profile: (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const updatedUser = {
      ...user,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      bio: document.getElementById("bio").value,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    router();
  },
};
const navigate = (path) => {
  window.history.pushState({}, "", path);
  router();
};
export const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  navigate("/login");
};
export const router = () => {
  const path = window.location.pathname;
  const isAuthenticated = !!localStorage.getItem("user");
  if (path === "/profile" && !isAuthenticated) {
    navigate("/login");
    return;
  }
  const page = routes[path] || routes["/404"];
  document.getElementById("root").innerHTML = page();
  // 이벤트 핸들러 연결
  const forms = {
    "login-form": handlers.login,
    "profile-form": handlers.profile,
    logout: handleLogout,
  };
  Object.entries(forms).forEach(([id, handler]) => {
    const element = document.getElementById(id);
    if (element) {
      element instanceof HTMLFormElement
        ? element.addEventListener("submit", handler)
        : element.addEventListener("click", handler);
    }
  });
};
