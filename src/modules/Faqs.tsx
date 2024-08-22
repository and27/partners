"use client";
import { SetStateAction, useState } from "react";

const topics = [
  {
    title: "¿Cuánto cuesta usar la plataforma?",
    description:
      "Es completamente gratuito para registrarte y comenzar a hacer conexiones. En el futuro, planeamos ofrecer funciones premium que te ayudarán a escalar aún más rápido.",
  },
  {
    title: "¿Qué tipo de emprendedores están en la plataforma?",
    description:
      "Nuestra comunidad incluye emprendedores de todo tipo de industrias, desde tecnología hasta salud, todos buscando socios estratégicos para llevar sus ideas al siguiente nivel.",
  },
  {
    title: "¿Cómo funciona el proceso de emparejamiento?",
    description:
      "El proceso de emparejamiento utiliza un algoritmo de matchmaking que toma en cuenta tus habilidades, necesidades y objetivos para encontrar el socio más adecuado para ti.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-100 text-neutral-900">
      <div className="max-w-7xl mx-auto py-[4rem] px-4 sm:px-6 lg:py-[8rem] lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold">
              ¿Tienes alguna pregunta sobre Partners?
            </h2>
            <p className="mt-3 text-lg">
              Aquí respondemos algunas de las preguntas más frecuentes que
              recibimos de nuestra comunidad.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-blue-700 rounded-lg text-neutral-100 p-5"
                >
                  <div className="flex gap-10 justify-between items-start ">
                    <dt
                      className="leading-6 text-lg font-semibold cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      {topic.title}
                    </dt>
                    <button
                      className="text-neutral-100 m-0"
                      onClick={() => toggleAccordion(index)}
                    >
                      {activeIndex === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  <dd
                    className={`mt-2 text-base md:mr-10 transition-max-height duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-screen"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {topic.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
