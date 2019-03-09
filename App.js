import React from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import GmailInput from './src/GmailInput';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email_or_phone:'',
            password:''
        }
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >


                <Text>Gmail Type Input Field</Text>
                <View style={{width:"100%",marginBottom: 10}}>
                    <GmailInput label='Email or Phone'

                                onChangeText={(text) => {this.setState({email_or_phone:text})}}
                                hideLabel={this.state.email_or_phone !== ''}
                    />
                </View>
                <View style={{width:"100%"}}>
                    <GmailInput label='Password'
                                onChangeText={(text) => {this.setState({password:text})}}
                                hideLabel={this.state.password !== ''}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
