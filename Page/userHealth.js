import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import axiosInstance from "../libs/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserHealth = ({ navigation }) => {
  const [healthIssues, setHealthIssues] = useState([]);
  const [username, setUsername] = useState("");
  const [memberID, setMemberID] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const id = await AsyncStorage.getItem("memberID");
      const name = await AsyncStorage.getItem("username");

      setMemberID(id);
      setUsername(name || "Guest");
    };

    fetchUserData();

    axiosInstance
      .get("healthIssue")
      .then((res) => {
        setHealthIssues(
          res.data.healthIssues.map((issue) => ({ ...issue, isChecked: false }))
        );
      })
      .catch((error) =>
        console.error("Failed to fetch health issues:", error.message)
      );
  }, []);

  const handleCheck = async (healthIssueID) => {
    try {
      const updatedIssues = healthIssues.map((issue) =>
        issue.healthIssueID === healthIssueID
          ? { ...issue, isChecked: !issue.isChecked }
          : issue
      );
      setHealthIssues(updatedIssues);

      const isChecked = !updatedIssues.find(
        (i) => i.healthIssueID === healthIssueID
      ).isChecked;

      await axiosInstance.post("healthissue/assign", {
        memberID,
        healthIssueID,
        isChecked,
      });
    } catch (error) {
      console.error("Failed to update health issue:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logOutButtonContainer}>
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>User Health</Text>
        <Text style={styles.headerText}>{username}</Text>
      </View>
      <ImageBackground
        source={require("../assets/background2.png")}
        style={styles.backgroundImage}
      >
        <FlatList
          data={healthIssues}
          renderItem={({ item }) => (
            <View style={styles.healthIssueContainer}>
              <TouchableOpacity
                style={styles.checkBox}
                onPress={() => handleCheck(item.healthIssueID)}
              >
                {item.isChecked && <Text style={styles.checkMark}>✔</Text>}
              </TouchableOpacity>
              <Text style={styles.healthIssueText}>{item.healthIssueName}</Text>
              <TouchableOpacity
                style={styles.moreButton}
                onPress={() =>
                  navigation.navigate("healthIssueDetail", {
                    id: item.healthIssueID,
                  })
                }
              >
                <Text style={styles.moreButtonText}>more</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.healthIssueID.toString()}
          style={styles.flatList}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 64,
    paddingBottom: 24,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  logOutButtonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  logOutButton: {
    backgroundColor: "#E8ECD7",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  logOutText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    paddingTop: 20,
  },
  flatList: {
    paddingHorizontal: 20,
  },
  healthIssueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F7EE",
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#47663B",
    backgroundColor: "#E8ECD7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkMark: {
    fontSize: 14,
    color: "#47663B",
    fontWeight: "bold",
  },
  healthIssueText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  moreButton: {
    borderWidth: 1,
    borderColor: "#47663B",
    borderRadius: 16,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  moreButtonText: {
    color: "#47663B",
    fontSize: 14,
  },
});

export default UserHealth;
