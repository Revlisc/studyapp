import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Set from '../Components/Set';
import SetButton from '../Components/SetButton';


import DATA from '../TEST_DATA/DATA';

const HomeScreen = () => {
    //const {allSets} = this.props //from redux store
    const [data, setData] = useState(DATA)
    console.log(typeof data);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Study Screen</Text>

            {
                data.map((item, idx) => <SetButton key={idx} name={item} />)
            }
        </View>
    )
}

export default HomeScreen;