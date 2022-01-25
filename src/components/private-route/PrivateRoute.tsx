import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user-selector';

import type { RootState } from '../../redux/store';

interface PRProps extends PropsFromRedux {
  redirectTo: string;
}

const PrivateRoute = ({ currentUser, redirectTo }: PRProps) => {
  let location = useLocation();
  console.log({ currentUser });
  if (currentUser)
    return <Navigate to={redirectTo} state={{ from: location }} replace />;

  return <Outlet />;
};

/* Redux w/ Typescript */
const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PrivateRoute);
