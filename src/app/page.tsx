'use client'
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input"
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";
import { SymptomsForm, SymptomsFormErrors } from "@/utils/types";
import { validationsForm } from "@/utils/validationsForm";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [painLevel, setPainLevel] = useState(1);
  const [errors, setErrors] = useState<Partial<SymptomsFormErrors>>({});
  const [formData, setFormData] = useState<SymptomsForm>({
    name: "", age: "", headache: false, fever: false, cough: false, soreThroat: false, nasalCongestion: false, otherSymptoms: ""
  });

  const handleInputChange = (value: string | boolean, field: keyof SymptomsForm) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validationsForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      //Limpiamos el formulario y el nivel de dolor
      setFormData({ name: "", age: "", headache: false, fever: false, cough: false, soreThroat: false, nasalCongestion: false, otherSymptoms: "" });
      setPainLevel(1);

      // Abrimos el modal
      setIsOpen(true);
    }
  }

  return (
    <div className="px-3 mb-8 min-h-screen z-40">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl font-semibold">Registro de síntomas</h1>
      </div>

      {/* Formulario */}
      <div className="grid gap-6 p-5 rounded-lg shadow-2xl inset-shadow-2xs max-w-3xl mx-auto">
        <form className="grid gap-7">

          {/* Información básica */}
          <div>
            <h2 className="mt-4 text-xl font-semibold">Información básica</h2>
            <div className="bg-gray-200 h-px mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nombre completo"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
                error={errors.name}
              />
              <Input
                label="Edad"
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange(e, "age")}
                error={errors.age as string}
              />
            </div>
          </div>

          {/* Sintomas */}
          <div>
            <h2 className="text-xl font-semibold">Síntomas</h2>
            <div className="bg-gray-200 h-px mb-6"></div>
            <p className="mb-1">Seleccione sus síntomas</p>
            <div className="grid gap-1 mb-6">
              <Checkbox
                label="Tos"
                checked={formData.cough as boolean}
                onChange={(e) => handleInputChange(e, "cough")}
              />
              <Checkbox
                label="Fiebre"
                checked={formData.fever as boolean}
                onChange={(e) => handleInputChange(e, "fever")}
              />
              <Checkbox
                label="Dolor de cabeza"
                checked={formData.headache as boolean}
                onChange={(e) => handleInputChange(e, "headache")}
              />
              <Checkbox
                label="Congestión nasal"
                checked={formData.nasalCongestion as boolean}
                onChange={(e) => handleInputChange(e, "nasalCongestion")}
              />
              <Checkbox
                label="Dolor de garganta"
                checked={formData.soreThroat as boolean}
                onChange={(e) => handleInputChange(e, "soreThroat")}
              />
              {(errors.headache || errors.fever || errors.cough) && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.headache || errors.fever || errors.cough}
                </p>
              )}
            </div>

            {/* Nivel de dolor */}
            <div className="w-full bg-white">
              <label className="text-sm font-medium text-gray-700">Nivel de dolor (1 - 10)</label>
              <input
                id="painLevel"
                type="range"
                min={1}
                max={10}
                value={painLevel}
                onChange={(e) => setPainLevel(Number(e.target.value))}
                className="w-full cursor-pointer accent-blue-600 hover:accent-blue-600"
              />
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>1(Bajo)</span>
                <span>10(Alto)</span>
              </div>
              <div className="flex justify-center mt-2 text-white text-xl">
                <h3 className="flex w-12 h-12 items-center justify-center rounded-full bg-blue-600">{painLevel}</h3>
              </div>
            </div>
          </div>

          {/* Otros síntomas */}
          <div className="flex- flex-col">
            <Textarea
              label="Otros síntomas(opcional)"
              rows={4}
              error={errors.otherSymptoms}
              value={formData.otherSymptoms}
              onChange={(e) => handleInputChange(e, "otherSymptoms")}
            />
          </div>

          {/* Botón para enviar el formulario */}
          <Button text="Enviar" onClick={handleSubmit} />
        </form>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Datos enviados con exito"
      />
    </div>
  );
}
