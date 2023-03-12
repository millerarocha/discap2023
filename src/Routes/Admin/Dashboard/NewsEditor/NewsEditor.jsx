import Card from '../../../../common/Card';
import EditorTitle from '../EditorTitle/EditorTitle';

const NewsEditor = () => {
  return (
    <section>
      <EditorTitle title='Editor de Noticias' btnText='Crear nueva noticia' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <Card isAdmin />
        <Card isAdmin />
        <Card isAdmin />
        <Card isAdmin />
      </div>
    </section>
  );
};

export default NewsEditor;
