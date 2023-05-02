import s from "./input.css";
import { useState } from "react";

export function Input({ type, onTextChange = (v) => {}, placeholder, name }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type || "text";

  return (
    <div className={s.inputContainer}>
      <input
        type={inputType}
        className={s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        name={name}
      />
      {type === "password" && (
        <label className={s.checkboxLabel}>
          <input
            type="checkbox"
            className={s.checkbox}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
      )}
    </div>
  );
}



/* import s from "./input.css";
export function Input({ type, onTextChange, placeholder }) {
  return (
    <input
      type={type || "text"}
      className={s.input}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
    />
  );
} */
