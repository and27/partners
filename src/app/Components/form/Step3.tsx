import { useState } from "react";

interface Step3Props {
  onNext: (data: { supportType: string }) => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onBack }) => {
  const [supportType, setSupportType] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext({ supportType });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col h-full justify-between"
    >
      <div>
        <h1 className="block text-xl font-semibold text-gray-800 mb-8">
          Cuéntanos cuál es la barrera más importante que estás intentando
          superar en este momento.
        </h1>
        <label
          htmlFor="projectStage"
          className="block text-sm font-medium text-gray-700"
        >
          ¿Cuál es tu mayor desafío?
        </label>
        <select
          id="supportType"
          value={supportType}
          onChange={(e) => setSupportType(e.target.value)}
          className="text-neutral-900 mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition"
          required
        >
          <option value="" disabled>
            Selecciona tu mayor desafío...
          </option>
          <option value="Escalar operaciones rápidamente">
            Escalar operaciones rápidamente
          </option>
          <option value="Atraer inversión clave para el crecimiento">
            Atraer inversión clave para el crecimiento
          </option>
          <option value="Integrar nuevas tecnologías de manera efectiva">
            Integrar nuevas tecnologías de manera efectiva
          </option>
          <option value="Formar un equipo altamente competitivo">
            Formar un equipo altamente competitivo
          </option>
          <option value="Optimizar procesos para mayor eficiencia">
            Optimizar procesos para mayor eficiencia
          </option>
          <option value="Otro desafío específico">
            Otro desafío específico
          </option>
        </select>
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

export default Step3;
