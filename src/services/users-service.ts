import { url } from "src/helpers/constants";
import { FormValues } from "src/models/models";

const registrationService = async (data: FormValues | undefined) => {
  const response = await fetch(`${url}/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  return response;
};

const loginService = async (data: FormValues | undefined) => {
  const response = await fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  return response;
};

const checkTokenUserService = async (token: string) => {
  const response = await fetch(`${url}/login-check`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((response) => response.json());

  return response;
};

export { registrationService, loginService, checkTokenUserService };
