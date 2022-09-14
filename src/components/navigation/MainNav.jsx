import { Link } from "react-router-dom";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function MainNav() {
  const [navbar, setNavbar] = useState(false);
  const { width } = useWindowDimensions();
  if (width <= 820) {
    return (
      <div>
        <div>
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`absolute z-10 bg-biloba-flower bg-opacity-70 w-1/2 h-1/3 transition-all ${
            navbar ? "right-0" : "right-full"
          }`}
        >
          <ul className="flex flex-col text-black items-center justify-evenly h-full w-full">
            <li>
              <Link
                to="/"
                className="hover:text-white hover:bg-biloba-flower-600 rounded-md py-1.5 px-2"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white hover:bg-biloba-flower-600 rounded-md py-1.5 px-2"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white hover:bg-biloba-flower-600 rounded-md py-1.5 px-2"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-white hover:bg-biloba-flower-600 rounded-md py-1.5 px-2"
              >
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <nav className="w-1/3">
        <ul className="flex text-white justify-evenly">
          <li>
            <Link to="/" className="hover:bg-light-wisteria-300 p-2 rounded-full">Inicio</Link>
          </li>
          <li>
            <Link to="/products" className="hover:bg-light-wisteria-300 p-2 rounded-full">Productos</Link>
          </li>
          <li>
            <Link to="/about" className="hover:bg-light-wisteria-300 p-2 rounded-full">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/login" className="hover:bg-light-wisteria-300 p-2 rounded-full">Log in</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;