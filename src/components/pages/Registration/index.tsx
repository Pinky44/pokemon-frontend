import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton, FormLink, FormTextField } from "src/components/CustomElements";
import { Snackbar } from "src/components/Snackbar/Snackbar";
import { useAppDispatch } from "src/store/hooks/useTypedSelector";
import { registrationUser } from "src/store/action-creators/user";
import { validationSchema } from "src/helpers/validation-yup";
import { FormValues } from "src/models/models";
import "./style.scss";

export const Registration: FC = () => {
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
  });

  const showError = (error: string) => {
    setError(error);
    setOpenError(true);
  };

  const onSubmit = async (data: FormValues) => {
    const error = await dispatch(registrationUser(data));

    if (error) {
      showError(error);

      return;
    }

    navigate("/auth");
  };

  return (
    <div className="registration-wrapper">
      <form
        className="registration-block-form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="registration-block-total">
          <h2 className="registration-block-total_name">Registration</h2>
        </div>

        <div className="registration-block_input">
          <FormTextField
            id="login"
            type="text"
            label="Login"
            register={register}
            fieldName="login"
            error={errors}
            dataTestId="registrationInput"
          />

          <FormTextField
            id="password"
            type="password"
            label="Password"
            register={register}
            fieldName="password"
            error={errors}
            dataTestId="registrationPassword"
          />

          <FormTextField
            id="repeatedPassword"
            type="password"
            label="Repeat password"
            register={register}
            fieldName="repeatedPassword"
            error={errors}
            dataTestId="registrationRepeatedPassword"
          />
        </div>

        <div className="registration-block-button">
          <CustomButton>Register</CustomButton>

          <FormLink to="/auth" text="Login" />
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
