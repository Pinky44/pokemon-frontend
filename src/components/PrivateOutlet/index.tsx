import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "src/store/hooks/useTypedSelector";

export const PrivateOutlet = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};
