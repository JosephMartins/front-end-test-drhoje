import styled from 'styled-components';

export const BuscarMais = styled.section`
  margin: 0 16px;
  max-width: 387px;
  width: 100%;
  height: 320px;
  border-left: 2px solid #dcdde2;

  display:flex;
  align-items: center;

  &:hover{
    div{
      background: #0439D6;
      color: #fff;
    }
  }
 
  div{
    margin: 0 16px;
    border: 1px solid #0439D6;
    padding: 16px;
    border-radius: 50%;
    color: #0439D6;
    font-size: 18px;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    
  }

  p{
    font-weight: 600;
    color: #0439D6;
    font-size: 22px;
    line-height: 1;
    text-transform: uppercase;
  }
  
`;