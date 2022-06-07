import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={'light'} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
