import Card from '../../../../common/Card';
import EditorTitle from '../EditorTitle/EditorTitle';

const JobsEditor = () => {
  return (
    <section>
      <EditorTitle title='Editor de empleos' btnText='Crear nuevo empleo' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <Card isAdmin />
        <Card isAdmin />
        <Card isAdmin />
        <Card isAdmin />
      </div>
    </section>
  );
};

export default JobsEditor;
