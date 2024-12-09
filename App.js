import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import splashScreen from "./Page/splashScreen";
import landingPage from "./Page/landingPage";
import login from "./Page/login";
import register from "./Page/register";
import productDetail from "./Page/productDetail";
import home from "./Page/home";
import productRecomendation from "./Page/productRecommendation";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        {/* Replace 'home' with TabController */}
        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productDetail"
          component={productDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="productRecomendation"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function TabNavigator() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="home" component={home} />
        {/* <Tab.Screen name="User Health" component={UserHealthScreen} /> */}
        <Tab.Screen
          name="Product Recommendation"
          component={productRecomendation}
        />
      </Tab.Navigator>
    );
  }
};

export default App;
