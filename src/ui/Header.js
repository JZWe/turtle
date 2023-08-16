import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="/icons/ubike.png" className="logo" alt="ubike-logo" />
      <nav className="nav">
        <NavLink
          to="instruction"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          使用說明
        </NavLink>
        <NavLink
          to="price"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          收費方式
        </NavLink>
        <NavLink
          to="siteinfo"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          站點資訊
        </NavLink>
        <NavLink
          to="newmessage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          最新消息
        </NavLink>
        <NavLink
          to="activity"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          活動專區
        </NavLink>
      </nav>
      <button className="login-button">登入</button>
    </div>
  );
}

export default Header;
