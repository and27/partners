"use client";

import Step1 from "@/app/Components/form/Step1";
import Step2 from "@/app/Components/form/Step2";
import Step3 from "@/app/Components/form/Step3";
import ProgressDots from "@/app/Components/ProgressDots";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  projectStage: string;
  supportType: string;
}

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectStage: "",
    supportType: "",
  });

  const handleNextStep = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gray-50">
      <p className="text-blue-700 text-lg font-semibold px-3 py-1 rounded-lg tracking-widest mb-5">
        PARTNERS
      </p>
      <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl w-full max-w-lg h-[55vh] overflow-y-auto">
        {step < 4 && <ProgressDots currentStep={step} />}
        {step === 1 && <Step1 onNext={handleNextStep} />}
        {step === 2 && (
          <Step2 onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {step === 3 && (
          <Step3 onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {step > 3 && (
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-800 mb-8">
              ¡Gracias por completar el formulario!
            </h1>
            <p className="text-gray-600 mb-10">
              Hemos recibido tu información y nos pondremos en contacto contigo
              en breve.
            </p>
            <Link
              href="/"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Ir a la página de inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
