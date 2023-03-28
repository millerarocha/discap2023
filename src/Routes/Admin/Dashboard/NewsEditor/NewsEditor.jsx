import { useState } from "react";
import Card from "../../../../common/Card";
import EditorTitle from "../EditorTitle/EditorTitle";
import EditorForm from "../EditorForm";

const NewsEditor = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({})
  
  const btnTextInfo = ()=>{
    return isFormOpen ? 'Regresar' : 'Crear Noticia'
  }

  const createNew = ()=>{
    setIsFormOpen(!isFormOpen);
    setNewInfo({})
  }
  const editNew = ()=>{
    setIsFormOpen(!isFormOpen);
    setNewInfo({})
  }

  return (
    <section>
      <EditorTitle title="Editor de Noticias" btnText={btnTextInfo()} onClick={createNew}/>
      {!isFormOpen && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card isAdmin />
          <Card isAdmin />
          <Card isAdmin />
          <Card isAdmin />
        </div>
      )}
      {isFormOpen && <EditorForm />}
    </section>
  );
};

export default NewsEditor;
