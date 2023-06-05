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

const collectionRef = collection(db, 'jobs');

const JobsEditor = () => {
  const [isGettingData, setIsGettingData] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [jobInfo, setJobInfo] = useState({});
  const [jobs, setJobs] = useState([]);
  const [jobToEdit, setJobToEdit] = useState('');

  const btnTextInfo = () => {
    return isFormOpen ? 'Regresar' : 'Crear Oferta Laboral';
  };

  const createJob = () => {
    setIsFormOpen(!isFormOpen);
    setIsEditorMode(false);
    setJobInfo({});
  };

  const editJob = (data) => {
    setIsEditorMode(true);
    setJobToEdit(data.id);
    setIsFormOpen(!isFormOpen);
    setJobInfo({
      title: data.title,
      resume: data.resume,
      description: data.description,
    });
  };

  const handleChange = (e) => {
    const newState = { ...jobInfo };
    newState[e.target.name] = e.target.value;
    setJobInfo(newState);
  };

  const handleChangeEditor = (e, editor) => {
    const data = editor.getData();
    const newState = { ...jobInfo };
    newState['description'] = data;
    setJobInfo(newState);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    const isTitleValid = validateText(jobInfo.title, 2, 10);
    const isResumeValid = validateText(jobInfo.resume, 2, 200);
    const isDescriptionValid = validateText(jobInfo.description, 0, 2000);

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
      await addDoc(collectionRef, { ...jobInfo, timestamp: serverTimestamp() });
      Swal.fire(
        'Muy bien',
        'La oferta de empleo ha sido creada correctamente!',
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

    const isTitleValid = validateText(jobInfo.title, 2, 10);
    const isResumeValid = validateText(jobInfo.resume, 2, 200);
    const isDescriptionValid = validateText(jobInfo.description, 0, 2000);

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
        await updateDoc(doc(db, 'jobs', jobToEdit), {
          ...jobInfo,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
      }
      Swal.fire(
        'Muy bien',
        'La noticia ha sido editada correctamente!',
        'success'
      ).then(() => {
        setIsGettingData(true);
        setIsFormOpen(false);
        setJobToEdit('');
      });
    } catch (err) {
      Swal.fire('Error', err, 'error');
    }
  };

  const deleteDocById = async (id) => {
    try {
      await deleteDoc(doc(db, 'jobs', id));
      Swal.fire(
        'Eliminado!',
        'La oferta laboral ha sido eliminada.',
        'success'
      );
      setIsGettingData(true);
    } catch (error) {
      console.error(`Error deleting document with ID ${id}: `, error);
    }
  };

  const deleteData = (id) => {
    Swal.fire({
      title: 'Seguro de eliminar la oferta laboral?',
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
          let jobsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setJobs(jobsData);
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
        title='Editor de Ofertas Laborales'
        btnText={btnTextInfo()}
        onClick={createJob}
      />
      {!isFormOpen && (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
          {!jobs.length ? (
            <p>No hay informacion para mostrar...</p>
          ) : (
            jobs?.map((data) => (
              <Card
                key={data.id}
                cardTitle={data.title}
                cardText={countWordsAndTruncate(data.resume, 10)}
                isAdmin
                onEditClick={() => editJob(data)}
                cardDate={formatDate(data.timestamp)}
                onDeleteClick={() => deleteData(data.id)}
              />
            ))
          )}
        </div>
      )}
      {isFormOpen && (
        <EditorForm
          title='Crear Oferta Laboral Nueva'
          data={jobInfo}
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

export default JobsEditor;
