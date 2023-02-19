import { FC } from "react";
import { Snackbar as MaterialSnackbar } from "@mui/material";
import closeImage from "src/images/close.png";
import "./style.scss";

export interface ISnackbar {
  error: string;
  openError: boolean;
  setOpenError: (a: boolean) => void;
}

export const Snackbar: FC<ISnackbar> = ({ error, openError, setOpenError }) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  return (
    <MaterialSnackbar
      open={openError}
      autoHideDuration={6000}
      onClose={handleClose}
      message={error}
      action={
        <button className="button-snackbar" type="button" onClick={handleClose}>
          <img src={closeImage} alt="close" className="img-close" />
        </button>
      }
    />
  );
};
