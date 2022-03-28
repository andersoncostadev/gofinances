import React from 'react';
import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';

import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
