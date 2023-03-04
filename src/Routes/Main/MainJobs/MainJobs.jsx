import SectionNav from '../../../common/SectionNav';
import Card from '../../../common/Card';

const MainJobs = () => {
  return (
    <section>
      <SectionNav jobsSection />
      <div className='container mx-auto'>
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
          <Card cardBtnText='Ver oferta...' />
          <Card cardBtnText='Ver oferta...' />
          <Card cardBtnText='Ver oferta...' />
          <Card cardBtnText='Ver oferta...' />
        </div>
      </div>
    </section>
  );
};

export default MainJobs;
