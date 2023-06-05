import Card from "../../../../common/Card";
import { Link } from "react-router-dom";
import { countWordsAndTruncate, formatDate } from "../../../../utils/validator";

const Jobs = ({ jobs }) => {
  return (
    <section id="jobs" className="flex flex-col px-5 my-12">
      <h2 className="text-center text-5xl my-12 underline">
        Ofertas de Empleo
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {!jobs.length ? (
          <p>No hay informacion para mostrar...</p>
        ) : (
          jobs?.map((data) => (
            <Card
              key={data.id}
              cardTitle={data.title}
              cardText={countWordsAndTruncate(data.resume, 10)}
              cardDate={formatDate(data.timestamp)}
              cardBtnText='Ver oferta'              
              btnLink={`/empleo/${data.id}`}
            />
          ))
        )}
      </div>
      <div className="flex w-full mt-12 justify-center">
        <Link className="btn btn-outline self-center" to="/empleos">
          Ir a sección Empleos
        </Link>
      </div>
    </section>
  );
};

export default Jobs;
