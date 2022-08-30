// import { MoreOutlined } from '@ant-design/icons';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import IconButton from '@mui/material/IconButton';
import { Dropdown, Menu, Space, Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import type { SorterResult } from 'antd/es/table/interface';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';

import { modalNames } from '../common';

export interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
  key: React.Key;
}

const optionConstants = {
  EDIT: 'Edit',
  DELETE: 'Delete',
};

const menu = (record: any, onEdit: any, onDelete: any) => (
  <Menu
    onClick={(e) => {
      if (e.key === optionConstants.EDIT)
        onEdit(record, modalNames.ADD_CUSTOMER);
      else onDelete(record);
    }}
    items={[
      { key: optionConstants.EDIT, label: optionConstants.EDIT },
      { key: optionConstants.DELETE, label: optionConstants.DELETE },
    ]}
  />
);

export const columnsGenerator = (onEdit: any, onDelete: any) => {
  const columns: ColumnsType<DataType> = [
    Table.SELECTION_COLUMN,

    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
      ellipsis: {
        showTitle: false,
      },
      width: '30%',
      render: (name: string) => `${name || '--'}`,
    },

    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: true,
      width: '20%',
      render: (genderValue: string) => `${genderValue || '--'}`,
    },
    {
      title: 'Email',
      ellipsis: true,
      dataIndex: 'email',
      render: (email: string) => `${email || '--'}`,
      colSpan: 1,
    },

    {
      width: '10%',
      render: (record) => (
        <Space size="small" style={{ float: 'right' }}>
          <Dropdown
            overlay={menu(record, onEdit, onDelete)}
            trigger={['click']}
          >
            <IconButton size="small" aria-haspopup="true">
              <MoreVertRoundedIcon fontSize="small" />
            </IconButton>
          </Dropdown>
        </Space>
      ),
    },
    Table.EXPAND_COLUMN,
  ];

  return columns;
};
export interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
  search?: string;
}
