import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../core/UserContext";

const cx = classNames.bind(styles);

export function Header() {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const onLogout = () => {
    localStorage.clear();
    history.push("/");
    setIsLoggedIn(false);
  };

  return (
    <div className={cx("header")}>
      <div className={cx("wrapper-logo")}>
        <Link to="/" className={cx("link")}>
          <h2 className={cx("title")}>Wallaclone</h2>
        </Link>
        <img src="/logo4.png" alt="logo" className={cx("logo")}></img>
      </div>

      <div className={cx("links")}>
        {isLoggedIn && (
          <Link to="/personal-area" className={cx("link")}>
            Área Personal
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/create-ad" className={cx("link")}>
            Crear anuncio
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/login" className={cx("link")}>
            Iniciar sesión
          </Link>
        )}
        {isLoggedIn && (
          <Link onClick={onLogout} className={cx("link")}>
            Cerrar Sesión
          </Link>
        )}
      </div>
    </div>
  );
}
