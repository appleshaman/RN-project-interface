
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, KeyboardAvoidingView, TextInput, FlatList, Scrollview } from 'react-native';
import IM_Module from './IM_Module'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UI5_main from './ui5_main';
class UI5_sub extends Component {
    state = {
        userID: "",
        name: "",
        Context: "",

    }
    componentDidMount() {
        const { navigation, route } = this.props
        this.state.userID = route.params.userID;
        this.state.name = route.params.name;
        this.setState({ userID: this.state.userID });
        this.setState({ name: this.state.name });
        if (IM_Module.connectToServer(1400671143)) {
            IM_Module.login(this.state.userID, 1400671143);
        }


    }
    render() {

        return (
            <View style={styles.theWhole}>
                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={styles.theTopBar}>
                    <AntDesign name="arrowleft" size={30} color="white" onPress={() => { this.props.navigation.navigate("UI5_main") }} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, padding: 10 }}>
                        {this.state.name}
                    </Text>
                </View>

                <View style={styles.theChatBox}>

                    <View style={styles.theChatListBox}>
                        <FlatList>

                        </FlatList>
                    </View>
                    <KeyboardAvoidingView
                        behavior="position"
                        style={{height:"0%"}}
                        keyboardVerticalOffset={Platform.select({ ios: 40, android: -60 })}
                        enabled = {true}
                        >
                        <View style={styles.theChatInputBox}>
                            <TextInput
                                ref={"Conclusion"}
                                underlineColorAndroid="transparent"
                                onChangeText={(Context) => this.setState({ Context })}
                                placeholder="请输入会诊结论"
                                multiline={true}
                                value={this.state.Context}
                            ></TextInput>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    theWhole: {
        height: "100%"
    },
    theTopBar: {
        height: 60,
        backgroundColor: "#1D9265",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10

    },
    theGreenBackground: {
        backgroundColor: "#D19D3D"
    },
    theChatBox: {
        height: "90%",
    },
    theChatListBox: {
        backgroundColor: "#85DCB0",
        height: "91%",
        borderColor: "green"
    },
    theChatInputBox: {
        backgroundColor: "gray",

        height: 50
    }



})
export default UI5_sub;