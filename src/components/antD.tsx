import './index.module.css';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: ColumnsType<DataType> = [
  Table.SELECTION_COLUMN,
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  Table.EXPAND_COLUMN,
];

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
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

const App: React.FC = () => {
  const onSelectRowTest = (obj) => {
    console.log('obj', obj);
  };

  const onSelectRowALLTest = (obj) => {
    console.log('objALL', obj);
  };
  const onSelectRowInvertTest = (obj) => {
    console.log('objALLInvert', obj);
  };

  const onSelectRowMulTest = (obj) => {
    console.log('objMUL', obj);
  };

  return (
    <Table
      columns={columns}
      rowSelection={{
        onSelect: onSelectRowTest,
        onSelectAll: onSelectRowALLTest,
        onSelectInvert: onSelectRowInvertTest,
        onSelectMultiple: onSelectRowMulTest,
      }}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
      }}
      dataSource={data}
    />
  );
};

export default App;
