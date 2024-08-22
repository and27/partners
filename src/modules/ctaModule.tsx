import Image from "next/image";

const CtaModule = () => {
  return (
    <section className="relative min-h-screen bg-neutral-200 text-neutral-800 p-5">
      <div
        className="absolute inset-[-10px] bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('handshake.webp')",
          filter: "brightness(0.25) blur(2px)",
        }}
      ></div>
      <div className="relative max-w-[1280px] mx-auto h-screen flex flex-col justify-center items-center gap-5 text-center z-10">
        <div className="relative">
          <Image
            src="/woman-phone.webp"
            alt="Next.js logo"
            fill
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-7 text-white items-center w-[80%]">
          <h2 className="text-3xl font-bold">
            No Dejes Que Tu Idea Espere Más
          </h2>
          <p className="text-lg">
            El socio estratégico que necesitas está a solo un clic de distancia.
            Únete a Partners y comienza a construir el futuro de tu
            emprendimiento hoy.
          </p>
          <a
            href="https://forms.gle/S3GReHpDV9CnpxLk6"
            target="_blank"
            rel="noreferrer"
            className="mt-5 text-white px-5 py-3 rounded-lg text-lg font-semibold bg-blue-700  w-max
             hover:bg-blue-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaModule;
