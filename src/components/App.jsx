import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// pages
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

import SharedLayout from './SharedLayout/Sharedlayout';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './Restrictedroute';

import './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<Login />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
}
