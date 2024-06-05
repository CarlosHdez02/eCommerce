import { Outlet, Link } from "react-router-dom";
import crown from "../../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={crown} alt="Logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-In">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
