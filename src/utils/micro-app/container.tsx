/**
 * 子应用容器
 */
import { useEffect } from "react";
import styles from "./index.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { loadMicroApp } from "qiankun";
interface MicroAppContainerProps {
  name: string;
  entry: string;
  container: string;
}
export const MicroAppContainer = (props: MicroAppContainerProps) => {
  const { name, entry, container } = props;
  useEffect(() => {
    const containerDom = document.getElementById(container);
    if (!containerDom) {
      console.log("未获取到挂载节点！");
      return;
    }
    // 注册乾坤,返回微应用实例
    /**
     * 1.暂时先不传信息给子应用，
     * 后续可能会传router等数据，和主应用某些数据
     * 2.什么时候卸载，在哪里卸载
     */
    const microapp = loadMicroApp(
      {
        container: containerDom,
        name: name,
        entry: entry,
      },
      {
        sandbox: {
          experimentalStyleIsolation: true,
        },
      }
    );
    const microAppMap = { ...(window?.microAppMap ?? {}), [name]: microapp };
    window.microAppMap = microAppMap;
    return () => {
      microapp.unmount();
    };
  }, [name, entry, container]);
  return (
    <div className={styles["micro-app-container"]} id={container}>
      子应用容器-{name}
    </div>
  );
};
