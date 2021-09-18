import { useNavigation } from '@react-navigation/native';
import React, { useState, } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import validateLogin from '../utils/validateSignUp';


const SignUpScreen = (props) => {

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        const navigation = useNavigation();

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Welcome to StudyApp
                    </Text>
                </View>
                <View >
                    <Text style={styles.subtitle}>
                        Login Here
                    </Text>
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Name...'
                        placeholderTextColor="#C5C5C5"
                        onChangeText={(name) => setName(name)}
                    />
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Email...'
                        placeholderTextColor="#C5C5C5"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder='Password...'
                        placeholderTextColor="#C5C5C5"
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={styles.loginBtn}>
                    <TouchableOpacity>
                        <Button 
                            
                            color='white'
                            title='Sign Up'
                            onPress={
                                () =>  navigation.navigate('Main') 
                            }
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Button 
                            title='Back to Sign Up'
                            onPress={() => navigation.navigate('SignUp')}
                        />
                    </TouchableOpacity>
                </View>
               
            </SafeAreaView>
        )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      
    },
   
    inputView: {
      borderWidth: 1,
      borderColor: '#6C61EB',
      borderRadius: 20,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      width: '100%',
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 'auto',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#6C61EB",
      borderWidth: 1,
      
    },

    header: {
        fontSize: 36,
        width: '100%',
        
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },

    headerContainer: {
        width: '100%',
        height: '15%',
        backgroundColor: '#6C61EB',
        justifyContent: 'flex-start',
        marginBottom: '10%',
        justifyContent: 'center'
    },

    subtitle: {
        fontSize: 16,
        width: '60%',
        marginBottom: '20%',
        textAlign: 'center'
    }
  });