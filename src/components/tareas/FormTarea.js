import React,{useContext,useState,useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
const FormTArea = () => {
    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext;


    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;


    //effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)  
        }else{
            guardarTarea({
                nombre: ''
            })
        }
    },[tareaseleccionada]);

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    //extrare el nombre del proyecto
    const { nombre } = tarea;

    //sino hay proyecto seleccionado
    if(!proyecto) return null;
    
    //array desctructuring para extraer proyecto actual
    const [proyectoActual] = proyecto;


    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }
    
    
    const onSubmit = e => {
        e.preventDefault();


        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //revisa si es edicion o nueva tarea
        if(tareaseleccionada === null){
             // agregar la nueva tarea a state de tareas
            tarea.proyectoID = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            //actualizar tarea existente
            actualizarTarea(tarea);

            //elimina  atareaselecionad del state
            limpiarTarea();
        }


       

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);


        //reinciar el form
        guardarTarea({
            nombre: ''
        })
    }


    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value = {nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value= {tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
     );
}
 
export default FormTArea;