import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";

const routes = createBrowserRouter([{ path: "/", element: <App /> }]);

export default routes;
