import React,{Fragment, useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
const Proyecto = ({proyecto}) => {
    //obtener el state del formualrio
    const proyectosContext = useContext(proyectoContext);
    const {proyectoActual} = proyectosContext;
    return ( 
        <Fragment>
            <li>
                <button
                    type="button"
                    className="btn btn-black"
                    onClick = {() => proyectoActual(proyecto.id)}
                >{proyecto.nombre}</button>
            </li>
        </Fragment>
     );
}
 
export default Proyecto