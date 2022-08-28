import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import _ from 'lodash';
import * as React from 'react';

import CButton from '@/components/button';

export interface CustomerReducer {
  customers: {};
  loading: boolean;
}

const expandableComponent = ({ data, onEdit }) => {
  const simpleTableRow = (name: string, value: any) => (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{_.isEmpty(value) ? '--' : value}</TableCell>
    </TableRow>
  );

  return (
    <Box sx={{ margin: 1 }}>
      <Table size="small" aria-label="purchases">
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
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default expandableComponent;
