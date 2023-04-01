import { useState } from "react";
import Card from "../../../../common/Card";
import EditorTitle from "../EditorTitle/EditorTitle";
import EditorForm from "../EditorForm";
import { validateText } from "../../../../utils/validator";

const NewsEditor = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({});

  const btnTextInfo = () => {
    return isFormOpen ? "Regresar" : "Crear Noticia";
  };

  const createNew = () => {
    setIsFormOpen(!isFormOpen);
    setNewInfo({});
  };

  const editNew = () => {
    setIsFormOpen(!isFormOpen);
    setNewInfo({
      title: "Que gran proyecto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente eaque sint libero debitis minus nihil omnis praesentium ducimus expedita optio, modi velit harum blanditiis aliquam unde saepe iusto beatae.",
    });
  };

  const handleChange = (e)=>{
    const newState = {...newInfo}
    newState[e.target.name] = e.target.value;
    setNewInfo(newState)
  }

  const handleChangeEditor = (e, editor) => {
    const data = editor.getData();
    const newState = {...newInfo}
    newState['description'] = data;
    setNewInfo(newState)
  }

  const handleSaveData = (e)=>{
    e.preventDefault();
    console.log(validateText(newInfo.title, 2, 5) );
  }

  console.log(newInfo);

  return (
    <section>
      <EditorTitle
        title="Editor de Noticias"
        btnText={btnTextInfo()}
        onClick={createNew}
      />
      {!isFormOpen && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card isAdmin onEditClick={editNew}/>
          <Card isAdmin />
          <Card isAdmin />
          <Card isAdmin />
        </div>
      )}
      {isFormOpen && <EditorForm title="Crear Noticia Nueva" data={newInfo} onInputChange={handleChange} onEditorChange={handleChangeEditor} onSave={handleSaveData}/>}
    </section>
  );
};

export default NewsEditor;
