/*
color pallete
    primary: "#5E503F",
    secondary: "#826A5C",
    accent: "#EAE0D5",
    neutral: "#22333B",
    "base-100": "#f1f1f1",
    fonts: "#0A0908"
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Name } from './screens/Name';
import { Email } from './screens/Email';
import { Phone } from './screens/Phone';
import { About } from './screens/About';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: '#5E503F',
            },
          }}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#5E503F',
            },
          }}
          name="Name"
          component={Name}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#5E503F',
            },
          }}
          name="Email"
          component={Email}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#5E503F',
            },
          }}
          name="Phone"
          component={Phone}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#5E503F',
            },
          }}
          name="About"
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
