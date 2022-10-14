import styled from '@emotion/styled';
import { getNextYear } from '@parks/graphql-client';
import { currentYear } from '@parks/utils';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome to parks 👋
            </h1>
          </div>

          <div id="hero" className="rounded">
            <div className="text-container">
              <h2>
                The year is {currentYear()}, next year will be {getNextYear()}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
