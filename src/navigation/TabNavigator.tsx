import React, {useEffect, useRef} from "react";
import {View, Dimensions, Animated, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

// Import screens
import HomeScreen from "../screens/Main/Home";
import VideosScreen from "../screens/Main/Videos";
import ProfileScreen from "../screens/Main/Profile";
import TestScreen from "../screens/Main/Test";
import TestResultsScreen from "../screens/Main/TestResults";
import VideoPlayerScreen from "../screens/Main/VideoPlayer";
import AllProductsScreen from "../screens/Main/AllProducts";
import {CartProvider} from "../context/CartContext";
import CartScreen from "../screens/Main/Cart";
import {colors} from "../utils/color";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigators for each tab
const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{headerShown: false, tabBarVisible: false}} />
  </Stack.Navigator>
);

const TestStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="TestMain" component={TestScreen} />
    <Stack.Screen name="TestResults" component={TestResultsScreen} />
  </Stack.Navigator>
);

const VideosStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="VideosMain" component={VideosScreen} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen}  />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ProfileMain" component={ProfileScreen} />
    <Stack.Screen name="Test" component={TestScreen} />
    <Stack.Screen name="TestResults" component={TestResultsScreen} />
    <Stack.Screen
      name="AllProducts"
      component={AllProductsScreen}
      options={{
        headerShown: false,
        tabBarVisible: false,
      }}
    />
    <Stack.Screen
      name="Cart"
      component={CartScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

// Main Tab Navigator
const TabNavigator = () => {
  // Create animated value for the background position
  const tabAnimatedValue = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get("window");
  const tabWidth = width / 4; // 4 tabs

  // Function to animate the background
  const animateTab = (index: number) => {
    Animated.spring(tabAnimatedValue, {
      toValue: index * tabWidth,
      useNativeDriver: true,
      friction: 8,
      tension: 50,
    }).start();
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                fontSize: 10,
                color: color,
                fontWeight: focused ? 800 : 300,
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Test") {
            iconName = focused
              ? "clipboard-search"
              : "clipboard-search-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Videos") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "user-circle" : "user-circle-o";
            return <FontAwesome name={iconName} size={size} color={color} />;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#B7D446",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          position: "relative",
          backgroundColor: colors.tertiary,
        },
        tabBarBackground: () => (
          <View style={{flex: 1, position: "relative"}}>
            <Animated.View
              style={{
                position: "absolute",
                width: tabWidth,
                height: 60,
                backgroundColor: "rgba(183, 212, 70, 0.15)",
                borderRadius: 20,
                bottom: 0,
                transform: [{translateX: tabAnimatedValue}],
              }}
            />
          </View>
        ),
      })}
      screenListeners={({navigation}) => ({
        state: (e) => {
          // Get the current tab index and animate to it
          const index = navigation.getState().index;
          animateTab(index);
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Test" component={TestStack} />
      <Tab.Screen name="Videos" component={VideosStack} />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({route}) => {
          // Get the name of the active screen in the Profile stack
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";

          // Hide the tab bar when on the AllProducts or Cart screen
          return {
            tabBarStyle: {
              display:
                routeName === "AllProducts" || routeName === "Cart"
                  ? "none"
                  : "flex",
              paddingBottom: 5,
              height: 60,
              position: "relative",
              backgroundColor: colors.tertiary,
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
