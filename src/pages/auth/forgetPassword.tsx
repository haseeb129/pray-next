import Auth from '@/containers/auth';
import { componentNames } from '@/helper/auth';
import MetaTagWarpper from '@/hoc/metaTagWarpper';
import WebHOC from '@/hoc/web';

const forgetPassword = (props: any) => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <WebHOC>
        <Auth props={props} componentName={componentNames.FORGET_PASSWORD} />
      </WebHOC>
    </MetaTagWarpper>
  );
};

export default forgetPassword;
