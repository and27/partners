import TestimonialCard from "@/app/Components/TestimonialCard";

const testimonials = [
  {
    name: "María S.",
    image: "/woman-face.jpg",
    description:
      "Increíble cómo Partners me ayudó a encontrar los compañeros perfectos para mi proyecto tecnológico",
  },
  {
    name: "Carlos L",
    image: "/entrepreneur-face.jpg",
    description:
      "Gracias a Partners, nuestro proyecto encontró el experto en IA que necesitábamos para despegar",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-neutral-200 text-neutral-800 p-5 pt-[4rem] pb-[8rem] max-w-[1280px] mx-auto md:px-[8rem] text-center">
      <h2 className="text-3xl font-bold pb-[4rem] text-neutral-800">
        Para gente que quiere cambiar el mundo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
        {testimonials.map((t, i) => (
          <TestimonialCard testimonial={t} key={i} />
        ))}
      </div>
      <p className="text-lg font-semibold my-10">Descubre tu potencial.</p>
      <a
        href="https://forms.gle/S3GReHpDV9CnpxLk6"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 text-white px-5 py-3 rounded text-lg font-semibold w-fit mt-5 hover:bg-blue-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Empieza hoy
      </a>
    </section>
  );
};

export default Testimonials;
