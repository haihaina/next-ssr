import { FC, useContext, useRef } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/stores/theme";
import { UserAgentContext } from "@/stores/userAgent";
import { Themes, Environment } from "@/constants/enum";
import { Popup, IPopupRef } from "../popup";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface INavBarProps {}

// eslint-disable-next-line no-empty-pattern
export const NavBar: FC<INavBarProps> = ({}) => {
  const { setTheme } = useContext(ThemeContext);
  const { userAgent } = useContext(UserAgentContext);
  const popupRef = useRef<IPopupRef>(null);

  return (
    <div className={styles.navBar}>
      <a href="http://127.0.0.1:3000/">
      
      {/* 
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      @ts-ignore */}
        <div className={styles.logoIcon}></div>
      </a>
            {/* 
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      @ts-ignore */}
      <div className={styles.themeArea}>
        <div
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore 
          className={styles.popupText}
          onClick={(): void => {
            popupRef.current?.open();
          }}
        >
          弹窗示范
        </div>
        {userAgent === Environment.pc && (
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore 
          <span className={styles.text}>当前是pc端样式</span>
        )}
        {userAgent === Environment.ipad && (
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore 
          <span className={styles.text}>当前是Ipad端样式</span>
        )}
        {userAgent === Environment.mobile && (
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore 
          <span className={styles.text}>当前是移动端样式</span>
        )}
        <div
             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore 
          className={styles.themeIcon}
          onClick={(): void => {
            if (localStorage.getItem("theme") === Themes.light) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
        ></div>
      </div>
      <Popup ref={popupRef}>
        <div>这是一个弹窗</div>
      </Popup>
    </div>
  );
};
