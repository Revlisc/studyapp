import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Set from '../Components/Set';
import SetButton from '../Components/SetButton';



const HomeScreen = () => {
    //const {allSets} = this.props //from redux store
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Study Screen</Text>

            {
                allSets.map((item, idx) => <SetButton key={idx} name={item} />
            }
        </View>
    )
}

export default HomeScreen;