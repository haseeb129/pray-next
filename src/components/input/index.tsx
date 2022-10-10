import SearchIcon from '@mui/icons-material/Search';
import { InputLabel, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';

import { inputTypes } from '@/helper/common';
import { type } from 'os';

const CInputFiled = (props: any) => {
  const {
    value,
    handleChange = () => {},
    type,
    size = 'small',
    name,
    label,
    required=false,
    error={},
    helperText={},
    rest={},
    onSearchButtonClick = () => {},
  } = props;

  console.log('Props',props)

  const textInput = (fieldType = 'text', placeholder = '') => {
    return (
      <TextField
      {...rest}
        variant="outlined"
        label={label}
        value={value}
        onChange={(event) =>
          handleChange(event.target.name, event.target.value)
        }
        fullWidth={true}
        size={size}
        name={name}
        type={fieldType}
        placeholder={placeholder}
        required={required}
        error={error}
        helperText={helperText}
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
          name={name}
          onChange={(event) =>
            handleChange(event.target.name, event.target.value)
          }
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon fill="" onClick={onSearchButtonClick} />
            </InputAdornment>
          }
          label="Search"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSearchButtonClick();
            }
          }}
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

      case inputTypes.EMAIL:
        return textInput('email', 'email@address.com');

      case inputTypes.PASSWORD:
        return textInput('password', '');

      default:
        return null;
    }
  };

  return <>{generateInput()}</>;
};
export default CInputFiled;
