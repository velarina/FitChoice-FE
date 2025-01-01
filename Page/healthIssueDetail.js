import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";

import IconButton from "../components/iconButton";

const healthIssueDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background3.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <IconButton
            icon={require("../assets/arrow_back.png")}
            onPress={() => navigation.navigate("userHealth")}
          />
        </View>

        <ScrollView style={styles.contentContainer}>
          <View style={styles.header1}>
            <Text style={styles.healthIssueName}>Diabetes</Text>
          </View>
          <Text style={styles.desc}>Description</Text>
          <View style={styles.healthIssueContainer}>
            <Text style={styles.HealthIssueText}>agr</Text>
          </View>
          <Text style={styles.desc}>Prohibition</Text>
          <View style={styles.healthIssueContainer}>
            <Text style={styles.HealthIssueText}>agr</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  header: {
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 24,
  },
  header1: {
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  healthIssueName: {
    fontSize: 24,
    margin: 6,
    fontWeight: "bold",
  },
  healthIssueContainer: {
    backgroundColor: "#F5F7EE",
    padding: 24,
    margin: 6,
    borderRadius: 20,
  },
  desc: {
    margin: 6,
    fontSize: 16,
  },
  HealthIssueText: {
    fontSize: 16,
  },
  productImageContainer: {
    alignItems: "center",
    height: 200,
  },
  productImage: {
    height: 180,
    width: 180,
  },
});

export default healthIssueDetail;
