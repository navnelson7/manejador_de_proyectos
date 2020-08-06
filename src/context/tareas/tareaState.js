import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

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
    }

    //crear dispatch y state
    const [state,dispatch] = useReducer(TareaReducer,initialState);
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;