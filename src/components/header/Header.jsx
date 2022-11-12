import { useState } from "react";
import { HeaderStyle, Search, Input, Button } from "./Header.styled";

const Header = ({ API_KEY, setMovies }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const FEATURED_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;

    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => setMovies(data?.results))
      .finally(() => setSearch(""));
  };

  return (
    <HeaderStyle>
      <Search onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Search>
    </HeaderStyle>
  );
};

export default Header;
