import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px;
  border-bottom: 1px solid black;
`;
export const StyledList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: magenta;
  }
`;
