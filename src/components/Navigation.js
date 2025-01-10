export const Navigation = (currentPath) => {
  const isLoggedIn = !!localStorage.getItem("user");
  return `
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="${currentPath === "/" ? "text-blue-600" : "text-gray-600"}">홈</a></li>
      <li><a href="/profile" class="${currentPath === "/profile" ? "text-blue-600" : "text-gray-600"}">프로필</a></li>
      <li>
      ${
        isLoggedIn
          ? `<a href="#" id="logout" class="text-gray-600">로그아웃</a>`
          : `<a href="/login" class="${currentPath === "/login" ? "text-blue-600" : "text-gray-600"}">로그인</a>`
      }
      </li>
    </ul>
  </nav>
`;
};
