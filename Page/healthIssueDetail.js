import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

import IconButton from "../components/iconButton";
import axiosInstance from "../libs/axios";

const healthIssueDetail = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;
  const [healthIssues, setHealthIssues] = useState(null); // Initialized as null to check if data is loaded
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    setLoading(true); // Set loading to true when the request starts
    axiosInstance
      .get(`healthIssue/id/${id}`)
      .then((res) => {
        setHealthIssues(res.data.healthIssue);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false); // Set loading to false even on error
      });
  }, [id]); // Added id as dependency to reload on id change

  if (loading) {
    return <Text>Loading...</Text>; // Display loading text until data is fetched
  }

  if (!healthIssues) {
    return <Text>No health issue data found</Text>; // Display message if no data is returned
  }

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
            <Text style={styles.healthIssueName}>
              {healthIssues.healthIssueName}
            </Text>
          </View>
          <Text style={styles.desc}>Description</Text>
          <View style={styles.healthIssueContainer}>
            <Text style={styles.HealthIssueText}>
              {healthIssues.healthIssueDesc}
            </Text>
          </View>
          <Text style={styles.desc}>Prohibition</Text>
          <View style={styles.healthIssueContainer}>
            <Text style={styles.HealthIssueText}>
              {healthIssues.prohibition}
            </Text>
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
