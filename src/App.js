import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Avatar from "./components/Avatar";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Avatar initials={"FL"} size={35} backgroundColor={"teal"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
