import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;

  const valueBlurHandler = (e) => {
    setIsTouched(true);
  };

  const valueChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
