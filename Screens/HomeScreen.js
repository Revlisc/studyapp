import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import SetButton from "../Components/SetButton";

const HomeScreen = ({ userData }) => {
  
  const navigate = useNavigation()
  
  const renderItem = ({ item }) => <SetButton setName={item.setName} id={item.id} onPress={() => navigate.navigation('ReviewScreen')}/>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Sets</Text>
      <FlatList data={userData} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
});

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});
export default connect(mapStateToProps)(HomeScreen);
