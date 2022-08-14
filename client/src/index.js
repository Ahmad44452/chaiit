import ReactDom from "react-dom/client"
import { Provider } from "react-redux";

import AppRoutes from "./AppRoutes";

import store from "./store/index";

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)