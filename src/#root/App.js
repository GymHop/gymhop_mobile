/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {QueryClient, QueryClientProvider} from 'react-query';

import {AppNavigation} from './AppNavigation';
import {AuthProvider} from '../context/useAuth';
import ErrorBoundary from '../context/useError';
import React from 'react';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

const App = () => {
  return (
    <AuthProvider>
      <>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <AppNavigation></AppNavigation>
          </QueryClientProvider>
        </ErrorBoundary>
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    </AuthProvider>
  );
};

export default App;
