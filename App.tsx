import React, { useEffect } from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {Kashier} from 'react-native-kashier';
import { Card } from 'react-native-kashier/src/Model/Card';

export default function App() {
  useEffect(()=>{
    const ApiKey = '********-****-****-****-************';
    const merchantId = 'MID-XXXX-XXXX';
    
    
    Kashier.initialize({
        merchantId: merchantId,
        apiKey: ApiKey,
        currency: 'EGP',
        sdkMode: 'DEVELOPMENT',
        displayLang: 'EN',
      });
  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title={"Test"} onPress={()=>{
        console.log("Button Pressed")
        Kashier.saveCard(
          Card.fromExpiryMonth_Year(
            'Kashier Test Name',
            '5111111111111118',
            '100',
            '05',
            '21',
          ),
          "shopperRef",
          'perm',
          result => {
            console.log('Token Created Successfully', result);
          },
          error => {
            console.log('Error', error.errorType, error.errorMessage);
          },
        )
      }}/>
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
