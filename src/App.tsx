import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import APP_PATH from '~/constants/appPath';
import MainLayout from '~/layout/main-layout';
import { Toaster } from '~/core/toastify';
import { ErrorPage, HomePage } from '~/pages';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path={APP_PATH.home} element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path={APP_PATH.error} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
