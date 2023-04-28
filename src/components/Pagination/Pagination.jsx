import { StyledReactPaginate } from './Pagination.styled';
import PropTypes from 'prop-types';
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
      marginPagesDisplayed={1}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
