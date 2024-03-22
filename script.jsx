import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
