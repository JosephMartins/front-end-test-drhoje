import React from 'react';
import {FaAngleRight} from 'react-icons/fa';

import {BuscarMais} from './styles';

const CardConsulta = () => {
  return (
    <BuscarMais>
      <div className="Content">
        <FaAngleRight />
      </div>
      <p>Buscar mais especialidades</p>
    </BuscarMais>
  )
}

export default CardConsulta;
