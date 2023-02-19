import * as Yup from "yup";
import {
  passwordRegExp,
  textErrorCheckingFieldForEmptiness,
  textErrorCheckingPassword,
} from "./constants";

export const validationSchema = Yup.object().shape({
  login: Yup.string().required(textErrorCheckingFieldForEmptiness),
  password: Yup.string()
    .required(textErrorCheckingFieldForEmptiness)
    .matches(passwordRegExp, "Пароль должен быть 6 > симоволов"),
  repeatedPassword: Yup.string()
    .required(textErrorCheckingPassword)
    .oneOf([Yup.ref("password"), null], textErrorCheckingPassword),
});

export const validationSchemaLogin = Yup.object().shape({
  login: Yup.string().required(textErrorCheckingFieldForEmptiness),
  password: Yup.string().required(textErrorCheckingFieldForEmptiness),
});
