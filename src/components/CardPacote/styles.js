import styled, {css} from 'styled-components';


export const CardPacote = styled.section`
  display: flex;
  align-items: center;
  height: 77px;
  max-width: 387px;
  width: 100%;
  cursor: pointer;

  justify-content: space-between;
  border-radius: 4px;
  padding: 0 18px;
  margin: 8px 16px;

  border: 1px solid #0000001F;


  ${(props) => props.isChecked && css`
      border: 2px solid #0439D6;
  `}

  img{
    width: 32px;
    background: transparent;
  }

  

  input{
    margin-right: 12px;
  }

  label.content-card{
    display: flex;
    align-items: center;
  }

  div.info-group{
    h4{
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
    }

    p{
      font-size: 15px;
    }
  }

  &:nth-child(4){
    div.info-group{
      h4{
        text-transform: none;
      }
    }
  }
`;  