import { FC, MouseEventHandler } from "react";
import "./style.scss";

interface ICustomButton {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton: FC<ICustomButton> = ({ children, onClick }) => (
  <button
    className="button"
    type="submit"
    data-testid="loginButton"
    onClick={onClick}
  >
    {children}
  </button>
);
