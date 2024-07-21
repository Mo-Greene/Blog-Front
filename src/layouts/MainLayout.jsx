import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
`

const Main = styled.main`
    flex: 1;
    padding: 0rem 2rem 2rem 2rem;    
    width: 80%;
    margin-left: 1rem;
`

const MainLayout = ({children}) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

export default MainLayout;