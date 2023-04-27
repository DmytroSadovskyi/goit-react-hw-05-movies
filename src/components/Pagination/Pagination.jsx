import { StyledReactPaginate } from './Pagination.styled';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <StyledReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      onPageChange={onPageChange}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page"
      activeClassName="active"
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
    />
  );
};

export default Pagination;
