import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Header  from '../componentes/Header.jsx'
import {CustomToggle , Example}  from '../componentes/TareasCards.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <CustomToggle/>
      <Example/>
    </div>
  )
};