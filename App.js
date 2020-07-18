import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";
import CommentScreen from "./screens/comment";
import SearchScreen from "./screens/search";

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Comment" component={CommentScreen} />
    </HomeStack.Navigator>
  );
};
const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Home" component={HomeScreen} />
    </SearchStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
