import Image from "next/image";

const benefits = [
  {
    title: "Conecta",
    description:
      "Encuentra a jóvenes profesionales con habilidades complementarias a las tuyas.",
    image: "/ben3.jpg",
  },
  {
    title: "Colabora",
    description: "Trabaja en equipo para llevar a cabo tu idea innovadora.",
    image: "/ben2.jpg",
  },
  {
    title: "Crea",
    description:
      "Haz realidad tu idea y conviértete en un emprendedor exitoso.",
    image: "/ben1.jpg",
  },
];

const Benefits = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 p-5 pt-[12rem] pb-[8rem]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-start gap-5 text-left bg-neutral-200"
          >
            <div className="relative w-full h-[10rem] ratio-16/9">
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold">{benefit.title}</h2>
            <p className="text-lg">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
