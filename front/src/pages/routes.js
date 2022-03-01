import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TeacherHome from './Home/TeacherHome/TeacherHome';
import StudentHome from './Home/StudentHome/StudentHome';
import Login from './Login/login';
import TeacherRegistration from './Registration/TeacherRegistration/TeacherRegistration';
import StudentRegistration from './Registration/StudentRegistration/StudentRegistration';
import Registration from './Registration'
import StartUp from './StartUp';
import QuestionScreen from './QuestionScreen/QuestionScreen.js';
import QuestionRegistration from './QuestionRegistration/QuestionRegistration';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TeacherHome" >
                <Stack.Screen name="StartUp" component={StartUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TeacherHome" component={TeacherHome} />
                <Stack.Screen name="StudentHome" component={StudentHome} />
                <Stack.Screen name="TeacherRegistration" component={TeacherRegistration} />
                <Stack.Screen name="StudentRegistration" component={StudentRegistration} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
                <Stack.Screen name="QuestionRegistration" component={QuestionRegistration} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;