import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div>
      <AppBar>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
