import CollapsibleTable from '@/components/collapsibleTable';
import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';

const users = () => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <DashboardHOC>
        <CollapsibleTable />
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default users;
