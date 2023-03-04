import SectionNav from '../../../common/SectionNav';
import Card from '../../../common/Card';

const MainNews = () => {
  return (
    <section>
      <SectionNav />
      <div className='container mx-auto md:px-5'>
        <h2 className='text-center text-5xl my-12 underline'>Noticias</h2>
        <p className='text-center text-xl w-2/3 mx-auto'>
          Bienvenidos a la sección de noticias, en esta sección encontrarás
          información de interés respecto a la Discapacidad, puedes buscar según
          la categoría.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-12'>
          <Card cardBtnText='Leer más...' />
          <Card cardBtnText='Leer más...' />
          <Card cardBtnText='Leer más...' />
          <Card cardBtnText='Leer más...' />
        </div>
      </div>
    </section>
  );
};

export default MainNews;
