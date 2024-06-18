import Image from "next/image";

const Scurve = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 p-5 pt-[4rem] pb-[8rem]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
        <div className="relative">
          <Image
            src="/person-computer.jpg"
            alt="Next.js logo"
            fill
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-7">
          <h2 className="text-3xl font-bold">¿Cómo Funciona Partners?</h2>
          <p className="text-lg">
            Partners es una plataforma que te permite encontrar a jóvenes
            profesionales con habilidades complementarias a las tuyas para
            trabajar en equipo y llevar a cabo tu idea innovadora. ¡Es muy
            sencillo!
          </p>
          <ul className="list-disc list-inside">
            <li>Regístrate en Partners.</li>
            <li>Publica tu idea innovadora.</li>
            <li>
              Encuentra a jóvenes profesionales con habilidades complementarias
              a las tuyas.
            </li>
            <li>Trabaja en equipo para llevar a cabo tu idea innovadora.</li>
            <li>
              Haz realidad tu idea y conviértete en un emprendedor exitoso.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Scurve;
