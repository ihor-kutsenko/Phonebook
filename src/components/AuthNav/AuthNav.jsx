import { StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <StyledLink variant="contained" to="/register">
        Register
      </StyledLink>
      <StyledLink variant="contained" to="/login">
        Log In
      </StyledLink>
    </>
  );
};

export default AuthNav;
