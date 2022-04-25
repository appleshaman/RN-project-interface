import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider, ListItem } from '@rneui/themed';
import { DateTimePickerAndroid, DateTimePicker } from '@react-native-community/datetimepicker';

class UI4 extends Component {
    state = {
        expanded: false,
        date1: new Date("2022-03-10"),
        date2: new Date("2022-03-10"),
        data: [
        ],
        pageSelection: 1
    }
    componentDidMount() {
        this.generateData();
    }
    generateData = () => {
        for (i = 0; i < 30; i++) {
            this.state.data.push(
                {
                    id: i,
                    retailer: "338海特果菜",
                    name: 53465,
                    number: 5385,
                    weight: 10000,
                    price: 48850,
                }
            )
        }
        this.setState({ data: this.state.data });
    }

    amountCaculation = () => {
        let amount = 0;
        for (i = 0; i < this.state.data.length; i++) {
            amount += this.state.data[i].name;
        }
        return amount;
    }
    numberCaculation = () => {
        let number = 0;
        for (i = 0; i < this.state.data.length; i++) {
            number += this.state.data[i].number;
        }
        return number;
    }
    weightCaculation = () => {
        let weight = 0;
        for (i = 0; i < this.state.data.length; i++) {
            weight += this.state.data[i].weight;
        }
        return weight;
    }
    priceCaculation = () => {
        let price = 0;
        for (i = 0; i < this.state.data.length; i++) {
            price += this.state.data[i].price;
        }
        return price;
    }


    item = (item) => {
        return (
            <View style={styles.theShadowContainer}>
                <Text style={styles.theGreenText}>{item.retailer}</Text>
                <Text style={styles.theGreenText}>{item.name.toString()}</Text>
                <Text style={styles.theGreenText}>{item.number.toString()}</Text>
                <Text style={styles.theGreenText}>{item.weight.toString()}</Text>
                <Text style={styles.theGreenText}>{item.price.toString()}</Text>
            </View>
        );
    }
    /**(
        
        <this.item title={item.title} />
      ) */
    renderItem = ({ item }) => {
        return this.item(item);
    };

    onChange1 = (event, selectedDate) => {
        alert(this.state.date1);
        alert(selectedDate);
        //this.state.date1 = selectedDate;
        //this.setState({ date1: this.state.date1 });
    };
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

    render() {
        return (
            <View style={{ flexDirection: "column", height: "100%" }}>
                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={{ backgroundColor: "#1D9265", }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
                        {"交易商户对账:"}
                    </Text>
                </View>
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
                                        <ListItem.Title><Text style={styles.theMenuText}>
                                            {'全部批发商'}</Text></ListItem.Title>
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
                    <Text style={styles.theGreenText}>{"批发商"}</Text>
                    <Text style={styles.theGreenText}>{"前欠"}</Text>
                    <Text style={styles.theGreenText}>{"采购"}</Text>
                    <Text style={styles.theGreenText}>{"已付"}</Text>
                    <Text style={styles.theGreenText}>{"未付"}</Text>
                </View>

                <View style={{ height: "64%" }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}>
                    </FlatList>
                </View>

                <View style={[styles.theShadowContainerForLast, ]}>
                    <Text style={{ color: 'red', fontSize: 15, alignItems: 'center' }}>
                        {"合计:     " + this.amountCaculation()+ "     "}
                    </Text>
                    <Text style={{ color: 'red', fontSize: 15, alignItems: 'center' }}>
                        {this.numberCaculation()+ "     "}
                    </Text>
                    <Text style={{ color: 'red', fontSize: 15, alignItems: 'center' }}>
                        {this.weightCaculation()+ "     "}
                    </Text>
                    <Text style={{ color: 'red', fontSize: 15, alignItems: 'center' }}>
                        {this.priceCaculation()+ "  "}
                    </Text>
                </View>

                <View style={{ backgroundColor: "black", flexDirection: "row", height: 43, alignItems: 'center', justifyContent: "center", width: 411 }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30, height: 43, backgroundColor: "transparent", alignItems: "center" }}>
                            {"货源"}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30, height: 43, backgroundColor: "transparent", alignItems: "center" }}>
                            {"批发商"}
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30, height: 43, backgroundColor: "transparent", alignItems: "center" }}>
                            {"订购"}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30, height: 43, backgroundColor: "transparent", alignItems: "center" }}>
                            {"我的"}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    theOrangeText: {
        color: '#FF7F23',
        fontWeight: 'bold',
        shadowColor: 'grey',
        fontSize: 16
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
export default UI4;