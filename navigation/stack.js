import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Comment from "../screens/comment";

const Screens = {
  Home: {
    screen: Home,
  },
  Comment: {
    screen: Comment,
  },
};

const stack = createStackNavigator(Screens);
export default stack;
