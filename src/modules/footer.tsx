import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-800 py-6">
      <div className="max-w-[1280px] mx-auto gap-5 py-6">
        <div className="flex flex-col gap-5 items-center text-neutral-200">
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <p>☎️ 123-456-7890</p>
            </div>
            <div className="flex gap-2 items-center">
              <p>
                <a href="mailto:"> 📧 equipo.partners4@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-neutral-200">
        <p>© 2023 - 2025 Partners. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
