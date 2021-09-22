import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import ProfileScreen from "./Screens/ProfileScreen.js";
import SignUpScreen from "./Screens/SignUpScreen.js";
import EditSetScreen from "./Screens/EditSetScreen.js";
import EditQuestionScreen from "./Screens/EditQuestionScreen.js";
import store from "./redux/configureStore.js";
import { Provider } from "react-redux";
import ReviewScreen from "./Screens/ReviewScreen.js";

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

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditSet" component={EditSetScreen} />
      <Stack.Screen name="EditQuestion" component={EditQuestionScreen} />
      <Stack.Screen name='ReviewScreen' component={ReviewScreen} />
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
