
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IM_Module from './IM_Module'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class UI5_sub extends Component {
    state = {
        userID:"",
        
        
    }
    componentDidMount() {
        const {navigation,route}=this.props
        this.state.userID = JSON.stringify(this.props.route.params.userID);
        this.setState({userID: this.state.userID});
        if(IM_Module.connectToServer(1400671143)){
            IM_Module.login(this.state.userID, 1400671143);
        }
        
        
    }
    render(){
        
        return(
            <View>
                <Text>{this.state.userID}</Text>
            </View>
        )
    }
    
}
export default UI5_sub;