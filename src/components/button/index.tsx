import Button from '@mui/material/Button';
import React from 'react';

const CButton = (
  {
    label,
    icon = <></>,
    disabled = false,
    onClick,
    outline,
    color = 'success',
    fontSize = '18px',
    variant = 'contained',
  },
  paddingX = '10px',
  borderColor = '#f31c23'
) => {
  // functions
  function className() {
    let classToMap = `${className || ''} ${color}-btn`;
    if (disabled) {
      classToMap = `${className || ''} disabled-btn`;
    }
    if (outline) {
      classToMap = `${classToMap} ${className || ''} ${color}-btn-outline`;
    }
    return classToMap;
  }

  function style() {
    if (color === 'green') borderColor = '#009852';

    return {
      borderRadius: '8px',
      fontSize: `${fontSize} `,
      border: ` ${outline ? '2px solid ' : '0px '} ${borderColor} `,
      paddingBlock: ` ${paddingX} `,
      textOverflow: 'ellipsis ',
    };
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
      startIcon={icon}
      style={{ height: '40px', fontSize: '12px', textOverflow: 'ellipsis ' }}
    >
      {label}
    </Button>
  );
};

export default CButton;
