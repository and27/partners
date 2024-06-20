import Benefits from "@/modules/benefits";
import Footer from "@/modules/footer";
import Scurve from "@/modules/scurve";
import Image from "next/image";
import TestimonialCard from "./Components/TestimonialCard";
import Testimonials from "@/modules/Testimonials";

const testimonial = {
  name: "María S.",
  image: "/woman-face.jpg",
  description:
    "Increíble cómo Partners me ayudó a encontrar los compañeros perfectos para mi proyecto tecnológico",
};

export default function Home() {
  return (
    <>
      <main className="bg-neutral-200 text-neutral-800 relative p-5">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-screen gap-5">
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="logo"
              width="130"
              height="130"
              className="mb-4"
            />
            <h1 className="text-5xl font-bold">
              Conecta, Colabora y Transforma Ideas en Realidad.
            </h1>
            <p className="text-xl">
              Unete a Partners, donde los innovadores encuentran su equipo ideal
            </p>
            <a
              href="https://forms.gle/S3GReHpDV9CnpxLk6"
              target="_blank"
              rel="noreferrer"
              className="text-white px-5 py-3 rounded text-lg font-semibold w-fit bg-blue-600 
             hover:bg-blue-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ¡Únete ahora!
            </a>
          </div>
          <div className="hidden md:block absolute w-1/2 h-full -right-10 bg-gradient-to-r from-blue-600 to-violet-600">
            <Image
              src="/back2.jpg"
              alt=""
              fill
              className="object-cover w-full h-full opacity-80"
            />
            <div className="bg-neutral-200 text-neutral-800 rounded-lg z-10 absolute w-96 bottom-6 -left-20">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </div>
        </div>
      </main>
      <Benefits />
      <Testimonials />
      <Scurve />
      <Footer />
    </>
  );
}
