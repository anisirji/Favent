import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginWizard from "../Pages/Login/mainLogin";
import ForgetPass1 from "../Pages/Login/forgetPass1";
import ForgetPass2 from "../Pages/Login/forgetPass2";
import ForgetPass3 from "../Pages/Login/forgetPass3";
import AddQualification from "../Pages//Login/addQualification";
import AddworkExp from "../Pages//Login/addWorkexp";

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginWizard} />
    <LoginStack.Screen name="ForgetPass1" component={ForgetPass1} />
    <LoginStack.Screen name="ForgetPass2" component={ForgetPass2} />
    <LoginStack.Screen name="ForgetPass3" component={ForgetPass3} />
    <LoginStack.Screen name="AddQualification" component={AddQualification} />
    <LoginStack.Screen name="AddworkExp" component={AddworkExp} />
  </LoginStack.Navigator>
);

export default LoginStackScreen;
