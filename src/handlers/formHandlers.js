import { auth } from "../utils/auth.js";
import { navigate, router } from "../router.js";

export const formHandlers = {
  login: (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    auth.setUser({ username, email: "", bio: "" });
    navigate("/");
  },

  profile: (event) => {
    event.preventDefault();
    const currentUser = auth.getUser();
    const updatedUser = {
      ...currentUser,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      bio: document.getElementById("bio").value,
    };
    auth.setUser(updatedUser);
    router();
  },

  logout: (event) => {
    event.preventDefault();
    auth.removeUser();
    navigate("/login");
  },
};

export const handleLogout = formHandlers.logout;
