import React,{Fragment, useContext} from 'react';
import Tarea from '../tareas/Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {
    //extraer proyecto del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;


    //sino hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //array destructurin para extraer el proyecto actual 
    const [proyectoActual] = proyecto; 


    


    ///elmina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    return (  
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)

                    : <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea 
                                    
                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListadoTareas;