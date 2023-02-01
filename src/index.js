import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from 'react-query'
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import viVN from 'antd/locale/vi_VN';
import { ConfigProvider } from 'antd';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <Provider store={store}>
        <GlobalStyles>
            <QueryClientProvider client={queryClient}>
                <ConfigProvider
                    locale={viVN}
                    theme={{
                        token: {
                            colorPrimary: '#005BAA',
                        },
                    }}
                >
                    <App />
                </ConfigProvider>
            </QueryClientProvider>
        </GlobalStyles>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
