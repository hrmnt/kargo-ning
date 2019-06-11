import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import { Header } from "../../commons";
import { Constants, ImagePicker } from "expo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "react-native-vector-icons/Ionicons";

class AddProduct extends Component {
  state = {
    image: null,
    images: [],
    modalVisible: false,
    numberList: [],
    itemList: [],
    name:"",
    description:"",
    price:"",
    count:"",
    product:{
      name:"",
      price:"",
      count:""
    }
  };

  addNumber = number => {
    const { numberList } = this.state;
    numberList.push(number);
    this.setState({
      number
    });
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    console.log(result);
    const { images } = this.state;
    const newImage = images.push(result.uri);
    console.log(images);
    if (!result.cancelled) {
      this.setState({ images: newImage });
    }
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  addProduct = async () =>{
    const item  = this.state.product;
    const list = this.state.itemList;
    list.push(item);
    await this.setState({
      itemList: list,
      product:{
        name:"",
        price:"",
        count:""
      }
    })
    this.setModalVisible(!this.state.modalVisible);

  }

  render() {
    let { image, images, itemList, numberList } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.1)"
            }}
          >
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Добавить продукт</Text>
              <View style={[styles.inputWrap, { paddingHorizontal: 0 }]}>
                <View style={styles.row}>
                  <Text style={[styles.title, { fontWeight: "400" }]}>
                    Название
                  </Text>
                </View>

                <TextInput
                  value={this.state.product.name}
                  onChangeText={(name)=>this.setState(state => {
                    state.product.name = name;
                    return state;
                  })}
                  placeholderTextColor="#000"
                  underlineColorAndroid="transparent"
                  style={styles.input}
                  placeholder="Посуда"
                />
              </View>
              <View style={[styles.inputWrap, { paddingHorizontal: 0 }]}>
                <View style={styles.row}>
                  <Text style={[styles.title, { fontWeight: "400" }]}>
                    Цена
                  </Text>
                </View>

                <TextInput
                 value={this.state.product.price}
                 onChangeText={(price)=>this.setState(state => {
                   state.product.price = price;
                   return state;
                 })}
                  placeholderTextColor="#000"
                  underlineColorAndroid="transparent"
                  style={styles.input}
                  placeholder="1500"
                />
              </View>
              <View style={[styles.inputWrap, { paddingHorizontal: 0 }]}>
                <View style={styles.row}>
                  <Text style={[styles.title, { fontWeight: "400" }]}>
                    Количество
                  </Text>
                </View>

                <TextInput
                  value={this.state.product.count}
                  onChangeText={(count)=>this.setState(state => {
                    state.product.count = count;
                    return state;
                  })}
                  keyboardType="numeric"
                  placeholderTextColor="#000"
                  underlineColorAndroid="transparent"
                  style={styles.input}
                  placeholder="0"
                />
              </View>
              <TouchableOpacity
                style={[
                  styles.priceAdd,
                  { alignSelf: "flex-start", width: "100%" }
                ]}
                onPress={() => {
                  this.addProduct()
                }}
              >
                <Text style={styles.priceAddText}>Добавить</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <KeyboardAwareScrollView
          innerRef={ref => {
            this.scroll = ref;
          }}
        >
          <Header
            bgColor={"#EF741C"}
            txtColor={"#fff"}
            title={"Добавить продукт"}
          />
          <View style={styles.inputWrap}>
            <View style={styles.row}>
              <Text style={styles.title}>Название продукта</Text>
              <Text style={[styles.title, styles.required]}>*</Text>
            </View>

            <TextInput
               value={this.state.name}
               onChangeText={(name) => this.setState({name})}
              placeholderTextColor="#000"
              underlineColorAndroid="transparent"
              style={styles.input}
              placeholder="Посуда"
            />
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.row}>
              <Text style={styles.title}>Описание продукта</Text>
              <Text style={[styles.title, styles.required]}>*</Text>
            </View>
            <View style={styles.textAreaContainer}>
              <TextInput
              value={this.state.description}
              onChangeText={(description) => this.setState({description})}
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something"
                placeholderTextColor="grey"
                numberOfLines={1}
                multiline={true}
              />
            </View>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.row}>
              <Text style={styles.title}>Добавить фотографии</Text>
              <Text style={[styles.title, styles.required]}>*</Text>
            </View>

            <ScrollView
              style={{
                height: 60
              }}
            >
              <TouchableOpacity
                style={styles.imageUpload}
                // title="Pick an image from camera roll"
                onPress={this._pickImage}
              >
                <Ionicons color="#fff" name="ios-camera" size={40} />
              </TouchableOpacity>
              {images.map((item, index) => {
                return (
                  <Image
                    key={index}
                    source={{ uri: item }}
                    style={{ width: 60, height: 60 }}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.row}>
              <Text style={styles.title}>Прайслист</Text>
              <Text style={[styles.title, styles.required]}>*</Text>
            </View>
            <View>
              {itemList.map(item => {
                return (
                  <TouchableOpacity style={styles.priceItem}>
                    <View>
                      <Text>Керамика</Text>
                      <Text>4шт</Text>
                      <Text>-</Text>
                      <Text>7000</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={styles.priceAdd}
              >
                <Text style={styles.priceAddText}>Добавить</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputWrap}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.title,
                  { fontSize: 12, fontWeight: "400", width: "60%" }
                ]}
              >
                Ваш контактный номер будет использоваться как средства связи
              </Text>
            </View>
            <View style={styles.numberBox}>
              <View style={styles.mainPhone}>
                <Text>{this.props.profile.phone} - Основной</Text>
              </View>
              <View>
                {numberList.map((item, index) => {
                  return (
                    <TouchableOpacity>
                      <Text></Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <TextInput
              placeholderTextColor="#000"
              underlineColorAndroid="transparent"
              style={styles.input}
              keyboardType="numeric"
              placeholder="+7 777 777 77 77"
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  row: {
    flexDirection: "row"
  },
  inputWrap: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 3
  },
  required: {
    color: "red",
    marginRight: 0
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    color: "#000",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  textAreaContainer: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    justifyContent: "flex-start"
  },
  textArea: {
    height: 150,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "flex-start",
    textAlignVertical: "top"
  },
  imageUpload: {
    width: 60,
    height: 60,
    backgroundColor: "#EF741C",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  priceItem: {
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  priceAdd: {
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EF741C",
    borderRadius: 3
  },
  priceAddText: {
    color: "#fff"
  },
  modalBox: {
    width: "90%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 3
  },
  modalTitle: {
    color: "#EF741C",
    fontSize: 18,
    marginBottom: 15
  },
  numberBox: {
    backgroundColor: "#EF741C",
    marginBottom: 15
  },
  mainPhone: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)"
  }
});
const mapStateToProps = ({ profile, translate, errors }) => {
  return { profile, translate, errors };
};

const mapDispatchToProps = dispatch => ({
 
});


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
