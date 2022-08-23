import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import React, { useState } from 'react';

import CButton from '@/components/button';
import CInputFiled from '@/components/input';
import { customerState } from '@/helper/addCustomer';
import { inputTypes } from '@/helper/common';

const AddCustomer = (props: any) => {
  const { onAddCustomer, toggleModal } = props;
  const [customerInfo, setCustomerInfo] = useState({
    ...customerState,
  });

  const handleChange = (name: string, value: string) => {
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const submitform = () => {
    onAddCustomer(customerInfo);
  };

  return (
    <>
      <CInputFiled
        type={inputTypes.TEXT}
        handleChange={handleChange}
        value={customerInfo.name}
        name="name"
        label="Name"
      />

      <div className="my-5 flex w-full gap-5">
        <div className=" flex-1">
          <CInputFiled
            type={inputTypes.PHONE}
            handleChange={handleChange}
            value={customerInfo.phone}
            name="phone"
            label="Phone"
          />
        </div>
        <div className=" flex-1">
          <CInputFiled
            type={inputTypes.PHONE}
            handleChange={handleChange}
            value={customerInfo.mobile}
            name="mobile"
            label="Mobile"
          />
        </div>
      </div>
      <CInputFiled
        type={inputTypes.TEXT}
        handleChange={handleChange}
        value={customerInfo.email}
        name="email"
        label="Email"
      />

      <div className="my-5 flex w-full justify-end gap-5">
        <CButton
          label={'Cancel'}
          outline={true}
          icon={<CancelIcon />}
          variant="outlined"
          color="error"
          onClick={toggleModal}
        />
        <CButton
          label={'Add Cutomer'}
          outline={true}
          icon={<PersonAddAlt1Icon />}
          variant="outlined"
          onClick={submitform}
        />
      </div>
    </>
  );
};

export default AddCustomer;
