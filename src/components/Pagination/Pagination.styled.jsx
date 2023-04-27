import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  flex-wrap: nowrap;

  color: blue;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 5px;

  .previous {
    padding: 5px;
    background-color: gainsboro;
    border-radius: 5px;
    cursor: pointer;
  }

  .next {
    padding: 5px;
    background-color: gainsboro;
    border-radius: 5px;
    cursor: pointer;
  }

  .page {
    padding: 5px 10px;
    background-color: gainsboro;
    border-radius: 5px;
    cursor: pointer;
  }

  .active {
    background-color: blue;
    color: white;
  }
`;
