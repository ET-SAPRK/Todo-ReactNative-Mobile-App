import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './components/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:  "#332424",
    padding: 20,
    paddingBottom: 0,
    flex: 1
  },
});
