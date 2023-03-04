const Navbar = () => {
  return (
    <div className='navbar bg-base-100 flex flex-col lg:flex-row justify-between'>
      <div className='flex flex-col my-5 lg:mb-0'>
        <h1 className='text-5xl font-extrabold'>DISCAP</h1>
        <span className='text-sm text-slate-600 '>
          Web con información para personas con discapacidad
        </span>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 gap-1 lg:gap-3'>
          <li>
            <a className='btn btn-outline' href='#about'>
              Nosotros
            </a>
          </li>
          <li>
            <a className='btn btn-outline' href='#news'>
              Noticias
            </a>
          </li>
          <li>
            <a className='btn btn-outline' href='#jobs'>
              Ofertas Empleo
            </a>
          </li>
          <li>
            <a className='btn btn-outline' href='#donations'>
              Donaciones
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
