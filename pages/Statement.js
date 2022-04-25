import React, { Component } from 'react';
import { SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight, Dimensions } from 'react-native';
import { pxToDp } from "./styleKits";
import Modal from "react-native-modal";


class Statements extends Component {
    state = {
        DATA: [
            {
                id: 0,
                title: "上日累计总欠款 = 33000"
                
            },
            {   
                id: 1,
                title: "+今日开单总额: 0"
            },
            {
                id: 2,
                title: "+其他收款合计: 0"
            },
            {
                id: 3,
                title: "=今日应得总额: 33000\n      -今日累计总欠款: 33000\n",
                title2: "       -收款尾数折让: 0"
            },
            {
                id: 4,
                title: "=今日收款总额: 0\n      -今日开支合计: 0\n      -今日上交: 0",
                title2:""

            },
            {
                id: 5,
                title: "上日结余: 62913.23\n",
                title2:"收银员结余: 62913.23"
            }
        ],
        isModalVisible: false
    }

    item = (title, id, title2) => {
        if(id < 3 ){
            return (
                <View style={styles.item}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        }else if (id == 3){
            return (
                <View style={styles.itemForBig}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title2}>{title2}</Text>
                </View>
            );
        }else if (id == 4){
            return (
                <View style={styles.itemForBig}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            );
        }else{
            return (
                <View style={styles.item}>
                    <Text style={styles.title3}>{title}</Text>
                    <Text style={styles.title4}>{title2}</Text>
                </View>
            );
        }
        
    }
    renderItem = ({ item }) => {
        return this.item(item.title, item.id, item.title2);
    };

    toggleModal = () => {
        this.setState({ isModalVisible: this.state.isModalVisible = !this.state.isModalVisible });
    }

    render() {
        return (<View style={{width:'100%'}}>
            <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.toggleModal()}
                >
                    <View
                        style={styles.listProperties}
                    >
                        <FlatList
                        data={this.state.DATA}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}

                        />
                    </View>

                    <Button style={styles.button} title="Hide modal" onPress={() => this.toggleModal()} />
                </Modal>
                <Button style={styles.button} title="Show modal" onPress={() => this.toggleModal()} />
        </View>);
    }

}

const styles = StyleSheet.create({
    listProperties: {
        height: '85%',
        // width: Dimensions.get("screen").width
    },
    item: {
        backgroundColor: 'white',
        height: 45,
        // width:Dimensions.get("screen").width,
        marginVertical: '1%',
        marginHorizontal: '0%',
        
    },
    itemForBig: {
        backgroundColor: 'white',
        height: 90,
        width:Dimensions.get("window").width,
        marginVertical: '1%',
        marginHorizontal: '0%',
        
    },
    title: {
        fontSize: 20,
        color:"black",
        fontWeight:"bold",
        lineHeight:20
    },
    title2: {
        fontSize: 20,
        color:"black",
        lineHeight:20
        
        
    },
    title3: {
        fontSize: 15,
        color:"orange",
        fontWeight:"bold",
        lineHeight:20
        
        
    },
    title4: {
        fontSize: 15,
        color:"red",
        fontWeight:"bold",
        textAlign:"right"
        ,
        lineHeight:20
        
    },
    button: {
        // width: 250,
        height: 30,
        borderRadius: 20,
    },
    modal: {
        backdropColor: "#F5F5F5"
    }
});

export default Statements;