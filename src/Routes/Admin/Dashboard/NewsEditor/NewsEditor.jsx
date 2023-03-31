import { useState } from "react";
import Card from "../../../../common/Card";
import EditorTitle from "../EditorTitle/EditorTitle";
import EditorForm from "../EditorForm";

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
      newTitle: "Que gran proyecto",
      newDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente eaque sint libero debitis minus nihil omnis praesentium ducimus expedita optio, modi velit harum blanditiis aliquam unde saepe iusto beatae.",
    });
  };

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
      {isFormOpen && <EditorForm title="Crear Noticia Nueva" />}
    </section>
  );
};

export default NewsEditor;
