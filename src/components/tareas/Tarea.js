import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
const Tarea = ({tarea}) => {
    //extraer el proyecto activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext

     //obtener la funcion del context de tarea
     const tareasContext = useContext(tareaContext);
     const { eliminarTarea,obtenerTareas } = tareasContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

     //funcion que se ejecuta al presionar eliminar tarea
     const tareaEliminar = id =>{
           eliminarTarea(id);
           obtenerTareas(proyectoActual.id);
     }
    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button 
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                    :
                    (
                        <button 
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )
                }
            </div> 
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={()=> tareaEliminar(tarea.id)}
                >Elininar</button>
            </div>
        </li>
     );
}
 
export default Tarea;