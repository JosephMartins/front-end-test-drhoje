import React, {useRef, useState, useCallback} from 'react';


import * as S from './styles';

const CardPacote = ({titulo, texto, valueInput, img}) => {

  const [isChecked, setIsChecked] = useState(false);
  
  const inputRef = useRef(null);

  
  
  return (
    <S.CardPacote  isChecked={isChecked}>
      <label className="content-card" >
        <input onFocus={() => setIsChecked(true)} onBlur={() => setIsChecked(false)} type="radio" name="pacote" ref={inputRef}  value={valueInput} />
        <div className="info-group">
          <h4>{titulo}</h4>
          <p>{texto}</p>
        </div>
      </label>
      <img src={img} alt=""/>
    </S.CardPacote>
  )
}

export default CardPacote;
