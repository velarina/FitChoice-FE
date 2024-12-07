import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Image, StatusBar } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("landingPage");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../assets/FitChoiceLogo.png")}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 280,
    width: 200,
    alignSelf: "center",
  },
});
