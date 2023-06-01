import Card from "../../../../common/Card";
import { Link } from "react-router-dom";
import { countWordsAndTruncate, formatDate } from "../../../../utils/validator";

const News = ({ news }) => {
  return (
    <section id="news" className="flex flex-col px-5 my-12">
      <h2 className="text-center text-5xl my-12 underline">
        Noticias de interés
      </h2>
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4">
        {!news.length ? (
          <p>No hay informacion para mostrar...</p>
        ) : (
          news?.map((data) => (
            <Card
              key={data.id}
              cardTitle={data.title}
              cardText={countWordsAndTruncate(data.resume, 10)}
              cardDate={formatDate(data.timestamp)}
              cardBtnText='Leer más...'
              btnLink={`/noticia/${data.id}`}
            />
          ))
        )}
      </div>
      <div className="flex w-full mt-12 justify-center">
        <Link className="btn btn-outline self-center" to="/noticias">
          Ir a sección Noticias
        </Link>
      </div>
    </section>
  );
};

export default News;
