import React from 'react'

import FormFloatingLayoutExample  from '../componentes/FormCard.jsx'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="lunes" title="Lunes">
        <FormFloatingLayoutExample/>
      </Tab>
      <Tab eventKey="martes" title="Martes">
        <FormFloatingLayoutExample/>
      </Tab>
      <Tab eventKey="miercoles" title="Miercoles">
        <FormFloatingLayoutExample/>
      </Tab>
      <Tab eventKey="jueves" title="Jueves">
        <FormFloatingLayoutExample/>
      </Tab>
      <Tab eventKey="viernes" title="Viernes">
        <FormFloatingLayoutExample/>
      </Tab>
      <Tab eventKey="sabado" title="Sábado">
        <FormFloatingLayoutExample/>
      </Tab>
      <Tab eventKey="domingo" title="Domingo">
        <FormFloatingLayoutExample/>
      </Tab>
    </Tabs>
  );
}

export default FillExample;