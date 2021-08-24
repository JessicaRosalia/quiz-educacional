import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/pages/Login/login';



 const App = () => {
   return (
      <SafeAreaView style={Style.container}>
        <Text>BASE</Text>
        <Login/>
       
     </SafeAreaView>
    
   );
 };


const Style = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    display: 'flex',
    flex:1,
  }
})



 export default App;
