import Auth from '@/containers/auth';
import { componentNames } from '@/helper/auth';
import MetaTagWarpper from '@/hoc/metaTagWarpper';
import WebHOC from '@/hoc/web';

const signIn = (props: any) => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <WebHOC>
        <Auth props={props} componentName={componentNames.SIGNIN} />
      </WebHOC>
    </MetaTagWarpper>
  );
};

export default signIn;
