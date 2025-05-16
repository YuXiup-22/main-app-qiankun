import classnames from "classnames";
import styles from "./index.module.scss";
import { Tabs, Avatar, Input } from "antd";
import {
  SearchOutlined,
  GithubOutlined,
  UserOutlined,
} from "@ant-design/icons";
interface LayoutHeaderProps {
  className?: string | string[];
}
const innerPage = ["Home", "Application"];
const items = innerPage.map((item, i) => {
  const id = String(i + 1);
  return {
    label: item,
    key: id,
    closable: i > 1,
  };
});
// Left extra content
const leftExtra = (
  <div className={styles["left-extra"]}>
    <span className={styles.logo}>LOGO</span>
  </div>
);

// Right extra content
const rightExtra = (
  <div className={styles["right-extra"]}>
    <Input
      placeholder="Search..."
      prefix={<SearchOutlined />}
      className={styles.search}
    />
    <Avatar icon={<UserOutlined />} size={32} className={styles.avatar} />
    <GithubOutlined className={styles.icon} />
  </div>
);
export const LayoutHeader = (props: LayoutHeaderProps) => {
  const { className } = props;
  const cls = classnames(className, {
    [styles["header-content"]]: true,
  });
  return (
    <div className={cls}>
      <Tabs
        hideAdd
        items={items}
        style={{ width: "100%" }}
        type="editable-card"
        tabBarExtraContent={{
          left: leftExtra,
          right: rightExtra,
        }}
      ></Tabs>
    </div>
  );
};
