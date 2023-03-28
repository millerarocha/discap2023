import Input from "../../../../common/Input";



const EditorForm = ({ title = "Diligencie los campos" }) => {
  return (
    <div className="w-2/3 mx-auto flex flex-col bg-slate-300 p-6 rounded-lg">
      <h2 className="font-bold text-lg uppercase text-center mb-5">{title}</h2>
      <form className="flex flex-col gap-4">
        <Input label="Titulo de la noticia"/>
        <Input label="Descripción de la noticia" isEditor/>
        
      </form>
    </div>
  );
};

export default EditorForm;
