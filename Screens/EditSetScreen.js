import React, { useState } from "react";
import { View, TextInput, SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { connect } from "react-redux";
import EditSetInfo from "../Components/EditSetInfo";
import EditQuestionButton from "../Components/EditQuestionButton";

const EditSetScreen = ({ userData }) => {
  //must use route to get access to params
  const route = useRoute();
  const { itemId } = route.params;
  //filter out set being updated
  const set = userData.filter((set) => set.id === itemId)[0];
  //save it to local state
  const [currentSet, setCurrentSet] = useState(set);

  const handleInfoChange = (input, text) => {
    setCurrentSet({
      ...currentSet,
      [input]: text,
    });
    //setFillButton(true);
  };

  const renderItem = ({ item }) => <EditQuestionButton question={item} />;
  return (
    //components for each tyoe of input
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <EditSetInfo
          setName={currentSet.setName}
          description={currentSet.description}
          handleInfoChange={handleInfoChange}
        />
      </View>
      <View style={styles.questionContainer}>
        <FlatList
          data={currentSet.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* // <AddNewQuestion /> */}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData.userData,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FF",
    height: "100%",
  },
  infoContainer: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 5,
    borderRadius: 2,

    marginHorizontal: 35,
  },
  questionContainer: {
    marginHorizontal: 35,
  },
});

export default connect(mapStateToProps)(EditSetScreen);
