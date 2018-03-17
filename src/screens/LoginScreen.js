import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
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
              <TouchableOpacity>
                <View style={styles.touchView}>
                  <Image
                    source={require("../../assets/flag.jpeg")}
                    style={styles.flagImage}
                  />
                  <View style={styles.textInputContainer}>
                    <Text
                      style={{
                        fontSize: 20,
                        paddingHorizontal: 10
                      }}
                    >
                      +91
                    </Text>
                    <TextInput
                      style={styles.textInputDesign}
                      placeholder="Enter your mobile number"
                      //because I am currently (03/15/2018) working on an Android Phone
                      underlineColorAndroid="transparent"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.innerBottomCardContainer}>
              <Text
                style={{
                  color: "#5a7fdf",
                  fontWeight: "bold"
                }}
              >
                Connect using Facebook
              </Text>
            </View>
          </View>
        </ImageBackground>
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
  },
  touchView: {
    marginTop: 25, //animated
    paddingHorizontal: 25,
    flexDirection: "row"
  },
  flagImage: {
    height: 24,
    width: 24,
    resizeMode: "contain"
  },
  textInputContainer: {
    flexDirection: "row",
    flex: 1
  },
  textInputDesign: {
    flex: 1,
    fontSize: 20
  }
});

export default LoginScreen;
