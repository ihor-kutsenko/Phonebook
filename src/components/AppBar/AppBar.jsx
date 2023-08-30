import { Header } from './AppBar.styled';

const AppBar = ({ children }) => {
  return <Header position="absolute">{children}</Header>;
};

export default AppBar;
