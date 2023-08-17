import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <div className="header">
      <img src="/icons/ubike.png" className="logo" alt="ubike-logo" />
      <button
        className={
          isMobileNavVisible ? `hamburger-button active` : `hamburger-button`
        }
        onClick={() => setIsMobileNavVisible((prevState) => !prevState)}
      ></button>
      <nav className={isMobileNavVisible ? `nav show` : `nav`}>
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
        <button className="login-button">登入</button>
      </nav>
    </div>
  );
}

export default Header;
