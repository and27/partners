import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const testimonial = {
  name: "María S.",
  image: "/woman-face.jpg",
  description:
    "Increíble cómo Partners me ayudó a encontrar los compañeros perfectos para mi proyecto tecnológico",
};

export const ImageWithTestimonial = () => (
  <div className="hidden md:block absolute w-1/2 h-full -right-10 ">
    <Image
      src="/handshake.webp"
      alt=""
      fill
      className="object-cover w-full h-full"
    />
    <div className="bg-neutral-200 text-neutral-800 rounded-lg z-10 absolute w-96 bottom-6 -left-20">
      <TestimonialCard testimonial={testimonial} />
    </div>
  </div>
);
