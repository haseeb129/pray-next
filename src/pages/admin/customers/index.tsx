import type { NextPage } from 'next';

import Customers from '@/containers/customers';
import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';
import { handleAuthSSR } from '@/utils/auth';

const customers: NextPage = () => {
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

customers.getInitialProps = async (ctx) => {
  // Must validate JWT
  // If the JWT is invalid it must redirect back to the main page.
  // You can do that with Router from 'next/router
  await handleAuthSSR(ctx);
  return {};
};

export default customers;
