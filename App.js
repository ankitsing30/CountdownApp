import React from 'react';
import { LogBox } from 'react-native';
import CountDown from './src/screens/CountDown';

LogBox.ignoreAllLogs();

const App = () => {
  return <CountDown />;
};

export default App;
