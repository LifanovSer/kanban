import React from "react";
import SettingsIconSvg from "@img/settingsIcon.svg?react";
import NotificationsIcon from "@img/notifications.svg?react";
import UserPicture from "@img/userPicture.svg?react";
import headersStyle from "./Header.module.css";

export const Header = () => {
  return (
    <header className={headersStyle["header"]}>
      <div className={headersStyle["wrapper-settings"]}>
        <a href="#" className={headersStyle["link-settings"]}>
          <SettingsIconSvg className={headersStyle["settings-icon"]} />
        </a>
        <span className={headersStyle["short-name-page"]}>eveli.todo</span>
      </div>

      <nav className={headersStyle["nav-list-pages"]}>
        <a href="#" className={`${headersStyle["nav-page-link"]}`}>
          Задачи
        </a>
        <a href="#" className={`${headersStyle["nav-page-link"]}`}>
          Проекты
        </a>
        <a href="#" className={`${headersStyle["nav-page-link"]}`}>
          Статистика
        </a>
        <a href="#" className={`${headersStyle["nav-page-link"]}`}>
          Финансы
        </a>
        <a href="#" className={`${headersStyle["nav-page-link"]}`}>
          План
        </a>
        <a href="#" className={`${headersStyle["nav-page-link"]}`}>
          Пользователи
        </a>
      </nav>

      <div className={headersStyle["wrapper-detail-user-info"]}>
        <div className={headersStyle["summ"]}>
          <span className={headersStyle["money-amount"]}> 60 000</span>
          <span className={headersStyle["currency"]}> &#8381; </span>
        </div>
        <NotificationsIcon className={headersStyle["notifications-icon"]} />
        <div className={headersStyle["wrapper-user-info"]}>
          <UserPicture className={headersStyle["user-picture"]} />
          <span className={headersStyle["user-name"]}> Назир </span>
        </div>
      </div>
    </header>
  );
};
