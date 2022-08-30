import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';
import React from 'react';

import CButton from '../button';

const deleteDialog = ({
  toggleModal,
  confirmFunction,
  content = 'Are You Sure You Want To Delete This Record',
}: any) => (
  <>
    <div>{content}</div>

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
        label={'Delete'}
        outline={true}
        icon={<DoneIcon />}
        variant="outlined"
        onClick={confirmFunction}
      />
    </div>
  </>
);

export default deleteDialog;
