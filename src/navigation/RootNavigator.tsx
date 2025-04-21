import React from "react";
import {ActivityIndicator, View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {useAuth} from "../context/AuthContext";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import {CartProvider} from "../context/CartContext";
import {colors} from "../utils/color";

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {isAuthenticated, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <CartProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </CartProvider>
  );
};

export default RootNavigator;
