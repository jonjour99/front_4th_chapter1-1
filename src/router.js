import { ROUTES } from "./config/routes.js";
import { auth } from "./utils/auth.js";
import { bindEvents } from "./utils/eventBinding.js";
import { handleLogout } from "./handlers/formHandlers.js";

// 내비게이션 함수
const navigate = (path) => {
  window.history.pushState({}, "", path);
  router();
};

const getCurrentPath = () => window.location.pathname;

export const router = () => {
  const currentPath = getCurrentPath();

  // Auth state checks (로그인 상태 체크)
  if (auth.isAuthenticated()) {
    // 로그인된 사용자가 /login 페이지 접근 시도할 경우
    if (currentPath === "/login") {
      navigate("/");
      return;
    }
  } else {
    // 로그인되지 않은 사용자가 보호된 라우트 접근 시도할 경우
    if (currentPath === "/profile") {
      navigate("/login");
      return;
    }
  }

  // Render page
  const PageComponent = ROUTES[currentPath] || ROUTES["/404"];
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = PageComponent();

  // Bind events after rendering
  bindEvents();
};

export { navigate, getCurrentPath, handleLogout, ROUTES as routes };