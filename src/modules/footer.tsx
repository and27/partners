import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white text-neutral-800 p-10 py-[4rem]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="flex flex-col gap-5 col-span-7 mb-8 md:mr-10 md:mb-0 ">
          <Image
            src="/logo.png"
            alt="logo"
            width="100"
            height="100"
            className="mb-2"
          />
          <p className="text-sm">
            Partners empodera la próxima generación de líderes e innovadores en
            América Latina.
          </p>
        </div>
        <div className="flex flex-col gap-5 col-span-5">
          <h3 className="text-xl font-bold">Contacto</h3>
          <p>
            <a href="mailto:" className="text-neutral-200 hover:underline">
              equipo.partners4@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:" className="text-neutral-200 hover:underline">
              +593 99 067 1811
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
