import { HeaderStyle, Search, Input, Button } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyle>
      <Search>
        <Input placeholder="Search..." />
        <Button>Search</Button>
      </Search>
    </HeaderStyle>
  );
};

export default Header;
