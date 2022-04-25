import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider, ListItem } from '@rneui/themed';
import { DateTimePickerAndroid, DateTimePicker } from '@react-native-community/datetimepicker';
import ActionButton from 'react-native-action-button';
class Sub1 extends Component {
    state = {
        data: [],
        pageSelection: 1,
        dataSource: [],
        expanded: false,
        date1: new Date("2022-03-10"),
        date2: new Date("2022-03-10"),
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
                    serialNumber: "KD.20220318001",
                    name: "江南308档海特",
                    categoryAmount: 1,
                    number: 20,
                    weight: 874,
                    outstanding: 93205,
                    time: "2022-03-28",
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

    onChange2 = (event, selectedDate) => {
        this.setState({ date2: this.state.date2 });
    };

    showMode = (currentMode, picker) => {
        if (picker == 1) {
            DateTimePickerAndroid.open({
                value: this.state.date1,

                onChange: this.onChange1(),
                mode: currentMode,
            })
        } else if (picker == 2) {
            DateTimePickerAndroid.open({
                value: this.state.date2,
                onChange: this.onChange2(),
                mode: currentMode,
            })
        }
    };

    showDatepicker1 = () => {
        this.showMode('date', 1);
    };

    showDatepicker2 = () => {
        this.showMode('date', 2);
    };

    single = (input) => {
        if (input % 2 == 0) {
            return (true);
        } else {
            return (false);
        }
    }

    showUnderline1 = () => {
        if (this.state.pageSelection == 1) {
            return "●全部采购单"
        } else {
            return "全部采购单"
        }
    }

    showUnderline2 = () => {
        if (this.state.pageSelection == 2) {
            return "⊙已付款"
        } else {
            return "已付款"
        }
    }

    showUnderline3 = () => {
        if (this.state.pageSelection == 3) {
            return "⊙未付款"
        } else {
            return "未付款"
        }
    }

    priceCaculation = () => {
        let amount = 0;
        for (let i = 0; i < this.state.data.length; i++) {
            amount += this.state.data[i].outstanding;
        }

        return amount;
    }

    item = (item) => {
        return (
            <View style={styles.theShadowContainer}>
                <View style={{ flexDirection: "column", flex: 2 }}>
                    <Text style={styles.theBlackText}>{item.time}</Text>
                    <Text style={styles.theSmallGreen}>{item.serialNumber}</Text>
                </View>
                <View style={{ flexDirection: "column", flex: 2 }}>
                    <Text style={styles.theBlackText}>{item.name}</Text>
                    <Text style={styles.theSmallGreen}>{item.categoryAmount + "个品种" + item.number + "件" + item.weight + "kg"}</Text>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <Text style={styles.theRedText}>
                        {item.outstanding}
                    </Text>
                    {item.paid &&
                        <Text style={[styles.theButtonText, { color: "#1D9265" }]}>
                            {"已支付"}
                        </Text>}
                    {!item.paid &&
                        <Text style={[styles.theButtonText, { color: "#FEC100" }]}>
                            {"未支付"}
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
                <View style={styles.theShadowContainer}>
                    <View style={styles.theDatePicker}>
                        <Text style={styles.theOrangeText} onPress={this.showDatepicker1}>
                            {this.state.date1.getFullYear().toString() + "-" + this.state.date1.getMonth().toString() + "-" + this.state.date1.getDate().toString()}
                        </Text>
                    </View>

                    <Text style={{ color: "#1D9265", fontWeight: 'bold', fontSize: 20 }}>
                        {'至'}
                    </Text>

                    <View style={styles.theDatePicker}>
                        <Text style={styles.theOrangeText} onPress={this.showDatepicker1}>
                            {this.state.date2.getFullYear().toString() + "-" + this.state.date2.getMonth().toString() + "-" + this.state.date2.getDate().toString()}
                        </Text>
                    </View>

                    <View>
                        <ListItem.Accordion style={styles.theMenu}
                            content={
                                <>
                                    {/* <Icon name="place" size={30} /> */}
                                    <ListItem.Content>
                                        <ListItem.Title><Text style={styles.theOrangeText}>
                                            {'全部档口商户'}</Text></ListItem.Title>
                                    </ListItem.Content>
                                </>
                            }
                            isExpanded={this.state.expanded}
                            onPress={() => {
                                this.setState({ expanded: this.state.expanded = !this.state.expanded });
                            }}
                        >
                        </ListItem.Accordion>
                    </View>

                </View>

                <View style={styles.theShadowContainerForListTitle}>
                    <Text style={styles.theGreenText}
                        onPress={() => { this.setState({ pageSelection: this.state.pageSelection = 1 }); this.generateDataForDispaly() }}>{this.showUnderline1()}</Text>
                    <Text style={styles.theGreenText}
                        onPress={() => { this.setState({ pageSelection: this.state.pageSelection = 2 }); this.generateDataForDispaly() }}>{this.showUnderline2()}</Text>
                    <Text style={styles.theGreenText}
                        onPress={() => { this.setState({ pageSelection: this.state.pageSelection = 3 }); this.generateDataForDispaly() }}>{this.showUnderline3()}</Text>
                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={styles.theRedText}>{this.priceCaculation()}</Text>
                        <Text style={styles.theSmallOrange}>{'合计' + this.state.data.length + '单'}</Text>
                    </View>
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
    theRedText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    },
    theSmallOrange: {
        color: '#FF7F23',
        fontSize: 20
    },

    theOrangeText: {
        color: '#FF7F23',
        fontWeight: 'bold',
        shadowColor: 'grey',
        fontSize: 13
    },
    theMenuText: {
        color: '#FF7F23',
        fontWeight: 'bold',
        shadowColor: 'grey',
        fontSize: 14
    },
    theDatePicker: {
        width: 110,
        height: 60,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'grey',
        borderColor: 'grey',
        elevation: 3
    },
    theMenu: {
        width: 155,
        height: 60,
        shadowColor: 'grey',
        borderColor: 'grey',
        elevation: 3
    },
    theGreenText: {
        color: "#1D9265",
        fontSize: 17,

    },
    theRedText: {
        color: "red",
        fontSize: 17
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
    theShadowContainerForLast: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        justifyContent: "flex-end",
        elevation: 3,
        shadowColor: "grey",
        shadowOffset: {
            width: 3,
            height: 3
        },
        borderBottomColor: "grey"
    }
})

export default Sub1;