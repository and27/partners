import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-neutral-200"></nav>
      <main className="bg-neutral-200 text-neutral-800 relative">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-screen gap-5">
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="logo"
              width="100"
              height="100"
              className="mb-8"
            />
            <h1 className="text-6xl font-bold">Conecta. Colabora. Crea.</h1>
            <p className="text-lg">
              ¿Tienes una idea innovadora pero necesitas un equipo para llevarla
              a cabo? En Partners, te ayudamos a encontrar y conectar con
              jóvenes profesionales que comparten tu pasión por la innovación y
              el emprendimiento.
            </p>
            <button
              className="text-white px-5 py-3 rounded text-lg font-semibold w-fit bg-blue-600 
             hover:bg-blue-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ¡Quiero Empezar!
            </button>
          </div>
          <div className="hidden md:block absolute w-1/2 h-full -right-10 bg-gradient-to-r from-blue-600 to-violet-600">
            <Image
              src="/entrepreneur.jpg"
              alt="Next.js logo"
              fill
              className="object-cover w-full h-full opacity-90"
            />
            <div className="flex gap-5 card bg-neutral-200 text-neutral-800 p-4 rounded-lg shadow-lg z-10 absolute w-96 bottom-6 -left-20">
              <div className="flex flex-col gap-1">
                <Image
                  src="/entrepreneur-face.jpg"
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
                <h2 className="text-md font-semibold">Juan Pérez</h2>
                <p className="text-sm">
                  Encontré a mi cofundador en Partners y juntos hemos logrado
                  llevar a cabo nuestra idea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
