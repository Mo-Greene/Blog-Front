import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
`

const Main = styled.main`
    flex: 1;
    width: 100%;
    max-width: 100%;
    margin: auto;
`

const MainLayout = ({children}) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

export default MainLayout;