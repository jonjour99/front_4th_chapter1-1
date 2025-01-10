import { formHandlers } from "../handlers/formHandlers.js";

export const bindEvents = () => {
  const handlers = {
    "login-form": formHandlers.login,
    "profile-form": formHandlers.profile,
    logout: formHandlers.logout,
  };

  Object.entries(handlers).forEach(([id, handler]) => {
    const element = document.getElementById(id);
    if (!element) return;

    const eventType = element instanceof HTMLFormElement ? "submit" : "click";
    element.addEventListener(eventType, handler);
  });
};
