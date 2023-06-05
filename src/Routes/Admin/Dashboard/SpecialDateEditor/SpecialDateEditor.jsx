import EditorTitle from "../EditorTitle/EditorTitle";
import Input from "../../../../common/Input";


const SpecialDateEditor = () => {
  return (
    <section>
      <EditorTitle title="Editor de fechas especiales" />
      <form className="flex flex-col gap-4">
        <Input label="Titulo de la fecha especial" />
        <Input label="URL imagen de la fecha especial" />
        <Input label="Descripción de la fecha especial"/>
        <div className="flex">
          <button className="btn btn-primary">
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};

export default SpecialDateEditor;
