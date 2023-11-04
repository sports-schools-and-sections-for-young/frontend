import React, { useState } from "react";
import styles from "./TestPage.module.scss";
import Input from "../../../components/ui/Input/Input.tsx";

const TestPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.testPage}>
      <Input
        inputName="Улица"
        placeholder="Поиск"
        value={value}
        onChange={handleChange}
        hasError
        errorMessage="Ошибка"
      />
    </div>
  );
};

export default TestPage;
