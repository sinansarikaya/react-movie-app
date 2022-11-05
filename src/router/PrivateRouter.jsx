import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { loginInfo } = useLoginContext();

  return loginInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
