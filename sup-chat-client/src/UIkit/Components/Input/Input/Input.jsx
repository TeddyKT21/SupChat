import "./input.css";
import { useState } from "react";

export const Input = ({ type, onTextChange = (v) => {}, placeholder, name, value, className}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type || "text";

  return (
    <div className={`inputContainer ${className}`}>
      <input
        type={inputType}
        className={"input"}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        value={value}
        name={name}
      />
      {type === "password" && (
        <label className="checkboxLabel">
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
      )}
    </div>
  );
}
