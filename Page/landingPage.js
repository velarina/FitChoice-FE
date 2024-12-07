import react from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
} from "react-native";

import CustomButtonG from "../components/customButtonGreen";
import CustomButtonW from "../components/customButtonBeige";
import imageBG from "../assets/background.png";

const LandingPage = ({ navigation }) => {
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
          Are you new to Fitchoice?
        </Text>

        <Image
          source={require("../assets/landingPageImage.png")}
          style={styles.landingPageImage}
        />

        <View style={{ paddingTop: 50 }}>
          <CustomButtonG
            onPress={() => navigation.navigate("register")}
            text="yes I'm new!"
          />
          <CustomButtonW
            onPress={() => navigation.navigate("login")}
            text="I have an account"
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default LandingPage;

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
