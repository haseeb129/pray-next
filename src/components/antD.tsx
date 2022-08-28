import { Table } from 'antd';
import type {
  ColumnsType,
  ColumnsType,
  TablePaginationConfig,
} from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
//   description: string;
// }

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

const columns: ColumnsType<DataType> = [
  Table.SELECTION_COLUMN,

  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   key: 'name',

  //   sortDirections: ['ascend', 'descend', 'ascend'],
  //   ellipsis: {
  //     showTitle: false,
  //   },
  //   render: (name) => (
  //     <Tooltip placement="topLeft" title={name}>
  //       {name}
  //     </Tooltip>
  //   ),
  // },

  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    sortDirections: ['ascend', 'descend', 'ascend'],
    ellipsis: {
      showTitle: false,
    },
    width: '20%',
    render: (name) => `${name.first} ${name.last}`,
    // render: name => `${name.first} ${name.last}`,
  },

  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: true,
    width: '20%',
    render: (genderValue) => `${genderValue}`,
  },
  { title: 'Email', ellipsis: true, dataIndex: 'email' },
  // { title: 'Age', dataIndex: 'age', key: 'age', ellipsis: true },
  // { title: 'Address', dataIndex: 'address', key: 'address', ellipsis: true },
  Table.EXPAND_COLUMN,
];

interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sortOrder?: string;
}

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown John Brownv John Brown John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
  {
    key: 1,
    name: 'John Brown John Brownv John Brown John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
  {
    key: 1,
    name: 'John Brown John Brownv John Brown John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

const getRandomuserParams = (params: Params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App: React.FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  // const onSelectRowTest = (obj) => {
  //   console.log('obj', obj);
  // };

  // const onSelectRowALLTest = (obj) => {
  //   console.log('objALL', obj);
  // };
  // const onSelectRowInvertTest = (obj) => {
  //   console.log('objALLInvert', obj);
  // };

  // const onSelectRowMulTest = (obj) => {
  //   console.log('objMUL', obj);
  // };

  // const handleChange: TableProps<DataType>['onChange'] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   ...args
  // ) => {
  //   console.log('Various parameters', pagination, filters, sorter);
  //   console.log('arguments', args);
  // };

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    fetchData({
      sortField: sorter.field as string,
      sortOrder: sorter.order as string,
      pagination: newPagination,
      ...filters,
    });
  };

  const fetchData = (params: Params = {}) => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200,
        });
      });
  };

  useEffect(() => {
    fetchData({ pagination });
  }, []);
  return (
    <Table
      rowKey={(record) => record.login.uuid}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
      columns={columns}
      // onChange={handleChange}
      // rowSelection={{
      //   onSelect: onSelectRowTest,
      //   onSelectAll: onSelectRowALLTest,
      //   onSelectInvert: onSelectRowInvertTest,
      //   onSelectMultiple: onSelectRowMulTest,
      // }}
      rowSelection={{
        onSelect: () => {},
      }}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record?.location?.city}</p>
        ),
      }}
      dataSource={data}
    />
  );
};

export default App;
