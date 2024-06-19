import Image from "next/image";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                key={i}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M12 10v7m0 0v7m0-7h7m-7 0H5"
                />
              </svg>
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
