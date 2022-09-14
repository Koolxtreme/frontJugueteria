import { Link } from 'react-router-dom';

function FormLink({donde, texto}) {
  return (
    <Link to={donde} className="text-biloba-flower-500 text-sm visited:text-light-wisteria-700 hover:text-biloba-flower-200">{texto}</Link>
  )
}

export default FormLink