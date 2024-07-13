import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '~/components';
import { ParticleWidget } from '~/widgets';

const MainLayout: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <ParticleWidget />
      <Footer />
    </>
  );
};

export default MainLayout;
