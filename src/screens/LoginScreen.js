import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from "react-native";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/u-design.jpeg")}
          style={styles.imageBackground}
        >
          <View>{}</View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackround: {
    flex: 1
  }
});

export default LoginScreen;
