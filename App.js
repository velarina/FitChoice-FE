import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ioncons, Ionicons } from "@expo/vector-icons";
import { Image, View } from "react-native";

import splashScreen from "./Page/splashScreen";
import landingPage from "./Page/landingPage";
import login from "./Page/login";
import register from "./Page/register";
import productDetail from "./Page/productDetail";
import home from "./Page/home";
import productRecomendation from "./Page/productRecommendation";
import userHealth from "./Page/userHealth";
import healthIssueDetail from "./Page/healthIssueDetail";
import { ImageBackground } from "react-native";

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
        <Stack.Screen
          name="userHealth"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="healthIssueDetail"
          component={healthIssueDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 24,
            marginHorizontal: 70,
            elevation: 0,
            backgroundColor: "#47663B",
            borderRadius: 32,
            height: 72,
            width: "64%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: 24,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: focused ? 56 : 24,
                  height: focused ? 56 : 24,
                  borderRadius: focused ? 50 : 0,
                  backgroundColor: focused ? "#E8ECD7" : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("./assets/homeFocussed.png")
                      : require("./assets/home.png")
                  }
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="Product Recommendation"
          component={productRecomendation}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: focused ? 56 : 24,
                  height: focused ? 56 : 24,
                  borderRadius: focused ? 50 : 0,
                  backgroundColor: focused ? "#E8ECD7" : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("./assets/recFocussed.png")
                      : require("./assets/rec.png")
                  }
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name="User Health"
          component={userHealth}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: focused ? 56 : 24,
                  height: focused ? 56 : 24,
                  borderRadius: focused ? 50 : 0,
                  backgroundColor: focused ? "#E8ECD7" : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={
                    focused
                      ? require("./assets/userFocussed.png")
                      : require("./assets/user.png")
                  }
                  style={{ width: 24, height: 24 }}
                />
              </View>
            ),
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
    );
  }
};

export default App;
