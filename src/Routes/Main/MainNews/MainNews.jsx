import { useState, useEffect } from "react";
import SectionNav from "../../../common/SectionNav";
import Card from "../../../common/Card";
import { countWordsAndTruncate, formatDate } from "../../../utils/validator";
import { db } from "../../../services/firebase.config";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const newsCollectionRef = collection(db, "news");

const MainNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await getDocs(
        query(newsCollectionRef, orderBy("timestamp", "desc"))
      )
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
  }, []);

  return (
    <section>
      <SectionNav />
      <div className="container mx-auto md:px-5">
        <h2 className="text-center text-5xl my-12 underline">Noticias</h2>
        <p className="text-center text-xl w-2/3 mx-auto">
          Bienvenidos a la sección de noticias, en esta sección encontrarás
          información de interés respecto a la Discapacidad, puedes buscar según
          la categoría.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-12">
          {!news.length ? (
            <p>No hay informacion para mostrar...</p>
          ) : (
            news?.map((data) => (
              <Card
                key={data.id}
                cardTitle={data.title}
                cardText={countWordsAndTruncate(data.resume, 10)}
                cardDate={formatDate(data.timestamp)}
                cardBtnText="Leer más..."
                btnLink={`/noticia/${data.id}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MainNews;
