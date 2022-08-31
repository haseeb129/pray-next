import ComingSoon from '@/components/comingSoon';
import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';

const churchs = () => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <DashboardHOC>
        <ComingSoon />
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default churchs;
