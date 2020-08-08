import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir Plataforma', estado: true, proyectoID:1},
            {nombre: 'Elegir Colores', estado: true, proyectoID:2},
            {nombre: 'Elegir Plataforma de pago', estado: false, proyectoID:3},
            {nombre: 'Elegir Hosting', estado: true, proyectoID:4},
            {nombre: 'Elegir Colores', estado: true, proyectoID:2},
            {nombre: 'Elegir Plataforma de pago', estado: false, proyectoID:3},
            {nombre: 'Elegir Hosting', estado: true, proyectoID:4},
        ],
        tareasproyecto: null,
        errortarea: false
    }

    //crear dispatch y state
    const [state,dispatch] = useReducer(TareaReducer,initialState);

    //crear las funciones
     const obtenerTareas = proyectoID => {
         dispatch({
             type: TAREAS_PROYECTO,
             payload: proyectoID 
         })
     }
    //agregar  una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //valida y muestra un error en caso sea necesario
    const validarTarea = () =>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;