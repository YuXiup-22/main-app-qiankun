export {}; // 必须存在,标记为模块
declare global {
  interface Window {
    /**是否为主应用 */
    __IN_MAIN_APP__: boolean | undefined;
    /**已激活子应用合集,可手动卸载 */
    microAppMap: Record<any, any>;
  }
}
