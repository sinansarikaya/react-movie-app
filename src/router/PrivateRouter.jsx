import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { loginInfo } = useLoginContext();
  console.log(loginInfo);

  return loginInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
