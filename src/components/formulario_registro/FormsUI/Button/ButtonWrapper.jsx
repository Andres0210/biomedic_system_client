import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

export default function ButtonWrapper({ children, ...otherProps }) {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const configButton = {
    variant: "contained",
    color: "primary",
    fullWidth: "true",
    onClick: handleSubmit,
  };
  return <Button {...configButton}>{children}</Button>;
}
