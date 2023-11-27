import React, { useState, useRef } from 'react';
import TaskForm from './TaskForm.jsx';
import TareasLista from './TaskList.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge'; 


function Header() {
  const [formValue, setFormValue] = useState({
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: [],
    domingo: [],
  });

  const idCounter = useRef(1);

  const handleFormSubmit = (value, dia) => {
    const nuevaTarea = { 
      id: idCounter.current++, 
      tarea: value, 
      isCompleted: false 
    };

    console.log(`Nueva tarea ID ${nuevaTarea.id} en ${dia}: ${value}`);

    setFormValue((prevFormValue) => {
      const updatedFormValue = {
        ...prevFormValue,
        [dia]: [...prevFormValue[dia], nuevaTarea],
      };
      
      console.log(`prevFormValue:`, prevFormValue)
      console.log(`${dia} array:`, updatedFormValue[dia]);
  
      return updatedFormValue;
    });
  };

  const completarTarea = (tareaId, dia) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [dia]: prevFormValue[dia].map((tarea) =>
        tarea.id === tareaId ? { ...tarea, isCompleted: !tarea.isCompleted } : tarea
      ),
    }));
  };
  
  const borrarTarea = (tareaId, dia) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [dia]: prevFormValue[dia].filter((tarea) => tarea.id !== tareaId),
    }));
  };

  return (
    <Tabs
      defaultActiveKey="lunes"
      id="tabs"
      className="mb-3"
      transition={false}
      fill
    >
      {['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo',].map((dia) => (
        <Tab key={dia} eventKey={dia} title={
          <div>
            {dia.charAt(0).toUpperCase() + dia.slice(1)}
            <Badge className="px-2 mx-1">{formValue[dia].length}</Badge>
          </div>
        }>
          <TaskForm addTarea={(value) => handleFormSubmit(value, dia)} />
          <TareasLista
            tareas={formValue[dia]}
            tareaCompleta={(tareaId) => completarTarea(tareaId, dia)}
            tareaBorrar={(tareaId) => borrarTarea(tareaId, dia)}
          />
        </Tab>
      ))}
    </Tabs>
  );
}

export default Header;