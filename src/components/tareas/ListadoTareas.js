import React,{Fragment, useContext} from 'react';
import Tarea from '../tareas/Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
const ListadoTareas = () => {
    //extraer proyecto del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;
    //sino hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>;

    //array destructurin para extraer el proyecto actual 
    const [proyectoActual] = proyecto; 


    

    const tareasProyectos = [];

    ///elmina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    return (  
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyectos.length === 0
                    ? (<li className="tarea"><p>No hay Tareas</p></li>)

                    : tareasProyectos.map(tarea => (
                        <Tarea 
                            tarea={tarea}
                        />
                    ))
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