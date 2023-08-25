import { AppRegistry } from 'react-native';
import App from './app/index'; // Ganti dengan jalur komponen utama aplikasi Anda
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;