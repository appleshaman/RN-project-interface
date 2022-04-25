import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight, Dimensions } from 'react-native';
import { pxToDp } from "./styleKits";
import Modal from "react-native-modal";
import { color } from '@react-native-elements/base/dist/helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import ActionButton from 'react-native-action-button';

class UI1 extends Component {
    state = {
        DropdownmenuData: ["卖菜帮软件"],
        checked1: false,
        dataForRow1: [
            {
                id: 0,
                addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900'
            },
            {
                id: 1,
                addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900'
            },
            {
                id: 2,
                addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900'
            },
            {
                id: 3,
                addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900'
            },
            {
                id: 4,
                addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900'
            },
        ],

        dataForRow2: [
            {
                id: 0,
                addr: "叶菜"
            },
            {
                id: 1,
                addr: "根茎"
            },
            {
                id: 2,
                addr: "茄果"
            },
            {
                id: 3,
                addr: "辣椒"
            },
            {
                id: 4,
                addr: "豆类"
            },
            {
                id: 5,
                addr: "瓜类"
            },
            {
                id: 6,
                addr: "蘑菇"
            },
            {
                id: 7,
                addr: "葱姜蒜"
            },
            {
                id: 8,
                addr: "葱姜蒜"
            },
            {
                id: 9,
                addr: "葱姜蒜"
            },
            {
                id: 10,
                addr: "葱姜蒜"
            },
            {
                id: 11,
                addr: "葱姜蒜"
            },
        ],

        dataForRow3: [
            {
                id: 0,
                addr: "精品推荐"
            },
            {
                id: 1,
                addr: "新鲜上市"
            },
            {
                id: 2,
                addr: "助农扶贫"
            },
            {
                id: 3,
                addr: "特价专区"
            },
            {
                id: 4,
                addr: "特价特价"
            },
            {
                id: 5,
                addr: "特价特价"
            },
        ],


    }

