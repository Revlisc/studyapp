import React, { useState } from "react";
import { StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import SetButton from "../Components/SetButton";

const HomeScreen = ({ userData, navigation }) => {
  const renderItem = ({ item }) => <SetButton setName={item.setName} id={item.id} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Sets</Text>
      <FlatList data={userData} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.addNewBtn}
          onPress={() => {
            navigation.navigate("Add New Set");
          }}
        >
          <Text style={styles.btnText}>Add new Set</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FF",
    height: "100%",
  },
  header: {
    fontSize: 30,
    alignSelf: "center",
    marginVertical: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  addNewBtn: {
    width: 300,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#C4C4C4",
    borderWidth: 1,
    backgroundColor: "#6C61EB",
    borderRadius: 15,
  },

  btnText: {
    color: "#F5F8FF",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});
export default connect(mapStateToProps)(HomeScreen);
