import React from 'react'
import { FormateaFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';

const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    ocio : IconoOcio,
    gastos : IconoGastos,
    salud : IconoSalud,
}

const Gasto = ({gasto}) => {
    const {categoria,nombre,cantidad,id,fecha} = gasto

  return (
    <div className='gasto sombra'>
        <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="Icono" />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className='fecha-gasto'>
                    Agregado el:{' '} <span>{FormateaFecha(fecha)}</span>
                </p>
            </div>
        </div>

        <p className="cantidad-gasto">${cantidad}</p>
    </div>
  )
}

export default Gasto