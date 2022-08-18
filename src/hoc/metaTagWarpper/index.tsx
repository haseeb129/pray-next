import * as React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

interface Props {
  title: string;
  description: string;
  canonical: string;
  children: React.ReactNode;
}

const MetaTagWarpper = ({ title, description, canonical, children }: Props) => (
  <Main
    meta={
      <Meta title={title} description={description} canonical={canonical} />
    }
  >
    {children}
  </Main>
);

export default MetaTagWarpper;
