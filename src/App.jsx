import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import React from 'react';
import Header  from '../componentes/Header.jsx';

function ParentComponent() {
  return (
    <>
      <h1>Tareas de la Semana</h1>    
      <div>
        <Header/>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default ParentComponent;
