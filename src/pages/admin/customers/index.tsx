import Customers from '@/containers/customers';
import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';

const customers = () => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <DashboardHOC>
        <Customers />
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default customers;
