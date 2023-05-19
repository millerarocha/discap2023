import { useState, useEffect } from 'react';
import Card from '../../../../common/Card';
import EditorTitle from '../EditorTitle/EditorTitle';
import EditorForm from '../EditorForm';
import { validateText } from '../../../../utils/validator';
import Swal from 'sweetalert2';
import { db } from '../../../../services/firebase.config';
import {
  addDoc,
  serverTimestamp,
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
  orderBy,
  updateDoc,
} from 'firebase/firestore';
import { countWordsAndTruncate, formatDate } from '../../../../utils/validator';

const collectionRef = collection(db, 'news');

const NewsEditor = () => {
  const [isGettingData, setIsGettingData] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [newInfo, setNewInfo] = useState({});
  const [news, setNews] = useState([]);
  const [newToEdit, setNewToEdit] = useState('');

  const btnTextInfo = () => {
    return isFormOpen ? 'Regresar' : 'Crear Noticia';
  };

  const createNew = () => {
    setIsFormOpen(!isFormOpen);
    setIsEditorMode(false);
    setNewInfo({});
  };

  const editNew = (data) => {
    setIsEditorMode(true);
    setNewToEdit(data.id);
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
    newState['description'] = data;
    setNewInfo(newState);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    const isTitleValid = validateText(newInfo.title, 2, 10);
    const isResumeValid = validateText(newInfo.resume, 2, 200);
    const isDescriptionValid = validateText(newInfo.description, 0, 2000);

    if (!isTitleValid || !isResumeValid || !isDescriptionValid) {
      Swal.fire('Error', 'Existen campos vacíos o incompletos', 'error');
      return;
    }

    try {
      Swal.fire({
        title: 'Subiendo Información',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
      await addDoc(collectionRef, { ...newInfo, timestamp: serverTimestamp() });
      Swal.fire(
        'Muy bien',
        'La noticia ha sido creada correctamente!',
        'success'
      ).then(() => {
        setIsGettingData(true);
        setIsFormOpen(false);
      });
    } catch (err) {
      Swal.fire('Error', err, 'error');
    }
  };

  const onEditData = async (e) => {
    e.preventDefault();

    const isTitleValid = validateText(newInfo.title, 2, 10);
    const isResumeValid = validateText(newInfo.resume, 2, 200);
    const isDescriptionValid = validateText(newInfo.description, 0, 2000);

    if (!isTitleValid || !isResumeValid || !isDescriptionValid) {
      Swal.fire('Error', 'Existen campos vacíos o incompletos', 'error');

      return;
    }

    try {
      Swal.fire({
        title: 'Subiendo Información',
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
      try {
        await updateDoc(doc(db, 'news', newToEdit), {
          ...newInfo,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
      Swal.fire(
        'Muy bien',
        'La noticia ha sido editada correctamente!',
        'success'
      ).then(() => {
        setIsGettingData(true);
        setIsFormOpen(false);
        setNewToEdit('');
      });
    } catch (err) {
      Swal.fire('Error', err, 'error');
    }
  };

  const deleteDocById = async (id) => {
    try {
      await deleteDoc(doc(db, 'news', id));
      Swal.fire('Eliminado!', 'La noticia ha sido eliminada.', 'success');
      setIsGettingData(true);
    } catch (error) {
      console.error(`Error deleting document with ID ${id}: `, error);
    }
  };

  const deleteData = (id) => {
    Swal.fire({
      title: 'Seguro de eliminar la noticia?',
      text: 'Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDocById(id);
      }
    });
  };

  useEffect(() => {
    const getData = async () => {
      await getDocs(query(collectionRef, orderBy('timestamp', 'desc')))
        .then((data) => {
          let newsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setNews(newsData);
        })
        .catch((err) => Swal.fire('Error', err, 'error'));
      setIsGettingData(false);
    };
    if (isGettingData) {
      getData();
    }
  }, [isGettingData]);

  return (
    <section>
      <EditorTitle
        title='Editor de Noticias'
        btnText={btnTextInfo()}
        onClick={createNew}
      />
      {!isFormOpen && (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
          {!news.length ? (
            <p>No hay informacion para mostrar...</p>
          ) : (
            news?.map((data) => (
              <Card
                key={data.id}
                cardTitle={data.title}
                cardText={countWordsAndTruncate(data.resume, 10)}
                isAdmin
                onEditClick={() => editNew(data)}
                cardDate={formatDate(data.timestamp)}
                onDeleteClick={() => deleteData(data.id)}
              />
            ))
          )}
        </div>
      )}
      {isFormOpen && (
        <EditorForm
          title='Crear Noticia Nueva'
          data={newInfo}
          onInputChange={handleChange}
          onEditorChange={handleChangeEditor}
          isEditorMode={isEditorMode}
          onSave={onSubmitData}
          onEdit={onEditData}
        />
      )}
    </section>
  );
};

export default NewsEditor;
