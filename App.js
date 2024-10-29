import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Exemplo1 from './src/exemplo/ex_01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    padding: 16,
    paddingTop: Constants.statusBarHeight || 16,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});