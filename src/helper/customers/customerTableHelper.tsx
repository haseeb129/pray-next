import { Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import type { SorterResult } from 'antd/es/table/interface';
import type { ColumnsType } from 'antd/lib/table';

interface DataType {
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

export const columns: ColumnsType<DataType> = [
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
  },
  Table.EXPAND_COLUMN,
];

export interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
  search?: string;
}
