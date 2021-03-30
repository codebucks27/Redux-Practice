// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("increment");
export const decrement = createAction("decrement");
export const login = createAction("login");
export const logout = createAction("logout");

// export function increment(payload) {
//   return { type: "increment", payload };
// }

// export function decrement(payload) {
//   return { type: "decrement", payload };
// }

// export function login() {
//   return { type: "login" };
// }

// export function logout() {
//   return { type: "logout" };
// }
