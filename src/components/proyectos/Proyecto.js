import React,{Fragment, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
const Proyecto = ({proyecto}) => {
    //obtener el state del formualrio
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {obtenerTareas} = tareasContext;
    
    //funcion para agregar proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); //fijar proyecto actual
        obtenerTareas(id);

    }
    return ( 
        <Fragment>
            <li>
                <button
                    type="button"
                    className="btn btn-black"
                    onClick = {() => seleccionarProyecto(proyecto.id)}
                >{proyecto.nombre}</button>
            </li>
        </Fragment>
     );
}
 
export default Proyecto