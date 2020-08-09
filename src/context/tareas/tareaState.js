import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id:1, nombre: 'Elegir Plataforma', estado: true, proyectoID:1},
            {id:2, nombre: 'Elegir Colores', estado: true, proyectoID:2},
            {id:3, nombre: 'Elegir Plataforma de pago', estado: false, proyectoID:3},
            {id:4, nombre: 'Elegir Hosting', estado: true, proyectoID:4},
            {id:5, nombre: 'Elegir Colores', estado: true, proyectoID:2},
            {id:6, nombre: 'Elegir Plataforma de pago', estado: false, proyectoID:3},
            {id:7, nombre: 'Elegir Hosting', estado: true, proyectoID:4},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
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
        tarea.id = uuidv4();
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

    //eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //extraer una tarea para us edicion
     const guardarTareaActual = tarea => {
         dispatch({
             type: TAREA_ACTUAL,
             payload: tarea
         })
        }

    //edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //eliminar la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;