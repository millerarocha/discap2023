import { Link } from "react-router-dom";

const Navbar = ({ isLanding }) => {
  return (
    <div className="navbar bg-base-100 flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col my-5 lg:mb-0">
        <h1 className="text-5xl font-extrabold">DISCAP</h1>
        <span className="text-sm text-slate-600 ">
          Web con información para personas con discapacidad
        </span>
      </div>
      <div className="flex-none">
        {isLanding ? (
          <ul className="menu menu-horizontal px-1 gap-1 lg:gap-3 grid grid-cols-2 lg:grid-cols-4">
            <li>
              <a className="btn btn-outline w-full" href="#about">
                Nosotros
              </a>
            </li>
            <li>
              <a className="btn btn-outline  w-full" href="#news">
                Noticias
              </a>
            </li>
            <li>
              <a className="btn btn-outline  w-full" href="#jobs">
                Ofertas Empleo
              </a>
            </li>
            <li>
              <a className="btn btn-outline  w-full" href="#donations">
                Donaciones
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link className="btn btn-outline w-full self-end" to="/">
                Página principal
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
