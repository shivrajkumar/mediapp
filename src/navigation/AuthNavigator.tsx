import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import PhoneNumberScreen from "../screens/Auth/PhoneNumber";
import OTPVerificationScreen from "../screens/Auth/OTPVerification";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="PhoneNumber"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
