/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Preload from '../screens/Preload';
import {StatusBar} from 'react-native';
import {Icon, useTheme} from '@rneui/themed';
import Alunos from '../screens/Alunos';
import Aluno from '../screens/Aluno';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AppStack() {
  const {theme} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Alunos"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Alunos"
        component={Alunos}
        options={{
          tabBarLabel: 'Alunos',
          tabBarIcon: () => (
            <Icon
              type="ionicon"
              name="people"
              color={
                theme.mode === 'light'
                  ? theme.colors.primary
                  : theme.colors.black
              }
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  const {theme} = useTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.colors.primaryDark} />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="Aluno" component={Aluno} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
