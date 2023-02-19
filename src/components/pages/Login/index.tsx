import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton, FormLink, FormTextField } from "src/components/CustomElements";
import { Snackbar } from "src/components/Snackbar/Snackbar";
import { validationSchemaLogin } from "src/helpers/validation-yup";
import { FormValues } from "src/models/models";
import { useAppDispatch } from "src/store/hooks/useTypedSelector";
import { loginUser } from "src/store/action-creators/user";
import "./style.scss";

export const Login: FC = () => {
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchemaLogin),
    mode: "onSubmit",
  });

  const showError = (error: string) => {
    setError(error);
    setOpenError(true);
  };

  const onSubmit = async (data: FormValues) => {
    const error = await dispatch(loginUser(data));

    if (error) {
      showError(error);

      return;
    }

    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <form
        className="login-block-form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-block-total">
          <h2 className="login-block-total_name">Authorization</h2>
        </div>

        <div className="login-block_input">
          <FormTextField
            id="login"
            type="text"
            label="Login"
            register={register}
            fieldName="login"
            error={errors}
            dataTestId="loginInput"
          />

          <FormTextField
            id="password"
            type="password"
            label="Password"
            register={register}
            fieldName="password"
            error={errors}
            dataTestId="passwordInput"
          />
        </div>

        <div className="login-block-button">
          <CustomButton>Login</CustomButton>

          <FormLink to="/registration" text="Register" />
        </div>

        <Snackbar
          error={error}
          openError={openError}
          setOpenError={setOpenError}
        />
      </form>
    </div>
  );
};
