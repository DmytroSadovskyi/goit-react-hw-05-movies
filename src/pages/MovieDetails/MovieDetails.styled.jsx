import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 10px 20px;
`;
export const GoBackLink = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  background-color: gainsboro;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;

export const MovieTitle = styled.h1`
  margin-bottom: 15px;
  text-align: center;
`;

export const MoviePosterWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
  margin-bottom: 15px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  overflow: hidden;
`;

export const MoviePoster = styled.img`
  display: block;
  margin-right: 10px;
`;

export const UserScore = styled.span`
  margin-bottom: 10px;
`;

export const Genres = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const OverviewTitle = styled.h2`
  margin-bottom: 10px;
`;

export const OverviewContent = styled.p`
  margin-bottom: 20px;
`;

export const ListOfLinks = styled.ul`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
`;

export const InfoLink = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  color: black;
  background-color: gainsboro;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;
