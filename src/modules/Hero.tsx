const Hero = () => {
  return (
    <section className="relative bg-neutral-200 text-neutral-800">
      <div className="bg-neutral-200 text-neutral-800 px-5  py-20 md:py-[9rem] lg:max-w-[70%] xl:max-w-[50%] mx-auto flex flex-col items-center gap-5 text-center">
        <h1 className="text-3xl font-bold">¿Qué es Partners?</h1>
        <p>
          Partners es una app que conecta emprendedores en etapas tempranas con
          socios estratégicos que complementen sus habilidades. Creamos el match
          perfecto para que encuentres a esa persona que te ayudará a llevar tu
          proyecto al éxito.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <div className="relative">
            <img
              src="person2.webp"
              alt="Persona 1"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <p className="text-lg text-white">
                <strong>Juan</strong> es un desarrollador apasionado por la
                tecnología. Busca un socio con habilidades en marketing para
                lanzar su próximo proyecto.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="person1.webp"
              alt="Persona 2"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <p className="text-lg text-white">
                <strong>María</strong> es experta en marketing digital. Está
                buscando un desarrollador para darle vida a su idea de negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
