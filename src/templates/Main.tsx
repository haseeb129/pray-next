import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full">
    {props.meta}

    <div className="content">{props.children}</div>
  </div>
);

export { Main };
