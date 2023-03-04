const Donations = () => {
  return (
    <section id='donations' className='flex flex-col px-5 my-12'>
      <h2 className='text-center text-5xl my-12 underline'>Donaciones</h2>
      <div className='flex flex-col gap-4'>
        <p className='text-center text-xl w-2/3 mx-auto'>
          Agradecemos tu interés en donar a nuestra organización, con su apoyo
          lograremos extender el servicio para mantenerlos informados sobre
          temas y ofertas laborales para personas en condición de discapacidad.
        </p>
        <p className='text-center text-xl w-2/3 mx-auto'>
          Contactános para conocer tu opinión y agradecer tu donación.
        </p>
        <div className='flex justify-center gap-10'>
          <a
            href='https://wa.me/573115714549'
            target='blank'
            className='mt-5 btn btn-primary'
          >
            Escribir a Whatsapp
          </a>
          <a
            href='mailto:corporacionparaladiscapacidad@gmail.com'
            target='blank'
            className='mt-5 btn btn-primary'
          >
            Escribir Correo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donations;
