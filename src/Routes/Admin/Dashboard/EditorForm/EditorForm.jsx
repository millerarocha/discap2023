import Input from "../../../../common/Input";

const EditorForm = ({ title = "Diligencie los campos" }) => {
  return (
    <div className="w-2/3 mx-auto flex flex-col bg-slate-300 p-6 rounded-lg gap-5">
      <h2 className="font-bold text-lg uppercase text-center mb-5">{title}</h2>
      <form>
        <Input label="Titulo de la noticia"/>
      </form>
    </div>
  );
};

export default EditorForm;
