import {Link} from 'react-router-dom';

function MainNav() {
  return (
    <nav>
      <ul className="flex items-center p-6">
        <li><Link className="px-6 py-1 border-2 border-black bg-gray-300 drop-shadow-md" to="/">Inicio</Link></li>
        <li><Link className="px-6 py-1 border-2 border-black bg-gray-300 drop-shadow-md" to="/Marcas">Marcas</Link></li>
        <li><Link className="px-6 py-1 border-2 border-black bg-gray-300 drop-shadow-md" to="/Edades">Edades</Link></li>
        <li><Link className="px-6 py-1 border-2 border-black bg-gray-300 drop-shadow-md" to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default MainNav