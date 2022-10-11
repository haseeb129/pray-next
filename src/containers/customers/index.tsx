import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import type { TablePaginationConfig } from "antd";
import type { FilterValue, SorterResult } from "antd/lib/table/interface";
import _ from "lodash";
import { withRouter } from "next/router";
import qs from "qs";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import AddCustomer from "@/components/addCustomer";
import DataTable from "@/components/dataTable";
import { getModal } from "@/components/dialogBoxes";
import DeleteDialog from "@/components/dialogBoxes/deleteDialog";
import SeachAndButtonContainer from "@/components/seachFieldAndButton";
import { inputTypes, isValidStatus, modalNames, orderConstants } from "@/helper/common";
import { DataType, filterByValue, Params } from "@/helper/customers/customerTableHelper";
import { columnsGenerator } from "@/helper/customers/customerTableHelper";
import ExpandableComponent from "@/helper/customers/helper";
import {
  addCustomer,
  deleteCustomer,
  editCustomer,
  getCustomers,
} from "@/redux/customers/actions";

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
  search: "";
  selectedRecord: any;
  modalName: string;
  cutomersRecords: any;
  sortOptions: any;
}

class Customers extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalName: "",
      pagination: {
        current: 1,
        pageSize: 5,
      },
      tempLoading: false,
      data: null,
      search: "",
      selectedRecord: {},
      cutomersRecords: props?.customers?.result,
      sortOptions: {},
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if (this.props?.customers?.result !== nextProps?.customers?.result) {
      this.setState({ cutomersRecords: nextProps?.customers?.result });
    }
  }

  async componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { getCustomers }: any = this.props;
    await getCustomers();
    // console.log('response', response);
    // this.fetchData(this.state.pagination);
  }

  toggleModal = (selectedRecord = {}, modalName = "") => {
    const { isModalOpen } = this.state;
    this.setState({
      selectedRecord,
      isModalOpen: !isModalOpen,
      modalName,
    });
  };

  onAddCustomer = async (data: object, isEditMode: boolean = false) => {
    const { addCustomer, editCustomer, getCustomers }: any = this.props;
    const { selectedRecord }: any = this.state;

    const formattedData: any = {
      customer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        mobilePhone: data.mobilePhone,
        registeredNumber: "95397443000174",
      },
      user: {
        name: data.name,
        email: data.email,
        username: data.email,
        phone: data.phone,
        password: "123456123",
      },
    };

    let response = null;
    if (isEditMode) {
      response = await editCustomer(
        {
          customer:{...formattedData?.customer},
        },
        selectedRecord?.id
      );
    } else {
      response = await addCustomer({
        ...formattedData,
      });
    }

    if (response.value && isValidStatus(response.value.status)) {
      toast.success(
        isEditMode
          ? "Customer Edit Successfully"
          : "Customer added Successfully"
      );
      this.toggleModal();
      await getCustomers();
    } else {
      toast.error("Something went wrong");
    }
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

  

  onSearchButtonClick = () => {
    const filteredArray = filterByValue(
      this?.props?.customers?.result,
      this.state.search
    );
    this.setState({ cutomersRecords: filteredArray },()=>this.onTableChange());

  };

  onDeleteClick = (record: object) => {
    this.toggleModal(record, modalNames.DELETE_CONFIRMATION);
  };

  onDeleteConfirm = async () => {
    const { deleteCustomer, getCustomers }: any = this.props;
    const { selectedRecord } = this.state;
    const response = await deleteCustomer(selectedRecord?.id);

    if (response.value && isValidStatus(response.value.status)) {
      toast.success("Customer Deleted Successfully ");
      this.toggleModal();
      await getCustomers();
    } else {
      toast.error("Something went wrong");
    }
  };

  getModalProps = () => {
    switch (this.state.modalName) {
      case modalNames.ADD_CUSTOMER:
        return {
          isOpen: this.state.isModalOpen,
          toggleModal: () => this.toggleModal(),
          title: "Add Customer",
          Icon: <PersonAddAlt1Icon fontSize="medium" />,
          childernComponent: (
            <AddCustomer
              onAddCustomer={this.onAddCustomer}
              toggleModal={this.toggleModal}
              preFilledInfo={{ ...this.state.selectedRecord }}
            />
          ),
        };

      case modalNames.DELETE_CONFIRMATION:
        return {
          isOpen: this.state.isModalOpen,
          toggleModal: () => this.toggleModal(),
          title: "Delete",
          childernComponent: (
            <DeleteDialog
              confirmFunction={this.onDeleteConfirm}
              toggleModal={this.toggleModal}
            />
          ),
        };

      default:
        return {};
    }
  };

  onTableChange = (params: any={}) => {
    const { cutomersRecords, sortOptions } = this.state;
    let updatedSortOptions = { ...sortOptions };
    if (params?.sortOrder === undefined) {
      delete updatedSortOptions[params?.sortField];
    } else {
      updatedSortOptions = {
        ...sortOptions,
        [params?.sortField]: params?.sortOrder,
      };
    }
  

    const orderArray = Object.values(updatedSortOptions).map(
      (item) => orderConstants[item]
    );

    const orderedData = _.orderBy(
      cutomersRecords,
      Object.keys(updatedSortOptions),
      orderArray
    );
    this.setState({ sortOptions: updatedSortOptions ,
      cutomersRecords:orderedData
    });
  };
  
  
  render(): React.ReactNode {
    const { isModalOpen, modalName } = this.state;
    return (
      <>
        <SeachAndButtonContainer
          inputType={inputTypes.SEARCH}
          inputHandleChange={this.handleSearch}
          inputValue={this.state.search}
          inputName="search"
          inputLabel="Search"
          buttonLabel={"Add Cutomer"}
          buttonIcon={<PersonAddAlt1Icon />}
          buttonOnClick={() => this.toggleModal({}, modalNames.ADD_CUSTOMER)}
          onSearchButtonClick={this.onSearchButtonClick}
        />
        <DataTable
          columns={columnsGenerator(this.toggleModal, this.onDeleteClick)}
          data={this?.state?.cutomersRecords || []}
          loading={this?.props?.loading || this.state.tempLoading || false}
          pagination={{ total: this?.props?.customers?.count ,pageSize:5}}
          onTableChange={this.onTableChange}
          ExpandableComponent={ExpandableComponent}
          onEdit={this.toggleModal}
        />

        {isModalOpen && !_.isEmpty(modalName) && getModal(this.getModalProps)}
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
  editCustomer,
  deleteCustomer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Customers));
