import React, { useState } from "react";
import styles from "./TestPage.module.scss";
import Input, { InputType } from "../../../components/ui/Input/Input.tsx";

const TestPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.testPage}>
      <Input
        label="Улица"
        type={InputType.SEARCH}
        placeholder="Поиск"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TestPage;
