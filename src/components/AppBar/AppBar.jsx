import * as React from 'react';
import Typography from '@mui/material/Typography';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import Toolbar from '@mui/material/Toolbar';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import { Header, Container, LinkLogo } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Toolbar disableGutters>
          <BookRoundedIcon
            sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
          />
          <LinkLogo to="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              PHONEBOOK
            </Typography>
          </LinkLogo>
        </Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};

export default AppBar;
