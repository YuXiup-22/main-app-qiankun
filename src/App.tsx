import styles from "./App.module.scss";
import { RegisterMicroApps } from "./utils/micro-app";
import { MainApp } from "./common/main-app";
function App() {
  return (
    <div className={styles["main-app-body"]}>
      <MainApp />
    </div>
  );
}

export default App;
