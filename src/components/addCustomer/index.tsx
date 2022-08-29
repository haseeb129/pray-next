import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';

import CButton from '@/components/button';
import CInputFiled from '@/components/input';
import { inputTypes } from '@/helper/common';
import { customerState } from '@/helper/customers/addCustomer';

const AddCustomer = (props: any) => {
  const { onAddCustomer, toggleModal, preFilledInfo } = props;

  const [customerInfo, setCustomerInfo] = useState({ ...customerState });

  useEffect(() => {
    if (!_.isEmpty(preFilledInfo)) setCustomerInfo({ ...preFilledInfo });
    else setCustomerInfo({ ...customerState });
  }, [preFilledInfo]);

  const handleChange = (name: string, value: string) => {
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const submitform = () => {
    onAddCustomer(customerInfo, !_.isEmpty(preFilledInfo));
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
            type={inputTypes.TEXT}
            handleChange={handleChange}
            value={customerInfo.phone}
            name="phone"
            label="Phone"
          />
        </div>
        <div className=" flex-1">
          <CInputFiled
            type={inputTypes.TEXT}
            handleChange={handleChange}
            value={customerInfo.mobilePhone}
            name="mobilePhone"
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
          label={'Save Cutomer'}
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
