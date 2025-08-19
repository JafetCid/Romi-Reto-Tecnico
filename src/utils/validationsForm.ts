import { SymptomsForm, SymptomsFormErrors } from "./types";

export const validationsForm = (formData: SymptomsForm): Partial<SymptomsFormErrors> => {

    const error: Partial<SymptomsFormErrors> = {};

    const name = formData.name;
    const noNumbers = /[0-9]/;
    const specialCharacter = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;

    if (!name.trim()) {

        error.name = "El nombre es obligatorio";

    } else if (name.length < 6) {

        error.name = "El nombre no puede contener menos de 6 caracteres";

    } else if (name.length > 30) {

        error.name = "El nombre no puede contener mas de 30 caracteres";

    } else if (noNumbers.test(name)) {

        error.name = "El nombre no puede contener números";

    } else if (!specialCharacter.test(name)) {

        error.name = "El nombre no puede contener caracteres especiales";

    }

    const age = formData.age;

    if (/^0\d+/.test(age)) {

        error.age = "La edad no puede empezar con cero";

    } else if (!/^\d+$/.test(age)) {

        error.age = "Edad invalida";

    } else {

        if (Number(age) <= 0) {

            error.age = "La edad debe de ser mayor a 0";

        } else if (Number(age) > 110) {

            error.age = "La edad no debe ser mayor a 110";

        }
    }

    if (!formData.headache && !formData.fever && !formData.cough && !formData.soreThroat && !formData.nasalCongestion) {

        error.headache = "Debes seleccionar al menos un síntoma";
        error.fever = "Debes seleccionar al menos un síntoma";
        error.cough = "Debes seleccionar al menos un síntoma";
        error.soreThroat = "Debes seleccionar al menos un síntoma";
        error.nasalCongestion = "Debes seleccionar al menos un síntoma";

    }

    if (formData.otherSymptoms.length >= 250) {

        error.otherSymptoms = "Este campo no puede contener más de 250 caracteres";

    }

    return error;
}