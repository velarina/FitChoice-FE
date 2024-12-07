import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import splashScreen from "./Page/splashScreen";
import landingPage from "./Page/landingPage";
import login from "./Page/login";
import register from "./Page/register";
import home from "./Page/home";
// import ProductDetail from "./Page/productDetail";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splashScreen"
          component={splashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="landingPage"
          component={landingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={home}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="productDetail"
          component={productDetail}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
