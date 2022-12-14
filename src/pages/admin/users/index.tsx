import ComingSoon from '@/components/comingSoon';
import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';

const users = () => {
  return (
    <MetaTagWarpper
      title="Users"
      description="Customer page description."
      canonical="this is canonical "
    >
      <DashboardHOC>
        <ComingSoon />
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default users;
