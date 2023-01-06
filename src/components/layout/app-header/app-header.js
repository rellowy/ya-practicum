import React from "react";
import Link from "../../ui/link/link";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./app-header.module.css";

const AppHeader = (props) => {
  return (
    <header className={appHeaderStyles.appHeader}>
      <div className={"container"}>
        <nav>
          <ul className={appHeaderStyles.menu}>
            <li>
              <ul className={appHeaderStyles.menuGroup}>
                <li>
                  <Link to={"#"} active={true}>
                    <BurgerIcon type="primary" /> Конструктор
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <ListIcon type="secondary" /> Лента заказов
                  </Link>
                </li>
              </ul>
            </li>
            <li className={appHeaderStyles.logoCentered}>
              <Logo />
            </li>
            <li>
              <Link to={"#"}>
                <ProfileIcon type="secondary" /> Личный кабинет
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;

// {menu.map(({ to, children, active, type }) => (
//         <li>
//             {
//                 type === 'logo'
//                     ? children
//                     : <Link to={to} active={active}>{children}</Link>
//             }
//         </li>
//     ))}