    item = (addr, type) => {
        if (type == 1) {
            return (
                <View style={styles.item1}>
                    <Image source={{ uri: addr }} style={{ width: 130, height: 150 }} />
                </View>
            );

        } else if (type == 2) {
            return (
                <View style={styles.item2}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: "black"
                    }}>{addr}</Text>
                </View>
            )
        } else if (type == 3) {
            return (
                <View style={styles.item3}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "black"
                    }}>{addr}</Text>
                </View>
            )
        } else if (type == 4) {
            return (

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column" }}>
                        <Image source={{ uri: addr }} style={{ width: 103, height: 103 }} />
                        <Text style={{ fontWeight: "bold" }}>{"箱装西兰花A级"}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#85DCB0", fontSize: 10 }}>{"云南茂源果蔬"}</Text>
                            <Text style={{ color: "red", fontSize: 10 }}>{"135"}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Image source={{ uri: addr }} style={{ width: 103, height: 103 }} />
                        <Text style={{ fontWeight: "bold" }}>{"箱装西兰花A级"}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#85DCB0", fontSize: 10 }}>{"云南茂源果蔬"}</Text>
                            <Text style={{ color: "red", fontSize: 10 }}>{"135"}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Image source={{ uri: addr }} style={{ width: 103, height: 103 }} />
                        <Text style={{ fontWeight: "bold" }}>{"箱装西兰花A级"}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "#85DCB0", fontSize: 10 }}>{"云南茂源果蔬"}</Text>
                            <Text style={{ color: "red", fontSize: 10 }}>{"135"}</Text>
                        </View>
                    </View>


                </View>
            )
        }

    }

    renderItem = ({ item, type }) => {
        if (type == 1) {
            return this.item(item.addr, 1);
        } else if (type == 2) {
            return this.item(item.addr, 2);
        } else if (type == 3) {
            return this.item(item.addr, 3);
        } else if (type == 4) {
            return this.item(item.addr, 4);
        }
    }
    type1 = ({ item }) => {
        return this.renderItem({ item: item, type: 1 });
    }
    type2 = ({ item }) => {
        return this.renderItem({ item: item, type: 2 });
    }
    type3 = ({ item }) => {
        return this.renderItem({ item: item, type: 3 });
    }
    type4 = ({ item }) => {
        return this.renderItem({ item: item, type: 4 });
    }

    render() {
        return (

            <View style={styles.containerForVertical}>

                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={styles.containerForHorizontalDeep}>
                    <Text style={{ fontSize: 20, color: "#D7F0E8", width: 210, textAlign: 'left' }}>
                        {"广州江南果菜批发市场"}
                    </Text>
                    <View style={styles.trapezoid}>
                        <Text style={{ fontSize: 20, color: "black", backgroundColor: 'transparent', width: 130, textAlign: 'left' }}>
                            {"扫码进场"}
                        </Text>
                        <MaterialCommunityIcons name="line-scan" size={30} color="black" />
                    </View>

                </View>
                <View style={styles.containerForHorizontalShadow}>

                    <Text style={{ fontSize: 25, color: "#F08433", width: 80, fontWeight: "bold", textAlign: "left" }}>
                        {"卖菜帮"}
                    </Text>

                    <CheckBox containerStyle={{ backgroundColor: '#87ECBA', width: 61 }}

                        center
                        title={<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#015441' }}>{"货源"}</Text>}
                        checkedColor="#015441"
                        uncheckedColor='#015441'
                        iconType="material"
                        checkedIcon='radio-button-checked'
                        uncheckedIcon='radio-button-unchecked'
                        checked={this.state.checked1}
                        onPress={() => this.setState({ checked1: !this.state.checked1 })}
                    />


                    <CheckBox containerStyle={{ backgroundColor: '#87ECBA', width: 61, alignItems: 'flex-end', }}


                        title={<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#015441' }}>{"商家"}</Text>}
                        checkedColor="#015441"
                        uncheckedColor='#015441'
                        iconType="material"
                        checkedIcon='radio-button-checked'
                        uncheckedIcon='radio-button-unchecked'
                        checked={!this.state.checked1}
                        onPress={() => this.setState({ checked1: !this.state.checked1 })}
                    />
                    <SearchBar
                        containerStyle={{ backgroundColor: '#87ECBA', borderBottomColor: '#87ECBA', borderTopColor: '#87ECBA', width: 155, }}
                        inputContainerStyle={{ backgroundColor: '#FFFFFF', width: 165, margin: -10 }}
                        inputStyle={{ fontSize: 13, color: "grey" }}
                        leftIconContainerStyle={{ alignContent: 'flex-start', width: 19 }}
                        placeholder="输入关键字搜索"
                    //onChangeText={}
                    //value={}
                    />
                </View>

                <View style={{ flexDirection: "row", height: "78%", width: 80 }}>
                    <View style={styles.containerForLeftBottom}>
                        <View style={{ alignItems: "center", justifyContent: "center", height: 50, width: 100 }}>
                            <Text style={{ height: 25, width: 80, fontSize: 18, fontWeight: "bold" }}>
                                {"所有分类"}
                            </Text>
                        </View>


                        <FlatList
                            data={this.state.dataForRow2}
                            renderItem={this.type2}
                            keyExtractor={item => item.id}
                        />

                    </View>

                    <View style={styles.containerForRightBottom}>

                        <FlatList
                            data={this.state.dataForRow1}
                            renderItem={this.type4}
                            keyExtractor={item => item.id}

                        />

                    </View>
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

                {/* <View>
                    <ActionButton buttonColor="rgba(231,76,60,1)">
                        
                    </ActionButton>
                </View> */}
            </View>

        );
    }

}

const styles = StyleSheet.create({
    containerForHorizontalDeep: {

        flexDirection: 'row',
        backgroundColor: '#1D9265',
        height: 50,
        alignItems: "center"

    },
    containerForHorizontalShadow: {

        flexDirection: 'row',
        backgroundColor: '#87ECBA',
        alignItems: "center"


    },
    containerForVertical: {
        flexDirection: 'column',
        backgroundColor: '#1D9265',

    },

    viewSize: {
        width: 40,
        height: 40,
        backgroundColor: 'purple',
        margin: 5
    },

    containerForLeftBottom: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        width: 100
    },
    containerForRightBottom: {
        flexDirection: "column",
        width: 310,
        alignItems: "stretch",
        backgroundColor: "white",

    },
    trapezoid: {
        width: 200,
        height: 100,
        alignItems: 'center',
        flexDirection: "row",

        borderBottomWidth: 100,
        borderBottomColor: '#87ECBA',
        borderLeftWidth: 100,
        borderLeftColor: 'transparent',
        borderRightWidth: 0,
        borderRightColor: 'transparent',

    },

    item1: {
        backgroundColor: 'white',
        height: 150,
        width: 130,
        marginLeft: 2.5,
        marginRight: 2.5,
        marginBottom: 2.5,
        marginTop: 2.5,
        alignItems: "center"
    },
    item2: {
        backgroundColor: '#E3E6E5',
        height: 50,
        width: 100,
        marginBottom: 2.5,
        //marginVertical: '2.5%',
        //marginHorizontal: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    item3: {
        backgroundColor: '#87ECBA',
        height: 50,
        width: 70,
        //marginVertical: '2.5%',
        //marginHorizontal: 2,
        marginLeft: 2.5,
        alignItems: "center",
        justifyContent: "center",

    },
    item4: {
        backgroundColor: '#87ECBA',
        height: 150,
        width: 400,
        //marginVertical: '2.5%',
        //marginHorizontal: 2,
        marginLeft: 2.5,
        alignItems: "center",
        justifyContent: "center",

    },
    title: {
        fontSize: 32,
    },
});
export default UI1;
