interface HeaderProps {
  children: string;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <h1>{children}</h1>
  );
};

export default Header;