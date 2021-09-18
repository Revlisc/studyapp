import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import SignUpScreen from "./Screens/SignUpScreen.js";

const Stack = createStackNavigator();

function Stacks() {
  return (
<<<<<<< HEAD
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6C61EB",
        },
        headerTintColor: "#F5F8FF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
=======
    <Stack.Navigator>
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      
      <Stack.Screen name="Home" component={Tabs} />
>>>>>>> 55c1f9a9fd0ee3b912e14366353b0dc52b03e464
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
