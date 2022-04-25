import { color } from '@react-native-elements/base/dist/helpers';
import React, { Component } from 'react';
import { SafeAreaView, Button, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
import { pxToDp } from "./styleKits";
import Modal from "react-native-modal";


class FlatPage extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    pageMax: 0,
    page: 0,
    pageForLoad: 0,
    DATA: [
      {
        id: 0,
        title: 0,
      },
    ],
    pageData: [],
    isModalVisible: false
  }

  componentDidMount() {
    this.createData();
    this.changePage();
    this.setState({ pageData: this.state.pageData });
  }

  createData = () => {
    for (let index = 1; index < 1000; index++) {
      this.state.DATA.push({
        id: index,
        title: index,
      })
    }
    //alert(this.state.DATA.length);
    this.state.pageMax = parseInt(this.state.DATA.length / 30);
    //alert(this.state.pageMax);
  }


  item = (title) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>

      </View>
    );
  }
  /**(
      
      <this.item title={item.title} />
    ) */
  renderItem = ({ item }) => {
    return this.item(item.title);
  };



  nextPage = () => {
    this.changePage();
    this.setState({ pageData: this.state.pageData });

    if (this.state.page < this.state.pageMax) {
      this.state.page++;
    } else {
      alert("Last Page");
    }
  }

  lastPage = () => {
    this.changePage();
    this.setState({ pageData: this.state.pageData });

    if (!(this.state.page == 0)) {
      this.state.page--;
    } else {
      alert("First Page");
    }
  }

  changePage = () => {
    let indexFortwo = 0;
    if (this.state.page == this.state.pageMax) {
      alert(this.state.page);
    }
    //console.log(this.state.page);
    //console.log(this.state.pageMax);
    if (this.state.page < this.state.pageMax) {
      for (let index = this.state.page * 5; index < this.state.page * 5 + 5; index++) {

        this.state.pageData[indexFortwo] = this.state.DATA[index];
        //console.log("DATA: " + this.state.DATA[index].title);
        indexFortwo++;
      }
    } else {
      alert(this.state.pageMax * 5);
      for (let index = this.state.pageMax * 5; index < this.state.DATA.length; index++) {
        this.state.pageData[indexFortwo] = this.state.DATA[index];
        //console.log("DATA: " + this.state.DATA[index].title);
        indexFortwo++;
      }
    }
  }

  loadMoreData = () => {
    this.state.pageForLoad++;
    if (this.state.pageForLoad < this.state.pageMax) {
      for (let index = this.state.pageForLoad * 5; index < this.state.pageForLoad * 5 + 5; index++) {
        this.state.pageData.push(this.state.DATA[index]);
      }
    } else {
      for (let index = this.state.pageMax * 5; index < this.state.DATA.length; index++) {
        this.state.pageData.push(this.state.DATA[index]);
      }
    }
  }

  toggleModal = () => {

    this.setState({ isModalVisible: this.state.isModalVisible = !this.state.isModalVisible });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal 
        isVisible={this.state.isModalVisible}
        onBackdropPress={() => this.toggleModal()}
        >
          <View 
          style={styles.listProperties}
          >
            <FlatList
              data={this.state.pageData}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              onEndReached={() => this.loadMoreData()}
            />
          </View>

          <Button style={styles.button} title="Hide modal" onPress={() => this.toggleModal()} />
        </Modal>


        <Text style={{ fontSize: pxToDp(25), color: "#888", fontWeight: "bold" }}>
          {this.state.page}
        </Text>

        <Button style={styles.button} title="Show modal" onPress={() => this.toggleModal()} />

        <Button title='Next Page' style={{ width: "50%" }}
          onPress={() => {
            this.nextPage();
          }
          }>
        </Button>



        <Button title='Last Page'
          onPress={() => {
            this.lastPage();
          }
          }>
        </Button>


      </SafeAreaView>

    );
  }



};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

  },
  listProperties: {
    height: '50%',
    width: '85%'
  },
  item: {
    backgroundColor: 'grey',
    height: 45,
    marginVertical: '2.5%',
    marginHorizontal: '7.5%',
  },
  title: {
    fontSize: 32,
  },
  button: {
    width: 250,
    height: 30,
    borderRadius: 20,
  }
});

export default FlatPage;