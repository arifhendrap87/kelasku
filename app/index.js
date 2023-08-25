import React, { useEffect, useState } from 'react'
import { store, persistor } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './navigation';
import SplashScreen from 'react-native-splash-screen';

console.disableYellowBox = true;

export default function App() {
  useEffect(() => {
    console.disableYellowBox = true;

    SplashScreen.hide();





  }, [])
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}
