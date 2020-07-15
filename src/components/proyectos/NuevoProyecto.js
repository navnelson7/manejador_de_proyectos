import React, {Fragment, useState} from 'react';
const NuevoProyecto = () => {
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
        </Fragment>
     );
}
 
export default NuevoProyecto;