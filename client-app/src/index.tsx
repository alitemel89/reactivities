import React from "react";
import { createRoot } from "react-dom/client";
import "react-calendar/dist/Calendar.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "./app/layout/styles.css";
import { store, StoreContext } from "./app/stores/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
