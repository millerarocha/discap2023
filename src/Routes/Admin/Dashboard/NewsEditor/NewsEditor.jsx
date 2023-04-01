import { useState, useEffect } from "react";
import Card from "../../../../common/Card";
import EditorTitle from "../EditorTitle/EditorTitle";
import EditorForm from "../EditorForm";
import { validateText } from "../../../../utils/validator";
import Swal from "sweetalert2";
import { db } from "../../../../services/firebase.config";
import {
  addDoc,
  serverTimestamp,
  collection,
  getDocs,
} from "firebase/firestore";

const collectionRef = collection(db, "news");

const NewsEditor = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({});
  const [news, setNews] = useState([]);  

  useEffect(() => {
    const getData = async () => {
      await getDocs(collectionRef)
        .then((data) => {
          let newsData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setNews(newsData)
        })
        .catch((err) => Swal.fire("Error", err, "error"));
    };
    getData();
  }, [isFormOpen]);

  const btnTextInfo = () => {
    return isFormOpen ? "Regresar" : "Crear Noticia";
  };

  const createNew = () => {
    setIsFormOpen(!isFormOpen);
    setNewInfo({});
  };

  const editNew = (data) => {
    setIsFormOpen(!isFormOpen);
    setNewInfo({
      title: data.title,
      description: data.description
    });
  };

  const handleChange = (e) => {
    const newState = { ...newInfo };
    newState[e.target.name] = e.target.value;
    setNewInfo(newState);
  };

  const handleChangeEditor = (e, editor) => {
    const data = editor.getData();
    const newState = { ...newInfo };
    newState["description"] = data;
    setNewInfo(newState);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    const isTitleValid = validateText(newInfo.title, 2, 10);
    const isDescriptionValid = validateText(newInfo.description, 0, 2000);

    if (!isTitleValid && !isDescriptionValid) {
      Swal.fire("Error", "Falta completar campos", "error");

      return;
    }

    try {
      Swal.fire({
        title: "Subiendo Información",
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
      await addDoc(collectionRef, { ...newInfo, timestamp: serverTimestamp() });
      Swal.fire(
        "Muy bien",
        "La noticia ha sido creada correctamente!",
        "success"
      ).then(() => {
        setIsFormOpen(false);
      });
    } catch (err) {
      Swal.fire("Error", err, "error");
    }
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
          {news.map((data)=>(
            <Card cardTitle={data.title} cardText={data.description} isAdmin onEditClick={()=> editNew(data)} />  
          ))}
        </div>
      )}
      {isFormOpen && (
        <EditorForm
          title="Crear Noticia Nueva"
          data={newInfo}
          onInputChange={handleChange}
          onEditorChange={handleChangeEditor}
          onSave={onSubmitData}
        />
      )}
    </section>
  );
};

export default NewsEditor;
