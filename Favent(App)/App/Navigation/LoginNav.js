import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForgetPass1 from "../Pages/Login/forgetPass1";
import ForgetPass2 from "../Pages/Login/forgetPass2";
import ForgetPass3 from "../Pages/Login/forgetPass3";
import AddQualification from "../Pages//Login/addQualification";
import AddworkExp from "../Pages//Login/addWorkexp";
import Details from "../Pages/Login/details";
import Login from "../Pages/Login/login";
import Resume from "../Pages/Login/resume";
import Signup from "../Pages/Login/signup";
import WorkExp from "../Pages/Login/workExp";
import Qualification from "../Pages/Login/qualification";
import SkillsAndIndustries from "../Pages/Login/skillsandIndustries";

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen name="ForgetPass1" component={ForgetPass1} />
    <LoginStack.Screen name="ForgetPass2" component={ForgetPass2} />
    <LoginStack.Screen name="ForgetPass3" component={ForgetPass3} />
    <LoginStack.Screen name="Signup" component={Signup} />
    <LoginStack.Screen name="Details" component={Details} />
    <LoginStack.Screen
      name="SkillAndIndustry"
      component={SkillsAndIndustries}
    />
    <LoginStack.Screen name="Qualification" component={Qualification} />
    <LoginStack.Screen name="AddQualification" component={AddQualification} />
    <LoginStack.Screen name="WorkExp" from component={WorkExp} />
    <LoginStack.Screen name="AddworkExp" component={AddworkExp} />
    <LoginStack.Screen name="Resume" component={Resume} />
  </LoginStack.Navigator>
);

export default LoginStackScreen;
