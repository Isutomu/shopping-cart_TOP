import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MainContainer from "./containers/MainContainer/MainContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainContainer isHome={true} /> },
      { path: "/category/:categoryId", element: <MainContainer /> },
      { path: "product/:productId", element: <MainContainer /> },
    ],
  },
]);

export default routes;
