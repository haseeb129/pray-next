import ComingSoon from '@/components/comingSoon';
import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';

const ministers = () => {
  return (
    <MetaTagWarpper
      title="Ministers"
      description="Customer page description."
      canonical="this is canonical "
    >
      <DashboardHOC>
        <ComingSoon />
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default ministers;
