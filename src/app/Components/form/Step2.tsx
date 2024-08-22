import { useState } from "react";

interface Step2Props {
  onNext: (data: { projectStage: string }) => void;
  onBack: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onBack }) => {
  const [projectStage, setProjectStage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext({ projectStage });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col h-full justify-between"
    >
      <div>
        <h1 className="block text-xl font-semibold text-gray-800 mb-8">
          ¡Genial! Ahora cuéntanos un poco más sobre tu negocio o emprendimiento
        </h1>
        <label
          htmlFor="projectStage"
          className="block text-sm font-medium text-gray-700"
        >
          ¿En qué etapa estás?
        </label>
        <select
          id="projectStage"
          value={projectStage}
          onChange={(e) => setProjectStage(e.target.value)}
          className="text-neutral-900 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="Idea inicial">Idea inicial</option>
          <option value="MVP desarrollado">MVP desarrollado</option>
          <option value="Producto en el mercado">Producto en el mercado</option>
          <option value="Escalando">Escalando</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Atrás
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Continuar
        </button>
      </div>
    </form>
  );
};

export default Step2;
