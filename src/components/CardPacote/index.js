import React, { useState } from 'react';


import  * as S from './styles';

const CardPacote = ({ titulo, texto, valueInput, img }) => {

  const [isChecked, setIsChecked] = useState(false);
    
  return (
    <S.CardPacote  isChecked={isChecked}>
      <label className="content-card" >
        <input onFocus={() => setIsChecked(true)} onBlur={() => setIsChecked(false)} type="radio" name="pacote"  value={valueInput} />
        <div className="info-group">
          <h4>{titulo}</h4>
          <p>{texto}</p>
        </div>
      </label>
      <img src={img} alt="Icone Pacote"/>
    </S.CardPacote>
  )
}

export default CardPacote;
