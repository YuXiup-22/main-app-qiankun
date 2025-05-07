import styles from "./index.module.scss";
import { LayoutHeader } from "../layout-header";
export const MainAppLayout = () => {
  return (
    <div className={styles["main-app-layout"]}>
      <LayoutHeader className={styles["layout-header"]}></LayoutHeader>
    </div>
  );
};
