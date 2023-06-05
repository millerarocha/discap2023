import { formatDate } from "../../utils/validator";

const Details = ({data}) => {
  return (
    <>
      {data ? (
        <section className="w-full p-5 md:w-3/4 md:mx-auto md:pt-8">
          <h2 className="text-center mb-2 font-bold text-2xl uppercase">
            {data?.title}
          </h2>
          <p className="text-center text-l font-semibold mb-10">
            Fecha de actualización:{" "}
            <span className="text-slate-600 c">
              {formatDate(data?.timestamp)}
            </span>
          </p>
          <div dangerouslySetInnerHTML={{ __html: data?.description }} />
        </section>
      ) : (
        <p>Cargando información de la noticia...</p>
      )}
    </>
  );
};

export default Details;
