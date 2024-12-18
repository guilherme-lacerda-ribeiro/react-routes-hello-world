import { NavLink} from "react-router-dom";
// import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  // const localizacao = useLocation();

  return (
    // <Link
    //   to={to}
    //   className={`
    //     ${styles.link}
    //     ${localizacao.pathname === to ? styles.linkDestacado : ""}
    //   `}
    // >
    //   {children}
    // </Link>

    // <NavLink
    //   to={to}
    //   className={({isActive}) => {
    //     let estilo = styles.link + ' '
    //     estilo += isActive ? styles.linkDestacado : ''
    //     return estilo
    //   }}
    // >
    //   {children}
    // </NavLink>

    <NavLink
      to={to}
      className={({isActive}) => `
        ${styles.link}
        ${isActive ? styles.linkDestacado : ''}
      `}
    >
      {children}
    </NavLink>
  );
}
