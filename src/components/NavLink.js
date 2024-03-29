import React, { useContext } from "react";
import { withNavigation } from "react-navigation";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./Spacer";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 16,
    color: "#1E90FF"
  }
});

export default withNavigation(NavLink);
