import Image from "next/image";

const benefits = [
  {
    title: "Conexión",
    description:
      "Nuestro sistema de matchmaking te empareja con emprendedores que tienen habilidades y objetivos complementarios.",
    image: "/handshake-benefit.webp",
  },

  {
    title: "Innovación sin Límites",
    description:
      "Una vez que hagas match, empieza a colaborar de inmediato. Ya sea que necesites desarrollar un producto, escalar tu negocio, o buscar financiamiento.",
    image: "/group-benefit.webp",
  },
  {
    title: "Cambiar el Juego",
    description:
      "Trabaja en proyectos que cambian el juego y lleva tus ideas al siguiente nivel.",
    image: "/girl-phone.webp",
  },
];

const Benefits = () => {
  return (
    <section className="bg-neutral-100 text-neutral-800 p-5 py-10 md:py-[9rem] text-center">
      <h1 className="text-3xl font-bold mb-16">Partners te ofrece</h1>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-start gap-5 text-left bg-neutral-100"
          >
            <div className="relative w-full h-[12rem] ratio-16/9">
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold z-10">
                {benefit.title}
              </h2>
            </div>
            <p className="text-lg">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
