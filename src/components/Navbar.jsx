import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/movie-detail">Movie Detail</NavLink>
      </li>
      <li>
        <a onClick={logout}>Logout</a>
      </li>
    </ul>
  );
};

export default Navbar;
