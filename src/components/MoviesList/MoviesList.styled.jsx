import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 320px) {
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    column-gap: 16px;
    row-gap: 32px;
  }
`;

export const ListItem = styled.li`
  min-width: 280px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    width: calc((100% - 2 * 16px) / 3);
  }
`;
export const Wrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0);
  transition: box-shadow 0.3s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 398px;
  margin-bottom: 8px;
  border-radius: 5px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 574px;
    margin-bottom: 12px;
  }
`;

export const Text = styled.p`
  text-decoration: none;
  color: black;
`;
