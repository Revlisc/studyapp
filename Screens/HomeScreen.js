import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { connect } from "react-redux";

import SetButton from "../Components/SetButton";

import { DATA } from "../TEST_DATA/DATA";
// console.log(DATA.userData);
const HomeScreen = ({ userData }) => {
  //const {allSets} = this.props //from redux store

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Study Screen</Text>
      {userData.map((set) => {
        return <SetButton key={set.id} name={set.setName} />;
      })}
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});
export default connect(mapStateToProps)(HomeScreen);
