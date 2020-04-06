import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = createStackNavigator();

import Inns from './pages/Inns';
import InnDetails from './pages/InnDetails';

export default function Routes(){
    return(
      <NavigationContainer>

        <AppStack.Navigator screenOptions={{headerShown: false}}>
            <AppStack.Screen name="Inns" component={Inns} />
            <AppStack.Screen name="InnDetails" component={InnDetails} />
        </AppStack.Navigator>

      </NavigationContainer>  
    );
}