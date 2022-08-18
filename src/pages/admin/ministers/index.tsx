import Button from '@material-ui/core/Button';

import DashboardHOC from '@/hoc/dashboard';
import MetaTagWarpper from '@/hoc/metaTagWarpper';

const ministers = () => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <DashboardHOC>
        <Button color="primary" variant="contained">
          Click Me
        </Button>
      </DashboardHOC>
    </MetaTagWarpper>
  );
};

export default ministers;
