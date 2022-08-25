import Auth from '@/components/auth/signIn';
import MetaTagWarpper from '@/hoc/metaTagWarpper';
import WebHOC from '@/hoc/web';

const about = () => {
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

export default about;
