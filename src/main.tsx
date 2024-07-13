import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import '~/index.css';
import App from '~/App.tsx';
import i18n from '~/localization/i18n.ts';
import { store } from '~/app/store';

// TODO: RESPONSIVE

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </ReduxProvider>
);
