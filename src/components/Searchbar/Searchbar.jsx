import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchButton type="submit" aria-label="search">
        <HiMagnifyingGlass />
        <SearchButtonLabel>Search</SearchButtonLabel>
      </SearchButton>

      <SearchInput
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchForm>
  );
};

export default Searchbar;
