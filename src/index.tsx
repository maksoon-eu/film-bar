import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./store/store";
import * as serviceWorkerRegistration from './serviceWorker/serviceWorkerRegistration';

import App from './components/app/App';
import ErrorBoundary from './shared/errorBoundary/ErrorBoundary';

import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>
);

serviceWorkerRegistration.register();
