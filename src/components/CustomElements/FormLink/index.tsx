import { FC } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export interface IFormLink {
  to: string;
  text: string;
}

export const FormLink: FC<IFormLink> = ({ to, text }) => (
  <Link className="link" to={to}>
    {text}
  </Link>
);
