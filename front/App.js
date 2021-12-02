import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/pages/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();


 const App = () => {
   return (
      <SafeAreaView style={Style.container}>
        <Routes/>
     </SafeAreaView>
    
   )
 };


const Style = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    display: 'flex',
    flex:1,
  }
})



 export default App;
