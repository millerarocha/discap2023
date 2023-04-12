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
  doc,
  deleteDoc
} from "firebase/firestore";
import { countWordsAndTruncate, formatDate } from "../../../../utils/validator";

const collectionRef = collection(db, "news");

const NewsEditor = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newInfo, setNewInfo] = useState({});
  const [news, setNews] = useState([]);

  
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
      resume: data.resume,
      description: data.description,
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
  
  const deleteDocById = async (id) => {
    try {
      await deleteDoc(doc(db, "news", id));
      Swal.fire("Eliminado!", "La noticia ha sido eliminada.", "success");
    } catch (error) {
      console.error(`Error deleting document with ID ${id}: `, error);
    }
  };

  const deleteData = (id) => {
    Swal.fire({
      title: "Seguro de eliminar la noticia?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDocById(id);
      }
    });
  };
  
  useEffect(() => {
    const getData = async () => {
      await getDocs(collectionRef)
        .then((data) => {
          let newsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setNews(newsData);
        })
        .catch((err) => Swal.fire("Error", err, "error"));
    };
    getData();
  }, [isFormOpen, deleteDocById]);
  
  return (
    <section>
      <EditorTitle
        title="Editor de Noticias"
        btnText={btnTextInfo()}
        onClick={createNew}
      />
      {!isFormOpen && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {news.map((data) => (
            <Card
              key={data.id}
              cardTitle={data.title}
              cardText={countWordsAndTruncate(data.resume, 10)}
              isAdmin
              onEditClick={() => editNew(data)}
              cardDate={formatDate(data.timestamp)}
              onDeleteClick={() => deleteData(data.id)}
            />
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
