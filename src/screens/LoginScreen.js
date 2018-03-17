import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity
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
          style={styles.imageDesign}
        >
          <View style={styles.innerContainer}>
            <View style={styles.textContainerOne}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 26
                }}
              >
                Bracket Factory
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.outerBottomCardContainer}>
              <View style={styles.textContainerTwo}>
                <Text
                  style={{
                    fontSize: 24
                  }}
                >
                  Get moving with Bracket Factory
                </Text>
              </View>
            </View>
            <View style={styles.innerBottomCardContainer}>
              <Text
                style={{
                  color: "#5a7fdf",
                  fontWeight: "bold"
                }}
              >
                Connect using a social account
              </Text>
            </View>
          </View>
        </ImageBackground>x
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageDesign: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainerOne: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  innerBottomCardContainer: {
    height: 70,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    borderTopColor: "#e8e8ec",
    borderTopWidth: 1,
    paddingHorizontal: 25
  },
  outerBottomCardContainer: {
    height: 150,
    backgroundColor: "white"
  },
  textContainerTwo: {
    opacity: 1, //animated
    alignItems: "flex-start",
    paddingHorizontal: 25,
    marginTop: 25 //animated
  }
});

export default LoginScreen;
