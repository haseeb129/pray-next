import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import type { TablePaginationConfig } from 'antd';
import type { FilterValue, SorterResult } from 'antd/lib/table/interface';
import { withRouter } from 'next/router';
import qs from 'qs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import AddCustomer from '@/components/addCustomer';
import CButton from '@/components/button';
import DataTable from '@/components/dataTable';
import ModalWrapper from '@/components/dialogBoxes';
import { isValidStatus } from '@/helper/common';
import type { Params } from '@/helper/customers/customerTableHelper';
import { columns } from '@/helper/customers/customerTableHelper';
import { addCustomer, getCustomers } from '@/redux/customers/actions';

interface IProps {
  addCustomer: any;
  getCustomers: any;
  customers: any;
}

interface IState {
  isModalOpen?: Boolean;
  pagination: any;
  tempLoading: Boolean;
  data: any;
}

class Customers extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isModalOpen: false,
      pagination: {
        current: 1,
        pageSize: 10,
      },
      tempLoading: false,
      data: null,
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { getCustomers }: any = this.props;
    const response = await getCustomers();
    console.log('response', response);
    // this.fetchData(this.state.pagination);
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  onAddCustomer = async (data: object) => {
    console.log('onAddCustomer', data);
    const { addCustomer } = this.props;
    const response = await addCustomer({
      ...data,
    });
    if (response.value && isValidStatus(response.value.status)) {
      // this.setState({ stats: response.value?.data?.data });
      toast.success('handleLocalSubmit');
    } else {
      toast.error('Something went wrong');
    }
  };

  fetchData = async (params: Params = {}) => {
    const { getCustomers } = this.props;
    this.setState({ tempLoading: true });
    const q_params = qs.stringify(params);
    await getCustomers(q_params);
    this.setState({ tempLoading: false });
  };

  handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    this.fetchData({
      sortField: sorter.field as string,
      sortOrder: sorter.order as string,
      pagination: newPagination,
      ...filters,
    });
  };

  render(): React.ReactNode {
    const { isModalOpen } = this.state;
    return (
      <>
        <CButton
          label={'Add Cutomer'}
          outline={true}
          icon={<PersonAddAlt1Icon />}
          variant="outlined"
          onClick={this.toggleModal}
        />
        <DataTable
          columns={columns}
          data={this?.props?.customers?.result || []}
          loading={this?.props?.loading || this.state.tempLoading || false}
          pagination={{ total: this?.props?.customers?.count }}
          onTableChange={() => {}}
          // ExpandableComponent={this.test()}
          ExpandableComponent={<PersonAddAlt1Icon fontSize="medium" />}
          onEdit={(record) => {
            console.log('On Edit record', record);
          }}
        />

        {/* <AntD /> */}
        {/* <CollapsibleTable /> */}
        <ModalWrapper
          isOpen={isModalOpen}
          toggleModal={this.toggleModal}
          title="Add Customer"
          Icon={<PersonAddAlt1Icon fontSize="medium" />}
        >
          <AddCustomer
            onAddCustomer={this.onAddCustomer}
            toggleModal={this.toggleModal}
          />
        </ModalWrapper>
      </>
    );
  }
}

const mapStateToProps = ({ customers }: any) => {
  return {
    customers: customers.customers,
    loading: customers.loadinb,
  };
};

const mapDispatchToProps = {
  getCustomers,
  addCustomer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Customers));
