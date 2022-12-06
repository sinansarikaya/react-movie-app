import { useContext } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { AuthContext } from "../context/AuthContextProvider";
import { GlobalStyles } from "../globalStyled/GlobalStyles";
import Login from "../pages/forms/Login";
import PasswordReset from "../pages/forms/PasswordReset";
import Register from "../pages/forms/Register";
import Home from "../pages/home/Home";
import Detail from "../pages/movieDetail/Detail";
import NotFound from "../pages/notFound/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const LoginRouter = () => {
    const { currentUser } = useContext(AuthContext);

    return !currentUser ? <Outlet /> : <Navigate to="/" />;
  };
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/login" element={<LoginRouter />}>
          <Route path="" element={<Login />} />
        </Route>

        <Route path="/register" element={<LoginRouter />}>
          <Route path="" element={<Register />} />
        </Route>

        <Route path="/password-reset" element={<LoginRouter />}>
          <Route path="" element={<PasswordReset />} />
        </Route>

        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
