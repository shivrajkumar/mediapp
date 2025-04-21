import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TestScreen from "../screens/Main/Test";
import TestResultsScreen from "../screens/Main/TestResults";

const Stack = createStackNavigator();

const TestStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestMain" component={TestScreen} />
      <Stack.Screen name="TestResults" component={TestResultsScreen} />
    </Stack.Navigator>
  );
};

export default TestStackNavigator;
