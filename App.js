import React from 'react';
import {ImageBackground, StyleSheet, Text, View , Button , Linking} from 'react-native';

const image = {uri: 'https://thiepmung.com/images/theme/ngam-va-tai-hinh-nen-dep-cho-may-tinh-556444149b46f6.jpg'};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={{textAlign:'center' , marginBottom: 10 , fontSize: 20}}>Nhan de chuyen toi trang mua hang</Text>
      <Button title='Mua hang' onPress={ ()=>{ Linking.openURL('https://google.com')}} />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;