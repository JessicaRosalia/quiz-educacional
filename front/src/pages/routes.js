import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home/home';
import Login from './Login/login';
import Registration from './Registration/registration';
import StudentRegistration from './Teacher/Registration/StudentRegistration';

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CadastroEstudante">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={Registration}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CadastroEstudante" component={StudentRegistration}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;