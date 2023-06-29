import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Linking  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nhan nut de mua hang</Text>
      <Button title='Mua hang' onPress={ ()=>{ Linking.openURL('https://google.com')}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
