import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './src/pages/Home/home';




 const App = () => {
   return (
      <SafeAreaView style={Style.container}>
      <Home/>
       
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
