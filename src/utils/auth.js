export const USER_STORAGE_KEY = "user";

export const auth = {
  getUser: () => {
    try {
      return JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || "{}");
    } catch (error) {
      console.error("Error parsing user data:", error);
      return {};
    }
  },

  setUser: (userData) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
  },

  removeUser: () => {
    localStorage.removeItem(USER_STORAGE_KEY);
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(USER_STORAGE_KEY);
  },
};
