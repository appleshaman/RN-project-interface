import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider, ListItem } from '@rneui/themed';


class Sub1 extends Component {
    state = {
        data: [],
        pageSelection: 1,
        dataSource: []
    }

    componentDidMount() {
        this.generateData();
        this.generateDataForDispaly();
    }
    generateData = () => {

        for (let i = 0; i < 30; i++) {
            this.state.dataSource.push(
                {
                    id: i,
                    serialNumber: "DD.20220318001",
                    name: "江南308档海特",
                    categoryAmount: 1,
                    number: 20,
                    weight: 874,
                    time: "2022-03-28 13:45:16",
                    paid: this.single(i)
                }
            )
        }
        this.setState({ dataSource: this.state.dataSource });
    }

    generateDataForDispaly = () => {
        let temp = [];
        for (let i = 0; i < 30; i++) {

            if ((this.state.dataSource[i].paid == true) && (this.state.pageSelection == 2)) {
                temp.push(this.state.dataSource[i]);
            } else if ((this.state.dataSource[i].paid == false) && (this.state.pageSelection == 3)) {
                temp.push(this.state.dataSource[i]);
            } else if (this.state.pageSelection == 1) {
                temp.push(this.state.dataSource[i]);
            }
        }
        this.state.data = temp;
        this.setState({ data: this.state.data })
    }

    showUnderline1 = () => {
        if (this.state.pageSelection == 1) {
            return "underline"
        } else {
            return "none"
        }
    }

    showUnderline2 = () => {
        if (this.state.pageSelection == 2) {
            return "underline"
        } else {
            return "none"
        }
    }

    showUnderline3 = () => {
        if (this.state.pageSelection == 3) {
            return "underline"
        } else {
            return "none"
        }
    }

    single = (input) => {
        if (input % 2 == 0) {
            return (true);
        } else {
            return (false);
        }
    }

    item = (item) => {
        return (
            <View style={styles.theShadowContainer}>
                <View style={{ flexDirection: "column", flex: 2}}>
                    <Text style={styles.theBlackText}>{item.serialNumber}</Text>
                    <Text style={styles.theSmallGreen}>{item.time}</Text>
                </View>
                <View style={{ flexDirection: "column", flex: 2 }}>
                    <Text style={styles.theBlackText}>{item.name}</Text>
                    <Text style={styles.theSmallGreen}>{item.categoryAmount + "个品种" + item.number + "件" + item.weight + "kg"}</Text>
                </View>

                <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                    {item.paid &&
                        <Text style={[styles.theButtonText, { backgroundColor: "#1D9265" }]}>
                            {"收货"}
                        </Text>}
                    {!item.paid &&
                        <Text style={[styles.theButtonText, { backgroundColor: "#FEC100" }]}>
                            {"收单"}
                        </Text>}
                </View>


            </View>
        );
    }

    renderItem = ({ item }) => {
        return this.item(item);
    };

    render() {
        return (
            <View>
                <View style={styles.theShadowContainerForListTitle}>
                    <Text
                        style={[styles.theGreenText, { textDecorationLine: this.showUnderline1() }, { textDecorationColor: "red" }]}
                        onPress={() => { this.setState({ pageSelection: this.state.pageSelection = 1 }); this.generateDataForDispaly() }}
                    >{"全部"}</Text>
                    <Text style={[styles.theGreenText]}>{"待发货"}</Text>
                    <Text style={[styles.theGreenText]}>{"待开单"}</Text>
                    <Text
                        style={[styles.theGreenText, { textDecorationLine: this.showUnderline2() }, { textDecorationColor: "red" }]}
                        onPress={() => { this.setState({ pageSelection: this.state.pageSelection = 2 }); this.generateDataForDispaly() }}
                    >{"待收货"}</Text>
                    <Text
                        style={[styles.theGreenText, { textDecorationLine: this.showUnderline3() }, { textDecorationColor: "red" }]}
                        onPress={() => { this.setState({ pageSelection: this.state.pageSelection = 3 }); this.generateDataForDispaly() }}
                    >{"待支付"}</Text>
                </View>

                <View>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}>
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    theGreenText: {
        color: "#1D9265",
        fontSize: 20,
    },
    theSmallGreen: {
        color: "#1D9265",
        fontSize: 10,
    },
    theBlackText: {
        color: 'black',
        fontSize: 20
    },
    theShadowContainer: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        shadowColor: 'grey',
        borderColor: 'grey',
        elevation: 10,


    },
    theShadowContainerForListTitle: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        elevation: 3,
        shadowColor: 'grey',
        borderBottomColor: "grey",
    },
    theButtonText: {
        borderRadius: 5,
        width: 60,
        height: 30,
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    }

})

export default Sub1;