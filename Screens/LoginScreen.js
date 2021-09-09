import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends Component {
    
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
                <Text>Login Screen!</Text>
                <View >
                    <Button
                        title='Go to App!'
                        onPress={() => navigate('Home')}
                    />
                </View>
               
            </View>
        )
    }
}

export default LoginScreen;