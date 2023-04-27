const Searchbar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <button type="submit" aria-label="search">
        Search
      </button>

      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
};

export default Searchbar;
