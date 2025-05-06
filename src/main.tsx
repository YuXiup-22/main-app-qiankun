import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// 1.设置全局变量，标记这是主应用
window.__IN_MAIN_APP__ = true;

// 2.渲染应用
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 3.注册微应用
