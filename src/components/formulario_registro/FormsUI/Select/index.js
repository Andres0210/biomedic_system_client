import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";
import { boolean } from "yup";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const configSelect = {
    ...field,
    ...otherProps,
    size: "small",
    select: true,
    variant: "outlined",
    fullWidth: true,
    onchange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <TextField {...configSelect}>
      {options.map((item, index) => {
        return (
          <MenuItem key={index} value={item}>
            {
              typeof item === 'boolean' ? (item ? "SI" : "NO") : item 
            }
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
