import { useState } from "react";

interface Step1Props {
  onNext: (data: { name: string; email: string }) => void;
  onBack: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext, onBack }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext({ name, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col h-full justify-between"
    >
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="block text-xl font-semibold text-gray-800 mb-8">
            El último paso conectar contigo
          </h1>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-neutral-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-neutral-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200"
        >
          Atrás
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Step1;
