import { router } from "./router.js";

// 링크 클릭 이벤트 처리
document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href !== "#") {
      window.history.pushState({}, "", href);
      router();
    }
  }
});

// 브라우저 뒤로가기/앞으로가기 처리
window.addEventListener("popstate", router);

// 초기 라우팅 처리
window.addEventListener("DOMContentLoaded", () => {
  router();

});
