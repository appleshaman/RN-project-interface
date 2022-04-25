import React, { Component } from 'react';
import { Image, SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, } from 'react-native';
import { SearchBar, CheckBox, lightColors, createTheme, ThemeProvider, ListItem } from '@rneui/themed';
import { color } from '@rneui/base';

class UI6 extends Component {
    state = {
        addr: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fimages01%2F20210225%2F3abc136a5c0440dca769ee5e311136a2.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652589331&t=df7580cf5747f30327981ec4518bf900'


    }
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#1D9265" barStyle="dark-content" />
                <View style={{ backgroundColor: "#1D9265", height: 150 }}>
                    <Image
                        style={styles.theImage}
                        resizeMode="cover"
                        source={{ uri: this.state.addr }}
                    />
                </View>
                <View style={{ backgroundColor:"white"}}>
                    <Text style={styles.theGreenText}>{"采购计划管理"}</Text>
                    <Text style={styles.theGreenText}>{"我的采购统计表"}</Text>
                    <Text style={styles.theGreenText}>{"往来批发商对账表"}</Text>
                    <Text style={styles.theGreenText}>{"采购批次结算对账"}</Text>
                </View>
                <View style={{ backgroundColor: "#EFEFEF", height: 30, borderColor: "#F2F2F2", borderWidth: 1, elevation: 10 }}></View>
                <View style={{height:250, backgroundColor:"white"}}>
                    <Text style={styles.theGreenText}>{"个人信息"}</Text>
                    <Text style={styles.theGreenText}>{"我的密码"}</Text>
                    <Text style={styles.theGreenText}>{"关于我们"}</Text>
                    <Text style={styles.theGreenText}>{"退出系统"}</Text>
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
    theImage: {
        width: 90,
        height: 90,
        marginRight: 10,
        borderRadius: 50,
        margin: 20
    },
    theGreenText: {
        fontSize: 20,
        color: "#1D9265",
        margin: 10
    }

})
export default UI6;