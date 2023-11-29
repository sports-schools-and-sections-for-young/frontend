import React, { useState, useCallback } from "react";

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ValidationHook {
  values: FormValues;
  errors: FormErrors;
  isValid: boolean;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (name: string, value: string) => void;
  reset: (initialValues?: FormValues, valid?: boolean) => void;
  validateName: (name: string) => boolean;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

export function useFormValidation(
  initialValues: FormValues = {},
): ValidationHook {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateName = useCallback((name: string) => {
    const regex = /^[A-Za-zА-Яа-яЁё\s-]*$/;
    return regex.test(name);
  }, []);

  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = evt.target;
      const validationMessage = validateName(value) ? "" : "Invalid input";

      setValues((oldValues) => ({ ...oldValues, [name]: value }));
      setErrors((oldErrors) => ({ ...oldErrors, [name]: validationMessage }));
      setIsValid(evt.target.form?.checkValidity() ?? false);
    },
    [validateName],
  );

  const reset = useCallback((initialValues: FormValues = {}, valid = false) => {
    setValues(initialValues);
    setErrors({});
    setIsValid(valid);
  }, []);

  const setValue = useCallback((name: string, value: string) => {
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  }, []);

  return {
    values,
    errors,
    isValid,
    handleChange,
    setValue,
    reset,
    validateName,
    setErrors,
  };
}
