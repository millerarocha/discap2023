import disabilitiesImg from '../../../../assets/disabilities.png';

const Hero = () => {
  return (
    <section id='welcome' className='lg:px-12 my-12 py-8 bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse justify-between mx-auto'>
        <img
          src={disabilitiesImg}
          className='h-96 rounded-lg shadow-2xl mb-8 lg:w-1/2  lg:mb-0 object-cover'
          alt='Descripcion de la imagen de la fecha especial'
        />
        <div className='flex flex-col lg:mr-16 text-center lg:text-left lg:w-1/2'>
          <div>
            <h1 className='text-4xl font-bold'>Titulo Fecha Especial!</h1>
            <p className='py-6'>
              Descripción sobre la fecha especial. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Minima tempore error dicta sint
              similique, ducimus quisquam sequi, earum voluptatem itaque fugiat
              reprehenderit? Blanditiis error modi possimus repudiandae.
              Doloremque, cum impedit.
            </p>
          </div>
          <div>
            <p>
              Gracias por tu visita, nos agrada tenerte con nosotros, si deseas
              puedes escribirme un mensaje, gustosamente son aceptados.
            </p>
            <a
              href='https://wa.me/573115714549'
              target='blank'
              className='mt-5 btn btn-primary'
            >
              Escribenos a Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
