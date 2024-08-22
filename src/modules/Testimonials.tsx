import TestimonialCard from "@/app/Components/TestimonialCard";

const testimonials = [
  {
    name: "María S.",
    image: "/woman-face.jpg",
    description:
      "Increíble cómo Partners me ayudó a encontrar los compañeros perfectos para mi proyecto tecnológico.",
  },
  {
    name: "Carlos L.",
    image: "/entrepreneur-face.jpg",
    description:
      "Gracias a Partners, encontré al cofundador perfecto para mi startup en solo una semana. Ahora estamos desarrollando un producto que realmente va a revolucionar nuestra industria.",
  },
  {
    name: "Laura R.",
    image: "/woman-face-2.jpg",
    description:
      "Partners me permitió encontrar a un equipo de trabajo con el que pude llevar a cabo mi idea innovadora. ¡Gracias!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 p-5 pt-[4rem] pb-[8rem] max-w-[1280px] mx-auto text-center">
      <h2 className="text-3xl font-bold pb-[4rem] text-neutral-800">
        Para gente que quiere cambiar el mundo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {testimonials.map((t, i) => (
          <TestimonialCard testimonial={t} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
