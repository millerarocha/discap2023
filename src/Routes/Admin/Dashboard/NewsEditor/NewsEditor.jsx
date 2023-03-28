import { useState } from "react";
import Card from "../../../../common/Card";
import EditorTitle from "../EditorTitle/EditorTitle";
import EditorForm from "../EditorForm";

const NewsEditor = () => {
  const [isCreateNew, setIsCreateNew] = useState(false);
  const btnTextInfo = ()=>{
    return isCreateNew ? 'Regresar' : 'Crear Noticia'
  }
  return (
    <section>
      <EditorTitle title="Editor de Noticias" btnText={btnTextInfo()} onClick={()=>setIsCreateNew(!isCreateNew)}/>
      {!isCreateNew && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card isAdmin />
          <Card isAdmin />
          <Card isAdmin />
          <Card isAdmin />
        </div>
      )}
      {isCreateNew && <EditorForm />}
    </section>
  );
};

export default NewsEditor;
