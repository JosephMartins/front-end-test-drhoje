import React from 'react';


import * as S from './styles';

const CardConsulta = ({titulo, img}) => {
  return (
    <S.ConsultaCard>
      <div className="card-img">
        <img src={img} alt=""/>
      </div>
      <div className="card-info">
        <p>Mais vendidos</p>
        <span>Consulta</span>
        <h3>{titulo}</h3>
        <p className="card-preco-anterior"> de <strike>R$60</strike></p>

      </div>
      <hr/>
      <div className="footer-preco">
        <span>Agendar</span>
        <p>por <span className="preco">R$28</span></p>
      </div> 
    </S.ConsultaCard>
  )
}

export default CardConsulta;
