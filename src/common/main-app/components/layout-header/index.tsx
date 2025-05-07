import classnames from "classnames";
import styles from "./index.module.scss";
import { Tabs } from "antd";
interface LayoutHeaderProps {
  className?: string | string[];
}
const items = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Tab ${id}`,
    key: id,
  };
});
export const LayoutHeader = (props: LayoutHeaderProps) => {
  const { className } = props;
  const cls = classnames(className, {
    [styles["header-content"]]: true,
  });
  return (
    <div className={cls}>
      <Tabs items={items}></Tabs>
    </div>
  );
};
