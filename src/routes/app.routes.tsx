import React from 'react';
import {Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false, // tira o cabeçalho
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon', // colcoar o icone ao lado
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="currency-usd"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Screen
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="chart-arc"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
}
