/*
#1A374D
#406882
#6998AB
#B1D0E0
*/
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: '#1A374D',
            },
          }}
        />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
