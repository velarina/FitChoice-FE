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
import CustomTextInputDate from "../components/customTextInputDate";
import CustomTextInputDropDown from "../components/customTextInputDropDown";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

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
          Register
        </Text>
        <View style={{ paddingTop: 50 }}>
          <CustomTextInput
            text={username}
            onValueChange={setUsername}
            placeholder="Username"
          />
          <CustomTextInput
            text={email}
            onValueChange={setEmail}
            placeholder="Email"
          />
          <CustomTextInput
            text={password}
            onValueChange={setPassword}
            placeholder="Password"
            secureTextEntry={true} // Hide password input
          />
          <CustomTextInputDate
            text={birthDate}
            onValueChange={setBirthDate}
            placeholder="Birth Date"
          />
          <CustomTextInputDropDown
            value={gender}
            onChange={setGender}
            placeholder="Select Gender"
          />
        </View>
        <View style={{ paddingTop: 50 }}>
          <CustomButtonG
            onPress={() => navigation.navigate("login")}
            text="Login"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

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
