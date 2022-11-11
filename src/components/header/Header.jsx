import { HeaderStyle, Search, Input, Button } from "./Header.styled";

const Header = () => {
  return (
    <HeaderStyle>
      <Search>
        <Input type="search" placeholder="Search..." />
        <Button>Search</Button>
      </Search>
    </HeaderStyle>
  );
};

export default Header;
