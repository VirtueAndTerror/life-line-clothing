import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user-selector';
interface PRProps {
  redirectTo: string;
}

const PrivateRoute = ({ redirectTo }: PRProps) => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  console.log({ currentUser });
  if (currentUser)
    return <Navigate to={redirectTo} state={{ from: location }} replace />;

  return <Outlet />;
};

export default PrivateRoute;
