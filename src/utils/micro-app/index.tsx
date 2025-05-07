import { Routes, Route } from "react-router-dom";
import { MicroAppContainer } from "./container";
const microApps = [
  {
    name: "reactApp",
    entry: "//localhost:5174",
    container: "#container",
    activeRule: "/app-react",
  },
  {
    name: "vueApp",
    entry: "//localhost:5174",
    container: "#container",
    activeRule: "/app-vue",
  },
];
export const RegisterMicroApps = () => {
  return (
    <Routes>
      {microApps.map((item, index) => {
        return (
          <Route
            path={item.activeRule}
            element={
              <MicroAppContainer
                container={"micro-app-" + item.name + "-" + index}
                name={item.name}
                entry={item.entry}
              />
            }
          ></Route>
        );
      })}
    </Routes>
  );
};
