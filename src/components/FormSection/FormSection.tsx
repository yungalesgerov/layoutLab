import React, { useState, forwardRef } from "react";
import axios from "axios";
import "./FormSection.css";
import { FloatingLabelInput } from "../FloatingLabelInput";

export const FormSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const validateInput = (value: string) => {
    return value.length > 3;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Вы должны согласиться с условиями");
      return;
    }

    try {
      const response = await axios.post("URL_СЕРВЕРА", {
        name,
        phone,
      });
      console.log("Ответ сервера:", response.data);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return (
    <div ref={ref} className="conteiner">
      <div className="forma">Отправь форму</div>
      <form onSubmit={handleSubmit}>
        <div className="inputs1">
          <FloatingLabelInput
            type="text"
            label="Имя"
            helperText="helperText"
            validate={validateInput}
            onChange={(e) => setName(e.target.value)}
          />
          <FloatingLabelInput
            type="number"
            label="Телефон"
            helperText="helperText"
            validate={validateInput}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="inputs2">
          <div className="confirm_term">
            <input
              className="chec"
              type="checkbox"
              checked={isChecked}
              required
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="oke">Согласен, отказываюсь</div>
          </div>
          <button className="btn10" type="submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
});
