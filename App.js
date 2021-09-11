import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";

const Stack = createStackNavigator();
<<<<<<< HEAD
=======
//Dale made a comment!!!!!!!!
//totally new comment at 5:53 pm
//stuff/
//stuff

//another new comment made at 5:58
//new comment at 224
//
//


//stuff
//new stuff
//testing
//do stuff
//editing this feature
>>>>>>> dc14396b0f0f0b2abb296bc9f25bb5c751ac4eb1

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}
