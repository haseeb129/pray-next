import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import _ from 'lodash';
import * as React from 'react';
import { EditFilled  } from '@ant-design/icons';


import CButton from '@/components/button';

export interface CustomerReducer {
  customers: {};
  loading: boolean;
}

const expandableComponent = ({ data, onEdit }) => {
  const simpleTableRow = (name: string, value: any) => (
    <span className="flex py-1">
      <span className="w-2/4">{name}</span>
      <span className=" w-2/4">{_.isEmpty(value) ? '--' : value}</span>
    </span>
  );

  return (
    <Box>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>
              {simpleTableRow('Phone', `+${data?.phone}`)}
              {simpleTableRow('Mobile Phone', `+${data?.mobilePhone}`)}
            </TableCell>
            <TableCell>
              {simpleTableRow('ID', data?.registeredNumber)}
              {simpleTableRow('Street', data?.street)}
              {simpleTableRow('District', data?.district)}
              {simpleTableRow('Postal Code', data?.postalCode)}
            </TableCell>
            <TableCell>
              {simpleTableRow('City', data?.city)}
              {simpleTableRow('State', data?.state)}
              {simpleTableRow('Country', data?.country)}
            </TableCell>
            <TableCell>
              <CButton
                label={'Edit'}
                outline={true}
                variant="outlined"
                onClick={onEdit}
                className="mt-3"
                icon={<EditFilled style={{ fontSize: '16px'}}/>}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default expandableComponent;
