import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Login/signup";
import Varify from "./Pages/Login/forgetPass1";
import Validate from "./Pages/Login/forgetPass2";
import Reset from "./Pages/Login/forgetPass3";
import Home from "./Pages/Home/home";

const pages = {
  Signin: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },

  Sinup: {
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
};

const Nav = createStackNavigator(pages);
export default createAppContainer(Nav);

//Used for navigation
