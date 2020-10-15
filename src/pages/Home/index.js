import React from 'react';

import CardPacote from '../../components/CardPacote';
import CardConsulta from '../../components/CardConsulta';
import BuscarMais from '../../components/BuscarMais';

import IconBlue from '../../assets/imgs/icon-blue.svg';
import IconBlack from '../../assets/imgs/icon-black.svg';
import IconPink from '../../assets/imgs/icon-blu.svg';
import IconCiano from '../../assets/imgs/icon-pink.svg';

import img1 from '../../assets/imgs/gine.png';
import img2 from '../../assets/imgs/card.png';
import img3 from '../../assets/imgs/clin.png';


import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <h3>Agende suas consultas e exames de forma rápida. Selecione uma assinatura e aproveite já as ofertas!</h3>

      <section className="pacotes">
        <CardPacote titulo="dr. black" texto="Selecione para ver as ofertas!" img={IconBlack} />
        <CardPacote titulo="dr. top" texto="Selecione para ver as ofertas!" img={IconCiano} />
        <CardPacote titulo="dr. up" texto="Selecione para ver as ofertas!" img={IconPink} />
        <CardPacote titulo="Nenhuma assinatura" texto="Selecione para ver as ofertas!" img={IconBlue} />
      </section>
      <div className="titulo-section">
        <p >Consultas</p>
      </div>
      <section className="consultas">
        <CardConsulta titulo="Clínica Médica" img={img1} />
        <CardConsulta titulo="Cardiologia" img={img2} />
        <CardConsulta titulo="Ginecologia e Obstetríca" img={img3} />
        <BuscarMais  />
      </section>
    </S.Container>
  )
}

export default Home;
