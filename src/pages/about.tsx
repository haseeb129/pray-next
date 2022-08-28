import MetaTagWarpper from '@/hoc/metaTagWarpper';
import WebHOC from '@/hoc/web';
import Auth from '@/components/auth';

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
