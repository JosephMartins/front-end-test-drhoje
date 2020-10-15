import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  div.titulo-section{
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    margin: 24px 16px;

    font-weight: bold;
    font-size: 18px;
    
  }
  
  h3{
    font-size: 32px;
    text-align: center;
    margin: 58px 8px 50px 8px ;

  }

  main{
    max-width: 1685px;
    width: 100%;
    margin: 0 auto;
  }

  section.pacotes{
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  section.consultas{
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;



