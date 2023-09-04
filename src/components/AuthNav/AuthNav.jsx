import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Login, CoPresent } from '@mui/icons-material';
import { StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button color="inherit" variant="outlined" endIcon={<CoPresent />}>
          <StyledLink variant="contained" to="/register">
            Registration
          </StyledLink>
        </Button>
        <Button color="inherit" variant="outlined" endIcon={<Login />}>
          <StyledLink variant="contained" to="/login">
            Log In
          </StyledLink>
        </Button>
      </Stack>
    </>
  );
};

export default AuthNav;
