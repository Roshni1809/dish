import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const client = new ApolloClient({
  uri: 'https://dishmodule.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(true)
});


Sentry.init({
  dsn: "https://47baa130b3384af58b6e18b79d84965c@o1322323.ingest.sentry.io/6579440",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
