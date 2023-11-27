import React, { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BiSolidCheckCircle} from "react-icons/bi";
import { BiSolidXCircle} from "react-icons/bi";
 
const TareaAgregada = ({ tareaCompleta, tareaBorrar, tarea }) => {
  const [esCompletada, setEsCompletada] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll(`.tareaButtonGroup-${tarea.id} button`);
    buttons.forEach((button) => {
      button.classList.toggle('completed', esCompletada);
    });
  }, [esCompletada, tarea.id]);

  const completar = () => {
    setEsCompletada(!esCompletada);
    tareaCompleta(tarea.id);
    console.log(`Tarea ID ${tarea.id} completa`);
  };

  const borrar = () => {
    tareaBorrar(tarea.id);
  };

  return (
    <div className={`tareaDiv tareaButtonGroup-${tarea.id}`}>
      <ButtonGroup>
        <button className="tareaButton">
          {tarea.tarea}
        </button>
        <button className="tareaBorr" onClick={borrar}>
          <BiSolidXCircle />
        </button>
        <button className="tareaCompl" onClick={completar}>
          <BiSolidCheckCircle />
        </button>
      </ButtonGroup>
    </div>
  );
};

export default TareaAgregada;