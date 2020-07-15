import React,{Fragment} from 'react';
import Proyecto from './Proyecto';
const ListadoProyectos = () => {
    const proyectos = [
        {nombre:'Tienda Virtual'},
        {nombre:'Intranet'},
        {nombre:'Diseno Web'}
    ]
    return ( 
        <Fragment>
            <ul className="listado-proyectos">
                {proyectos.map(proyecto =>(
                    <Proyecto 
                        proyecto={proyecto}
                    />
                ))}
            </ul>
        </Fragment>
     );
}
 
export default ListadoProyectos;