import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Main from "./pages/main";
import Login from "./pages/login";
import Signup from "./pages/signup";

const screen = {
  Home: {
    screen: Main,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
};

const Home = createStackNavigator(screen);
export default createAppContainer(Home);

//Stack Navigator
