import * as React from 'react';

import CButton from '../button';
import CInputFiled from '../input';

function SeachAndButtonContainer(props: any) {
  const {
    inputType,
    inputHandleChange,
    inputValue,
    inputName,
    inputLabel,
    buttonLabel,
    buttonIcon,
    buttonOnClick,
    onSearchButtonClick,
  } = props;
  return (
    <div className="flex justify-between gap-x-2">
      <CInputFiled
        type={inputType}
        handleChange={inputHandleChange}
        value={inputValue}
        name={inputName}
        label={inputLabel}
        onSearchButtonClick={onSearchButtonClick}
      />
      <CButton
        label={buttonLabel}
        outline={true}
        icon={buttonIcon}
        variant="outlined"
        onClick={buttonOnClick}
      />
    </div>
  );
}

export default SeachAndButtonContainer;
