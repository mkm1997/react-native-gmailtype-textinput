# React Native Gmailtype Textinput 
### react-native-gmailtype-textinput
A React Native Componenet that allows you to use latest Gmail Type Text Input Field in react-native app.It is compitible both 
with expo and react-native-init.
it is a cross platform componenet so it can be used in both android as well as ios. 


| GIF                                                                                                                 |                                                       Image                                                      | Image |
|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------|
| <img src="https://github.com/mkm1997/react-native-gmailtype-textinput/blob/master/assets/screen.gif" width="250px"> | <img src="https://github.com/mkm1997/react-native-gmailtype-textinput/blob/master/assets/1.jpeg"  width="250px"> |<img src="https://github.com/mkm1997/react-native-gmailtype-textinput/blob/master/assets/2.jpeg" width="250px">|




## Getting Started

`Install it by using either npm or yarn`

with npm

 ```
 npm i react-native-gmailtype-textinput
 react-native link react-native-gmailtype-textinput
 ```

with yarn

 ```
 yarn add react-native-gmailtype-textinput
 react-native link react-native-gmailtype-textinput
```







### Usages

```import React from 'react';
 import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
 import GmailInput from 'react-native-gmailtype-textinput';
 
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
```

 
### License

ISC