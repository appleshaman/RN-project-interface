import React, { Component } from 'react';
import { View, Text, Image, StatusBar} from 'react-native';
import {pxToDp} from "./styleKits";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from '@react-native-elements/base';




class Login extends Component {
    state={
        PhoneNumber: "114514"
    }
    PhoneNumberChange=(Number)=>{
        this.setState({PhoneNumber: this.state.PhoneNumber = Number});
        console.log(this.state.PhoneNumber);
    }
    


    render() {
        
        return (
            <View>
                <StatusBar barStyle={'light-content'} backgroundColor='transparent' translucent={true} />
                <Image style={{width:"100%",height:pxToDp(200)}} source = {require("./images/R-C.jpg")}/>
                <View style={{padding:pxToDp(20)}}>
                    <View>
                        <Text style={{fontSize:pxToDp(25),color:"#888", fontWeight:"bold"}}>
                            手机号登录注册
                        </Text>
                        <Input
                            placeholder = '手机号码'
                            maxLength={11}
                            keyboardType="phone-pad"
                            inputStyle={{color:"red"}}
                            value={this.state.PhoneNumber}
                            onChangeText = {this.PhoneNumberChange}
                            leftIcon = {{ type: 'font-awesome', name: 'phone'}}/>

                    </View>
                </View>
            </View>
        );
    }
}

export default Login;