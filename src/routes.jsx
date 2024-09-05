import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MainContainer from "./containers/MainContainer/MainContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainContainer type="home" /> },
      {
        path: "/category/:id",
        element: <MainContainer type="category" />,
      },
      { path: "product/:id", element: <MainContainer type="product" /> },
    ],
    errorElement: <span>Error!</span>,
  },
]);

export default routes;
