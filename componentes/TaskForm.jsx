import React, { useState } from 'react';
import { BiListPlus } from "react-icons/bi";


const TaskForm = ({ addTarea }) => {

  const [tareaNueva, setTarea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tareaNueva.trim() !== '') {
      if (addTarea) {
        addTarea(tareaNueva);
        setTarea('');
      }
    }
  };

  //Formulario
  return (
    <div className='formulario'>
      <h3>Nueva Tarea: </h3>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={tareaNueva}
            onChange={(e) => setTarea(e.target.value)}
          />
        <button type="submit" className='nuevaTareaButton'>
          <BiListPlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;