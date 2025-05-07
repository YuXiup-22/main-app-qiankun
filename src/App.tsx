import { useState } from "react";
import "./App.css";
import { RegisterMicroApps } from "./utils/micro-app";
function App() {
  return (
    <>
      <div>
        layout框架
        <RegisterMicroApps></RegisterMicroApps>
      </div>
    </>
  );
}

export default App;
