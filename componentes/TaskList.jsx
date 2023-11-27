import React from 'react';
import TareaAgregada from './TaskItem.jsx';


const TareasLista = ({ tareas, tareaCompleta, tareaBorrar }) => {
  return (
    <div>
      {tareas.map((tarea) => (
        <TareaAgregada
          key={tarea.id}
          tarea={tarea} 
          tareaCompleta={tareaCompleta}
          tareaBorrar={tareaBorrar}
        />
      ))}
    </div>
  );
};

export default TareasLista;