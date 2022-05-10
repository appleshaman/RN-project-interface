import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, KeyboardAvoidingView, Image, FlatList, TextInput } from 'react-native';
import Modal from "react-native-modal";
import IM_Module from './IM_Module';
import AntDesign from 'react-native-vector-icons/AntDesign';

class UI1_sub1 extends Component {
    state = {
        id: 1,
        PhoneNumber: "123456789000",
        name: "江南海特",
        price: 54390,
        addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900',
        targetID: 1234,
        numberWant: 0,
        numberConfirm: 0,
        inventoryNum: 100,
        isModalVisible: false
    }
    componentDidMount() {
        const { navigation, route } = this.props
    }
    toggleModal = () => {
        this.setState({ isModalVisible: this.state.isModalVisible = !this.state.isModalVisible });
        if(this.state.isModalVisible){
            this.state.numberWant = 0;
        }
    }
    render() {
        return (
            <View >
                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={styles.theTopBar}>
                    <AntDesign name="arrowleft" size={30} color="white" onPress={() => { this.props.navigation.navigate("UI1_main") }} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, padding: 10 }}>
                        {this.state.name}
                    </Text>
                </View>


                <View style={styles.theBackground}>
                    <View style={styles.thePic}>
                        <Image source={{ uri: this.state.addr }} style={{ width: "100%", height: "100%" }} />
                    </View>
                    <View style={styles.theBackground2}>
                        <View style={styles.theBackground3}>
                            <Text style={[styles.theInformation, { fontSize: 30 }]}>{"产家：" + this.state.name}</Text>
                            <Text style={[styles.theInformation, { fontSize: 20 }]}>{"电话：" + this.state.PhoneNumber}</Text>
                            <View style={{ height: "70%", justifyContent: "flex-end" }}>
                                <View style={{ flexDirection: "row", alignItems: "center", width: "100%", height: "20%" }}>
                                    <View style={[styles.theButtonView, { backgroundColor: "orange" }]}>
                                        <Text style={[styles.theButton]}
                                            onPress={() => this.toggleModal()}
                                        >{"加入购物车"}</Text>
                                    </View>
                                    <View style={[styles.theButtonView, { backgroundColor: "blue" }]}>
                                        <Text style={[styles.theButton]}
                                        >{"立刻下单"}</Text>
                                    </View>
                                    <Modal
                                        isVisible={this.state.isModalVisible}
                                        onBackdropPress={() => this.toggleModal()}
                                    >
                                        <View style={{ height: "50%", width: "90%", backgroundColor: "white", alignSelf: "center", alignItems: "center" }}>
                                            <Text>{"库存:" + this.state.inventoryNum}</Text>
                                            <TextInput
                                                keyboardType="numeric"
                                                ref={"Conclusion"}
                                                underlineColorAndroid="transparent"
                                                onChangeText={(numberWant) =>
                                                    this.setState({ numberWant })
                                                }
                                                onFocus={()=>{this.setState({ numberWant:this.state.numberWant = ""})}}
                                                multiline={true}
                                                value={this.state.numberWant.toString()}
                                            ></TextInput>
                                            <Text 
                                            onPress={() =>{
                                                this.setState({numberConfirm: this.state.numberConfirm = this.state.numberWant});
                                                this.setState({inventoryNum : this.state.inventoryNum -= this.state.numberConfirm});
                                            }}
                                            >{"确认"}</Text>
                                        </View>
                                    </Modal>
                                </View>
                            </View>
                        </View>
                    </View>
                </View >
            </View >
        )
    }

}

const styles = StyleSheet.create({
    theTopBar: {
        height: 60,
        backgroundColor: "#1D9265",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10
    },
    theBackground: {
        backgroundColor: "#D5E7EB",
        flexDirection: "column",
        width: "100%",
        height: "92%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    theBackground2: {
        height: "57%",
        width: "96%",
        alignItems: "center"
    },
    theBackground3: {
        backgroundColor: "white",
        width: "95%",
        height: "90%",
        borderRadius: 10

    },
    thePic: {
        width: "100%",
        height: "40%"
    },
    theInformation: {
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10,
        paddingTop: 10
    },
    theButton: {
        fontWeight: "bold",
        color: "white",
    },
    theButtonView: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default UI1_sub1;