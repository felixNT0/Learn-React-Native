/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {QueryClient, QueryClientProvider} from 'react-query';
import AppProvider from './src/contexts/AuthContext';
import Routes from './src/routes/Index';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
