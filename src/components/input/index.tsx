import SearchIcon from '@mui/icons-material/Search';
import { InputLabel, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';

import { inputTypes } from '@/helper/common';

const CInputFiled = (props: any) => {
  const { value, handleChange, type, size = 'small', name, label } = props;

  const textInput = () => {
    return (
      <TextField
        variant="outlined"
        label={label}
        value={value}
        onChange={(event) =>
          handleChange(event.target.name, event.target.value)
        }
        fullWidth={true}
        size={size}
        name={name}
      />
    );
  };

  const searchInput = () => {
    return (
      <FormControl variant="outlined" size={size}>
        <InputLabel>Search</InputLabel>
        <OutlinedInput
          type={'text'}
          value={value}
          size={size}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon fill="" />
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>
    );
  };
  const phoneInput = () => {
    return (
      <MuiTelInput
        variant="outlined"
        defaultCountry="FR"
        label={label}
        value={value}
        onChange={(newValue) => handleChange([name], newValue)}
        fullWidth={true}
        size={size}
      />
    );
  };

  const generateInput = () => {
    switch (type) {
      case inputTypes.TEXT:
        return textInput();

      case inputTypes.PHONE:
        return phoneInput();

      case inputTypes.SEARCH:
        return searchInput();

      default:
        return null;
    }
  };

  return <>{generateInput()}</>;
};
export default CInputFiled;
