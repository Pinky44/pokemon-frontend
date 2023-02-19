import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "src/models/models";
import "./style.scss";

interface IForm {
  id: string;
  fieldName: "login" | "password" | "repeatedPassword";
  label: string;
  register: UseFormRegister<FormValues>;
  error: FieldErrors<FormValues>;
  type: string;
  required?: boolean;
  dataTestId: string;
}

export const FormTextField: FC<IForm> = ({
  id,
  label,
  register,
  error,
  fieldName,
  type,
  required = true,
  dataTestId,
}) => (
  <div className="wrapper">
    <input
      data-testid={dataTestId}
      required={required}
      type={type}
      className={error[fieldName] ? "input-error" : "input-success"}
      id={id}
      placeholder={label}
      {...register(fieldName)}
    />
    {!!error[fieldName]?.message && (
      <div data-testid={`${dataTestId}_error`} className="error">{error[fieldName]?.message}</div>
    )}
  </div>
);
