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
import axiosInstance from "../libs/axios";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleClick = async () => {
    await axiosInstance
      .post("member", {
        memberName: username,
        memberEmail: email,
        password: password,
        age: age,
        gender: gender,
      })
      .then((res) => {
        console.log(res.data);
        navigation.navigate("login");
      })
      .catch((error) => console.error(error));
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
            secureTextEntry={true}
          />
          <CustomTextInputDate
            text={age}
            onValueChange={setAge}
            placeholder="Birth Date"
          />
          <CustomTextInputDropDown
            value={gender}
            onChange={setGender}
            placeholder="Select Gender"
          />
        </View>
        <View style={{ paddingTop: 50 }}>
          <CustomButtonG onPress={handleClick} text="Login" />
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
