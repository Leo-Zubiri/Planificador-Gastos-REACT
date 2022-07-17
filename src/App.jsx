import { useState, useEffect } from 'react'
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

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => { 
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);
  
      setTimeout(() => { 
        setAnimarModal(true);
      },400)
    }
  },[gastoEditar]);

  //----------------------------------------------------------------------------
  const handleNuevoGasto = () => { 
    setModal(true);
    setGastoEditar({})

    setTimeout(() => { 
      setAnimarModal(true);
    },400)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      // Actualizar
      const gastosActualizados = gastos.map(gastoOriginal => gastoOriginal.id === 
        gasto.id ? gasto : gastoOriginal)

      setGastos(gastosActualizados);
      setGastoEditar({});

    }else{
      // Nuevo
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto]);
    }
    setModal(false);
    setTimeout(() => { 
      setAnimarModal(false);
    },400)
  }

  const eliminarGasto = (id) => { 
    console.log('Eliminando',id);
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);

    setGastos(gastosActualizados);
  }

  //-----------------------------------------------------------------------------

  return (
    <div className={modal ? 'fijar':''}>
      <Header
      gastos={gastos}
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
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />}

    </div>
    
  )
}

export default App
