import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, StyledList, StyledHeader } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledList>
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </StyledList>
        </nav>
      </StyledHeader>
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
