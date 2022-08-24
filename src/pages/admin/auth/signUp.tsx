import Auth from '@/components/auth';
import MetaTagWarpper from '@/hoc/metaTagWarpper';
import WebHOC from '@/hoc/web';

const signUp = () => {
  return (
    <MetaTagWarpper
      title="Customer page"
      description="Customer page description."
      canonical="this is canonical "
    >
      <WebHOC>
        <Auth />
      </WebHOC>
    </MetaTagWarpper>
  );
};

export default signUp;