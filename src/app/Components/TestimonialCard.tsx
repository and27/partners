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
    <div className="flex gap-3 shadow p-7">
      <div className="flex flex-col gap-1">
        <Image
          src={testimonial.image}
          alt="emprendedor"
          width={100}
          height={100}
          className="rounded-full object-cover w-16 h-16"
        />
        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star className="ml-[1px]" key={i} />
            ))}
        </div>
      </div>
      <div>
        <h2 className="text-md font-semibold">{testimonial.name}</h2>
        <p className="text-sm">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
