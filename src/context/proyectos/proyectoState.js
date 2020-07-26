import React, { useReducer } from 'react';
import {v4 as uuid4 } from 'uuid';
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO
} from '../../types';



const ProyectoState = props => {
    const proyectos = [
        {id: 1, nombre:'Diseno Web'},
        {id: 2, nombre:'Trello'},
        {id: 3, nombre:'Base de Datos'},
        {id: 4, nombre:'Algo que hacer'}
    ]
    const initialState = {
        proyectos : [],
        formulario : false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);
    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid4();

        //agregamos el proyecto
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario : state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}
 export default ProyectoState;
