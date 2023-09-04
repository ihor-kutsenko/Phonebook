import { useDispatch } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

import { Wrapper, Username, Btn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Btn
        type="button"
        color="inherit"
        variant="outlined"
        endIcon={<Logout />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Btn>
    </Wrapper>
  );
};

export default UserMenu;
