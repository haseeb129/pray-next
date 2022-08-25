import Auth from '@/containers/auth';
import { componentNames } from '@/helper/auth';
import MetaTagWarpper from '@/hoc/metaTagWarpper';
import WebHOC from '@/hoc/web';

const signUp = (props: any) => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <WebHOC>
        <Auth props={props} componentName={componentNames.SIGNUP} />
      </WebHOC>
    </MetaTagWarpper>
  );
};

export default signUp;
