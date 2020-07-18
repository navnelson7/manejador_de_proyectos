import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
const NuevoProyecto = () => {
    //obtener el state del context
    const proyectosContext = useContext(proyectoContext);

    const { formulario } =  proyectosContext;
    //state proyecto 
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    })

    //extraer nombre del proyecto
    const {nombre} = proyecto;
    ///lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    //cunado el usuario envia el fomario
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar el proyecto


        //agregarlo al state



        //reiniciar el form 
    }
    return ( 
        <Fragment>
            <button 
            type="button"
            className="btn btn-block btn-primario"
        > Nuevo Proyecto</button>
        {
            formulario
            ?
            (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar"
                    />
                </form>
            ): null 
        }
        </Fragment>
     );
}
 
export default NuevoProyecto;