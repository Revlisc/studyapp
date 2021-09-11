import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Set from "../Components/Set";
import SetButton from "../Components/SetButton";

import { DATA } from "../TEST_DATA/DATA";
// console.log(DATA.userData);
const HomeScreen = () => {
  //const {allSets} = this.props //from redux store
  const [data, setData] = useState(DATA);
  console.log(data.userData);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Study Screen</Text>
      {data.userData.map((set) => {
        return <SetButton key={set.id} name={set.setName} />;
      })}
    </View>
  );
};

export default HomeScreen;
