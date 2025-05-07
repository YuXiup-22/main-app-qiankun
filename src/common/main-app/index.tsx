/**
 * 处理主应用的核心逻辑
 * 1.页面的刷新和关闭情况，
 * 2.代理子应用路由
 * 3.卸载子应用
 * 4.获取权限等基本数据
 */

import styles from "./index.module.scss";
import { MainAppLayout } from "./components/main-layout";
export const MainApp = () => {
  return (
    <div className={styles["main-app-content"]}>
      <MainAppLayout />
    </div>
  );
};
