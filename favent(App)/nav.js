import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Main: {
    screen: Home,
  },
};

const AuthStack = createStackNavigator(screens);
export default createAppContainer(AuthStack);

// ------------------Other way to do the same thing ----------

// const Authh = (createStackNavigator = () => {
//   <Auth.Navigator>
//     <Auth.Screen
//       name="Homee"
//       component={Signin}
//       options={{
//         gestureEnabled: false,
//       }}
//     />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//     <Auth.Screen name="Homee" component={Signin} />
//   </Auth.Navigator>;
// });
