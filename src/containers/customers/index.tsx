import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { withRouter } from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddCustomer from '@/components/addCustomer';
import CButton from '@/components/button';
import CollapsibleTable from '@/components/collapsibleTable';
import ModalWrapper from '@/components/dialogBoxes';
import { getCustomers } from '@/redux/customers/actions';

interface IProps {}

interface IState {
  isModalOpen?: Boolean;
}

class Customers extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { getCustomers } = this.props;
    await getCustomers('users');
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  onAddCustomer = (data) => {};

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

        <CollapsibleTable />
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
    customers,
  };
};

const mapDispatchToProps = {
  getCustomers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Customers));
