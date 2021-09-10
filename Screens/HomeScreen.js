import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Set from "../Components/Set";
import SetButton from "../Components/SetButton";
import DATA from "../TEST_DATA/DATA";

const HomeScreen = () => {
  //const {allSets} = this.props //from redux store
  //pull data into state
  const [data, setData] = useState(DATA);
  console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Study Screen</Text>
    </View>
  );
};

export default HomeScreen;
