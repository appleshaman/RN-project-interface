import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider, ListItem } from '@rneui/themed';
import { DateTimePickerAndroid, DateTimePicker } from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


class UI5_main extends Component {
    state = {
        pageSelection: false,
        expanded: false,
        data: [],
        dataSource: [],
        dataForSearch: ""
    }

    componentDidMount() {
        this.generateData();
        this.searchData("");
    }
    generateData = () => {
        for (let i = 0; i < 30; i++) {
            this.state.dataSource.push(
                {
                    id: i,
                    PhoneNumber: "123456789000",
                    name: "江南海特",
                    price: 54390,
                    addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900',
                    userID:1234 + i
                }
            )
        }
        this.setState({ dataSource: this.state.dataSource });
    }
    priceCaculation = () => {
        let price = 0;
        for (i = 0; i < this.state.data.length; i++) {
            price += this.state.data[i].price;
        }
        return price;
    }
    amountCaculation = () => {
        let amount = 0;
        for (i = 0; i < this.state.data.length; i++) {
            //amount += this.state.data[i].number;
            amount = amount + 1
        }
        return amount;
    }
    searchData = (data) => {
        let temp = [];
        for (let i = 0; i < this.state.dataSource.length; i++) {

            if (data == "") {
                temp.push(this.state.dataSource[i]);
            } else if (this.state.dataSource[i].name.indexOf(data)) {
                temp.push(this.state.dataSource[i]);
            }
        }
        this.state.data = temp;
        this.setState({ data: this.state.data })
    }

    item = (item) => {
        return (
            <View style={{ borderWidth: 1, margin: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={styles.theImage}
                        resizeMode="cover"
                        source={{ uri: item.addr }}
                    />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.theName}
                        onPress = {() => {this.props.navigation.navigate("UI5_sub",{userID: item.userID, name: item.name})}}
                        >
                            {item.name}
                        </Text>
                        <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                            <Entypo name="old-phone" size={10} color="#D19D3D" />
                            <Text style={styles.thePhone}>
                                {" :" + item.PhoneNumber}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"baseline"}}>
                    <FontAwesome name="rmb" size={20} color="red" />
                    <Text style={{ fontSize: 30, color: "red" }}>{item.price}</Text>
                </View>

            </View>
        );
    }

    renderItem = ({ item }) => {
        return this.item(item);
    };
    render() {
        return (
            <View style={{ flexDirection: "column", height: "100%", backgroundColor: "white" }}>
                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={{ backgroundColor: "#1D9265", justifyContent: "space-around", alignItems: "center", flexDirection: "row", height: 70 }}>
                    <Text
                        style={[styles.theWhiteTopic]}
                    >
                        {"往来档口商户:"}
                    </Text>

                    <ListItem.Accordion style={styles.theMenu} containerStyle={{ backgroundColor: "#87C5B0" }}
                        content={
                            <>
                                {/* <Icon name="place" size={30} /> */}
                                <ListItem.Content  >
                                    <ListItem.Title ><Text style={{ color: "white" }}>
                                        {'全部农批市场'}</Text></ListItem.Title>
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
                <View style={{ flexDirection: "row", height: 70, justifyContent: "space-between", borderColor: "grey", borderWidth: 1, alignItems: "center", paddingHorizontal: 10 }}>
                    <SearchBar
                        containerStyle={{ backgroundColor: 'grey', borderBottomColor: 'grey', borderTopColor: 'grey', width: 200, height: 43, justifyContent: "center", alignItems: "center" }}
                        inputContainerStyle={{ backgroundColor: '#FFFFFF', width: 197, height: 40, margin: -6 }}
                        inputStyle={{ fontSize: 13, color: "grey" }}
                        leftIconContainerStyle={{ alignContent: 'flex-start', width: 19 }}
                        //onKeyPress={this.searchData()}
                        
                        value={this.state.dataForSearch}
                        placeholder="请输入关键字搜索"
                    //onChangeText={}
                    //value={}
                    />

                    <View style={{ flexDirection: "column" }}>
                        <Text style={[styles.theRedText, { fontSize: 20 }]}>{this.priceCaculation()}</Text>
                        <Text style={[styles.theRedText, { fontSize: 10 }]}>{"合计:" + this.amountCaculation() + "家商户"}</Text>
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
    theWhiteTopic: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    theRedText: {
        color: "red",
        fontSize: 17
    },
    theMenu: {
        width: 170,
        height: 50,
        shadowColor: 'grey',
        borderColor: 'grey',
        elevation: 3,
    },
    theImage: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 16,
        margin: 5
    },
    theName: {
        fontSize: 20,
        color: "black"
    },
    thePhone: {
        fontSize: 13,
        color: "#D19D3D"
    }
})
export default UI5_main;