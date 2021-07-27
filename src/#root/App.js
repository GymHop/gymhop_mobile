/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Toast from 'react-native-toast-message';
import {AppNavigation} from './AppNavigation';
import {AuthProvider} from '../context/useAuth';
import ErrorBoundary from '../context/useError';

const queryClient = new QueryClient();

const App = () => {

  return (
    <AuthProvider>
      <>
        <ErrorBoundary>
          <AppNavigation>
            <QueryClientProvider client={queryClient}>
            </QueryClientProvider>
          </AppNavigation>
        </ErrorBoundary>
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    </AuthProvider>
  );
};

export default App;
