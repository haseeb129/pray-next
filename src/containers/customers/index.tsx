import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import type { TablePaginationConfig } from 'antd';
import type { FilterValue, SorterResult } from 'antd/lib/table/interface';
import { withRouter } from 'next/router';
import qs from 'qs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import AddCustomer from '@/components/addCustomer';
import DataTable from '@/components/dataTable';
import ModalWrapper from '@/components/dialogBoxes';
import SeachAndButtonContainer from '@/components/seachFieldAndButton';
import { inputTypes, isValidStatus } from '@/helper/common';
import type { DataType, Params } from '@/helper/customers/customerTableHelper';
import { columns } from '@/helper/customers/customerTableHelper';
import ExpandableComponent from '@/helper/customers/helper';
import { addCustomer, getCustomers } from '@/redux/customers/actions';

interface IProps {
  addCustomer: any;
  getCustomers: any;
  customers: any;
  loading: boolean;
}

interface IState {
  isModalOpen?: Boolean;
  pagination: any;
  tempLoading: Boolean;
  data: any;
  search: '';
  selectedRecord: object;
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
      search: '',
      selectedRecord: {},
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

  onAddCustomer = async (data: object, isEditMode: boolean) => {
    const { addCustomer }: any = this.props;
    console.log('isEditMode', isEditMode);

    // const formattedData: any = {
    //   customer: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     mobilePhone: data.mobilePhone,
    //     registeredNumber: '95397443000174',
    //   },
    //   user: {
    //     name: data.name,
    //     email: data.email,
    //     username: data.email,
    //     phone: data.phone,
    //     password: '123456123',
    //   },
    // };

    const response = await addCustomer({
      ...data,
    });
    if (response.value && isValidStatus(response.value.status)) {
      // this.setState({ stats: response.value?.data?.data });
      toast.success('handleLocalSubmit');
    } else {
      toast.error('Something went wrong');
    }
    // this.setState({ isModalOpen: false });
  };

  fetchData = async (params: Params = {}) => {
    const { getCustomers }: any = this.props;
    this.setState({ tempLoading: true });
    const qParams = qs.stringify(params);
    await getCustomers(qParams);
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

  handleSearch = (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  onEdit = (record: object) => {
    console.log('On Edit record', record);
    this.setState({ selectedRecord: record }, this.toggleModal);
  };

  render(): React.ReactNode {
    const { isModalOpen } = this.state;
    return (
      <>
        <SeachAndButtonContainer
          inputType={inputTypes.SEARCH}
          inputHandleChange={this.handleSearch}
          inputValue={this.state.search}
          inputName="search"
          inputLabel="Search"
          buttonLabel={'Add Cutomer'}
          buttonIcon={<PersonAddAlt1Icon />}
          buttonOnClick={this.toggleModal}
        />
        <DataTable
          columns={columns}
          data={this?.props?.customers?.result || []}
          loading={this?.props?.loading || this.state.tempLoading || false}
          pagination={{ total: this?.props?.customers?.count }}
          onTableChange={() => {}}
          // ExpandableComponent={this.test()}
          ExpandableComponent={ExpandableComponent}
          onEdit={this.onEdit}
        />

        <ModalWrapper
          isOpen={isModalOpen}
          toggleModal={this.toggleModal}
          title="Add Customer"
          Icon={<PersonAddAlt1Icon fontSize="medium" />}
        >
          <AddCustomer
            onAddCustomer={this.onAddCustomer}
            toggleModal={this.toggleModal}
            preFilledInfo={this.state.selectedRecord}
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
