import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../services/firebase.config";
import Swal from "sweetalert2";

const Menu = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });
      }
    });
  };

  return (
    <>
      <div className="flex flex-col mb-12">
        <h1 className="text-5xl font-extrabold">DISCAP</h1>
        <span className="text-sm text-slate-600 ">
          Sistema administrador web
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <Link className="btn btn-primary" to="/admin/news">
          Editor de Noticias
        </Link>
        <Link className="btn btn-primary" to="/admin/jobs">
          Editor de Empleos
        </Link>
        {false ?? (
          <Link className="btn btn-primary" to="/admin/special-date">
            Editor Fecha Especial
          </Link>
        )}
        <button className="btn btn-primary" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </>
  );
};

export default Menu;
