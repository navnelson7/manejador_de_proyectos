import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyecto from '../proyectos/ListadoProyectos';
const Sidebar = () => {
    return ( 
        <aside>
            <h1>ADMIN<span>Proyectos</span></h1>
            <NuevoProyecto />
            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyecto />
            </div>
        </aside>
     );
}
 
export default Sidebar;
