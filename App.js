import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
      >
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen }
        />
        <Stack.Screen 
          name="Search"
          options={{ 
            title: 'Business Search' 
          }}
          component={ SearchScreen } 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;