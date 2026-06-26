import { useState } from "react";

export function useFormValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, validationMessage, form } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validationMessage,
    }));

    setIsValid(form?.checkValidity() ?? false);
  };

  const resetValidation = () => {
    setErrors({});
    setIsValid(false);
  };

  return {
    errors,
    isValid,
    handleChange,
    resetValidation,
  };
}
