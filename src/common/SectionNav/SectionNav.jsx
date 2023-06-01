import { Link, useNavigate } from "react-router-dom";

const SectionNav = ({ jobsSection }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-primary pb-5">
      <div className="container mx-auto  flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col my-5 lg:mb-0">
          <h1 className="text-5xl font-extrabold text-white text-center">
            DISCAP
          </h1>
          <span className="text-sm text-slate-200 ">
            Web con información para personas con discapacidad
          </span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1 lg:gap-3">
            <li>
              <Link
                className="btn border border-white text-white hover:bg-white hover:text-black"
                to="/"
              >
                Página Principal
              </Link>
            </li>
            {jobsSection && (
              <li>
                <Link
                  className="btn border border-white text-white hover:bg-white hover:text-black"
                  to="/noticias"
                >
                  Noticias
                </Link>
              </li>
            )}
            {!jobsSection && (
              <li>
                <Link
                  className="btn border border-white text-white hover:bg-white hover:text-black"
                  to="/empleos"
                >
                  Ofertas Empleo
                </Link>
              </li>
            )}
            <li>
              <button
                className="btn border border-white text-white hover:bg-white hover:text-black"
                onClick={() => navigate(-1)}
              >
                Regresar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionNav;
