import SelectionTable from '@/components/selectionTable';
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
        <SelectionTable />
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default churchs;
