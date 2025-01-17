import react from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import CustomButtonG from "../components/customButtonGreen";
import imageBG from "../assets/background.png";
import CustomTextInput from "../components/customTextInput";
import axiosInstance from "../libs/axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post("member/login", {
        memberEmail: email,
        password: password,
      });

      console.log("API Response:", res);

      if (res.data && res.data.message === "Berhasil login!") {
        // Assuming memberID and username are now part of the response
        const { memberID, memberName } = res.data;

        if (memberID && memberName) {
          console.log("Saving to AsyncStorage:", memberID, memberName);
          await AsyncStorage.setItem("memberID", memberID.toString());
          await AsyncStorage.setItem("username", memberName);

          navigation.navigate("home");
        } else {
          Alert.alert("Login failed", "User data missing in response.");
        }
      } else {
        Alert.alert("Login failed", "Invalid response from server.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      Alert.alert("Login failed", "An error occurred while logging in.");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
            fontSize: 36,
            paddingBottom: 10,
          }}
        >
          Login
        </Text>
        <CustomTextInput
          text={email}
          onValueChange={handleEmailChange}
          placeholder="Email"
        />
        <CustomTextInput
          text={password}
          onValueChange={handlePasswordChange}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={{ paddingTop: 50 }}>
          <CustomButtonG onPress={handleLogin} text="login" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  landingPageImage: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
});
