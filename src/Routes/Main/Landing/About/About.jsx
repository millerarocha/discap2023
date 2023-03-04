const About = () => {
  return (
    <section id='about' className='flex flex-col px-5'>
      <h2 className='text-center text-5xl my-12 underline'>Nosotros</h2>

      <figure class='max-w-screen-md mx-auto text-center flex flex-col gap-3'>
        <p class='text-xl italic font-medium text-gray-700'>
          De la misma forma que un diario, abordaremos la temática de la
          discapacidad desde lo lejano y distante hasta lo próximo y cercano en
          categorías. Por tanto, estaremos en busca de la información; para
          evitar creernos saberlo todo.
        </p>
        <p class='text-xl italic font-medium text-gray-700'>
          Somos un grupo de personas que trabajamos por informar adecuadamente
          sobre una temática que desde el principio del tiempo ha sido abordada
          de manera poco adecuada, generando así mitos que segregan a los
          ciudadanos.
        </p>
        <p class='text-xl italic font-medium text-gray-700'>
          Al igual en nuestra sección de ofertas laborales, encontrarás
          solicitudes de empleo de empresas que requieren contratar personal con
          discapacidad.
        </p>
        <figcaption class='flex items-center justify-center mt-6 space-x-3'>
          <div class='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
            <cite class='pr-3 font-medium text-gray-900'>
              Wilmer Torres Beltran
            </cite>
            <cite class='pl-3 text-sm font-light text-gray-500 '>
              Director Discap.co
            </cite>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default About;
