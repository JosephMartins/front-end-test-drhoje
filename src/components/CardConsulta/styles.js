import styled from 'styled-components';

export const ConsultaCard = styled.section`
  margin: 16px 16px;
  max-width: 387px;
  width: 100%;
  height: 320px;

  border-radius: 18px; 
  background: linear-gradient(to bottom right,#e6eef8,#FEFEFF,#e6eef8);
  box-shadow: 0px 3px 6px #00000029;
  
  div.card-img{
    display: flex;
    justify-content: flex-end;
    
    img{
      display: block;
      max-width: 100%;
    }
  }
  

  div.card-info{
    box-sizing: border-box;
    padding: 0 16px;


    p{
      font-size: 16px;
      text-align: left;
      text-transform: uppercase;

    }

    strike{
      font-size: 14px;
    }

    p.card-preco-anterior{
      text-transform: none;
      text-align: right;
    }

    span{
      color: red;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 10px;

    }

    h3{
      margin-left: 0;
      font-size: 26px;
      text-align: left;
      font-weight: bold;
      margin-top: 12px;
      margin-bottom: 8px;
      line-height: 1;
      max-width: 250px;
      height: 50px;
    }
    

      p{
        text-transform: none;
        font-size: 18px;
        
        span{
          font-size: 24px;
          color: #0439D6;
        }
      }
    }

    div.footer-preco{
      display: flex;
      justify-content: space-between;

    
      border-radius: 0  0 18px  18px;
      height: 15%;
      padding: 0 16px 0 16px;
      transition:  0.6s;

      div{
        border-top: 1px solid grey;
        width: 100%;
        display: flex;
        justify-content:space-between;
      }

      span{
        color: black;
        font-weight: bold;
        font-size: 16px;
        color: #0439D6;
        transition:  0.6s;
        margin-top: 8px;
      }

      p{
        transition:  0.6s;
        margin-top: 8px;

      }
    }

  &:hover{
    div.footer-preco{
      background: #0439D6;
      
      div{
        border-top: 1px solid #0439D6;
      }

      span{
        color: white;
      }
      p{
        color: white;
      }
    }
  }
`;