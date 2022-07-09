import { useState } from 'react'
import Header from './components/Header'

import IconoNuevoGasto from './img/nuevo-gasto.svg'

import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';

import {generarID} from './helpers';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);  
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([]);

  //----------------------------------------------------------------------------
  const handleNuevoGasto = () => { 
    setModal(true);

    setTimeout(() => { 
      setAnimarModal(true);
    },400)
  }

  const guardarGasto = gasto => {
    gasto.id = generarID();
    gasto.fecha = Date.now();
    setGastos([...gastos,gasto]);
    
    setModal(false);
    setTimeout(() => { 
      setAnimarModal(false);
    },400)
  }

  //-----------------------------------------------------------------------------

  return (
    <div className={modal ? 'fijar':''}>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
    />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />}

    </div>
    
  )
}

export default App
