import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import CategoriesHome from "./containers/CategoriesHome/CategoriesHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CategoriesHome /> },
      { path: "/category/:storeCategory", element: <CategoriesHome /> },
    ],
  },
]);

export default routes;
