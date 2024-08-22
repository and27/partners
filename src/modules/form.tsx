export default function Form() {
  return (
    <div className=" min-h-screen bg-gray-100 bg-neutral-200 ">
      <div className="text-neutral-800 p-5 pt-[4rem] pb-[8rem] max-w-[50%] mx-auto flex flex-col items-center gap-5 text-center">
        <p className="text-black text-lg font-semibold  px-3 py-1 rounded-lg tracking-widest text-center">
          PARTNERS
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
          <h2 className="text-2xl font-bold mb-6 text-center text-neutral-900 mb-10">
            Encuentra a tu socio ideal llenando el siguiente formulario
          </h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="business"
                className="block text-sm font-medium text-gray-700"
              >
                ¿Cuál es tu negocio o proyecto?
              </label>
              <input
                type="text"
                id="business"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Enviar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¡Gracias por completar el formulario! Estamos revisando tus
            respuestas y pronto te contactaremos para presentarte a tu socio
            ideal. ¡Mantente atento, estamos emocionados de conectar contigo!
          </p>
        </div>
      </div>
    </div>
  );
}
