import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import SignUpScreen from "./Screens/SignUpScreen.js";
import store from "./redux/configureStore.js";
import { Provider } from "react-redux";



const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6C61EB",
        },
        headerTintColor: "#F5F8FF",
        headerTitleStyle: "bold",
      }}
    >
      <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />

      <Stack.Screen name="Main" component={Tabs} />
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    userInfo: state.user.userInfo,
    userData: state.userData.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (values) => dispatch(setUserInfo(values)),
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </Provider>
  );
}
