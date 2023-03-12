import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditorTitle = ({ title = "titulo", btnText = "Boton", onClick }) => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const message = () => {
    Swal.fire("Good job!", "You clicked the button!", "success");
  };

  return (
    <div className="flex justify-between py-12">
      <h3 className="text-2xl uppercase">{title}</h3>
      <button className="btn btn-outline" onClick={message}>
        {btnText}
      </button>
    </div>
  );
};

export default EditorTitle;
