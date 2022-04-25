import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider, ListItem } from '@rneui/themed';
import { DateTimePickerAndroid, DateTimePicker } from '@react-native-community/datetimepicker';
import Sub1 from './ui3_sub1';
import Sub2 from './ui3_sub2';

class UI3 extends Component {
    state = {
        pageSelection: false,
    }

    showUnderline = (type) =>{
        if(this.state.pageSelection){
            if(type){
                return "underline"
            }else{
                return "none"
            }
            
        }else{
            if(!type){
                return "underline"
            }else{
                return "none"
            }
        }
    }


    render() {
        return (
            <View style={{ flexDirection: "column", height: "100%" }}>
                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={{ backgroundColor: "#1D9265",justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                    <Text
                        style={[styles.theWhiteTopic, {textDecorationLine: this.showUnderline(false)}]}
                        onPress={() => {this.setState({pageSelection: this.state.pageSelection = !this.state.pageSelection})}}
                    >

                        {"订货单"}
                    </Text>
                    <Text
                        style={[styles.theWhiteTopic, {textDecorationLine: this.showUnderline(true)}]}
                        onPress={() => {this.setState({pageSelection: this.state.pageSelection = !this.state.pageSelection})}}
                    >
                        {"采购单"}
                    </Text>
                </View>
                
                 {!this.state.pageSelection && <Sub1></Sub1>}
                 {this.state.pageSelection && <Sub2></Sub2>}

                
                


            </View>
        );
    }

    
}



const styles = StyleSheet.create({
    theWhiteTopic: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    
    


})
export default UI3;