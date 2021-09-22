import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
//import '../../Screens/Review/ReviewScreen.css';


const ReviewCard = ({key, text, onPress, index}) => {
    return (
        <View key={key} style={styles.flashcard}>
            <TouchableOpacity onPress={onPress} style={styles.flip}>
                <Text style={styles.cardNo}>{index}</Text>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    flashcard: {
        width: '85%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        //boxShadow: 2 3 23 rgba(0,0,0,.1),
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 8,
        paddingBottom: 8,
        //transformStyle: 'preserve-3d',
        marginTop: 3,
        //transition: '0.2s',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 25,
    },
    cardNo: {
        position: 'absolute',
        top: 50,
        right: 40,
    },
    flip: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default ReviewCard;