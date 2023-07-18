import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';
import {SearchContextProvider} from './contexts/SearchContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <QueryClientProvider client={queryClient}>
          <RootStack />
        </QueryClientProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
