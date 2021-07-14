import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Varify from "./pages/ForgetPass/varify";
import Validate from "./pages/ForgetPass/validate";
import Reset from "./pages/ForgetPass/reset";
import Home from "./pages/home";

const pages = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  Varify: {
    screen: Varify,
  },
  Validate: {
    screen: Validate,
  },
  Reset: {
    screen: Reset,
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const Nav = createStackNavigator(pages);
export default createAppContainer(Nav);

//Used for navigation
