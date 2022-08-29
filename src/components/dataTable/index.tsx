import { Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import React from 'react';

import type { CommonTableProps } from '@/helper/common';

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
  registeredNumber: string;
}

const DataTable: any = ({
  data,
  loading,
  pagination,
  onTableChange,
  columns,
  onEdit,
  ExpandableComponent,
}: CommonTableProps) => {
  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    onTableChange({
      sortField: sorter.field as string,
      sortOrder: sorter.order as string,
      pagination: newPagination,
      ...filters,
    });
  };

  return (
    <Table
      className="mt-5"
      rowKey={(record) => record?.registeredNumber}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
      columns={columns}
      rowSelection={{
        onSelect: () => {},
      }}
      expandable={{
        expandedRowRender: (record) => (
          <ExpandableComponent
            data={record}
            onEdit={() => onEdit({ ...record })}
          />
        ),
      }}
      dataSource={data}
    />
  );
};

export default DataTable;
