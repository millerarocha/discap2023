import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <div className='flex flex-col mb-12'>
        <h1 className='text-5xl font-extrabold'>DISCAP</h1>
        <span className='text-sm text-slate-600 '>
          Sistema administrador web
        </span>
      </div>
      <div className='flex flex-col gap-4'>
        <Link className='btn btn-primary' to='/admin/news'>
          Editor de Noticias
        </Link>
        <Link className='btn btn-primary' to='/admin/jobs'>
          Editor de Empleos
        </Link>
        <Link className='btn btn-primary' to='/admin/special-date'>
          Editor Fecha Especial
        </Link>
      </div>
    </>
  );
};

export default Menu;
