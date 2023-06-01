import { useState, useEffect } from "react";
import SectionNav from "../../../common/SectionNav";
import Card from "../../../common/Card";
import { countWordsAndTruncate, formatDate } from "../../../utils/validator";
import { db } from "../../../services/firebase.config";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const jobsCollectionRef = collection(db, "jobs");

const MainJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await getDocs(
        query(jobsCollectionRef, orderBy("timestamp", "desc"))
      )
        .then((data) => {
          let jobsData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setJobs(jobsData);
        })
        .catch((err) => Swal.fire("Error", err, "error"));
    };
    getData();
  }, []);

  return (
    <section>
      <SectionNav jobsSection />
      <div className='container mx-auto  md:px-5'>
        <h2 className='text-center text-5xl my-12 underline'>
          Ofertas de empleo
        </h2>
        <p className='text-center text-xl w-2/3 mx-auto'>
          Bienvenidos a la sección de ofertas de empleos, en esta sección
          encontrarás empleos ofertados por diferentes empresas para personas en
          condición de discapacidad, puedes buscar según el tipo de
          discapacidad.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-12'>
          {!jobs.length ? (
            <p>No hay informacion para mostrar...</p>
          ) : (
            jobs?.map((data) => (
              <Card
                key={data.id}
                cardTitle={data.title}
                cardText={countWordsAndTruncate(data.resume, 10)}
                cardDate={formatDate(data.timestamp)}
                cardBtnText="Ver oferta"
                btnLink={`/empleo/${data.id}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MainJobs;
