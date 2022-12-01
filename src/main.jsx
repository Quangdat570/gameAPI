// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store";
import App from "./App";

import Game from "./pages/game/game";
import Info from "./pages/info/Info";

const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Game />} />
    <Route path="/info/:id" element={<Info />} />

    <Route path="*" element={<div>404 | Page Not Found</div>} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
