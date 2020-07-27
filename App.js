import React, { Component, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";
import CommentScreen from "./screens/comment";
import SearchScreen from "./screens/search";
import FullsizeMediaScreen from "./screens/fullsizeMedia";
import { Ionicons } from "@expo/vector-icons";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Feed" component={HomeScreen} />
      <HomeStack.Screen name="Comment" component={CommentScreen} />
      <HomeStack.Screen name="Media" component={FullsizeMediaScreen} />
    </HomeStack.Navigator>
  );
};
const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Feed" component={HomeScreen} />
    </SearchStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Feed") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Feed" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    //   <WebView
    //   source={{
    //     uri:
    //       "https://www.reddit.com/api/v1/authorize?client_id=OcHJxuhDu06nCQ&response_type=code&state=tes&redirect_uri=com.testrn://oauth2redirect/reddit&duration=permanent&scope=identity",
    //   }}
    // />
  );
}
