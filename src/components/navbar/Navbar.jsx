import { signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import { useLoginContext } from "../../context/AuthContext";
import { LogoImg, Nav, NavAside } from "./Nav.styled";
import logoNoText from "../../assets/logoNoText.svg";
import Logo from "../../assets/Logo";
import homeSvg from "../../assets/logo-no-text.png";
const Navbar = () => {
  const navigate = useNavigate();
  const { loginInfo, setloginInfo } = useLoginContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        setloginInfo();
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">
            <LogoImg src={homeSvg} />
          </Link>
        </li>
        {/* <li>
          <NavLink to="/movie-detail">Movie Detail</NavLink>
        </li> */}
        {!loginInfo ? (
          <NavAside>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </NavAside>
        ) : (
          <NavAside>
            <li>{loginInfo?.displayName}</li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </NavAside>
        )}
      </ul>
    </Nav>
  );
};

export default Navbar;
