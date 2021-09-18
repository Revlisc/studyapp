import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SignUpScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>SignUp Screen!</Text>
                <View >
                    <Button
                        title='Already a user? Login here'
                        onPress={() => navigate('Login')}
                    />
                </View>
               
            </View>
        )
    }
}

export default SignUpScreen;