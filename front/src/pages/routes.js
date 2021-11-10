import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home/home';
import Login from './Login/login';
import Registration from './Registration/registration';

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={Registration}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;