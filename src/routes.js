import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default Routes;