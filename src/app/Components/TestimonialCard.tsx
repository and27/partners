import Image from "next/image";
import { Star } from "./Star";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    image: string;
    description: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-neutral-100 p-5 rounded-lg shadow-lg flex flex-col gap-3">
      <p className="text-sm">{testimonial.description}</p>
      <h2 className="text-md font-semibold">- {testimonial.name}</h2>
    </div>
  );
};

export default TestimonialCard;
