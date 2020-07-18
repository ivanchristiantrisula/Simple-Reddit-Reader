import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default App = (props) => {
  useEffect(() => {}, []);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>{props.item.data.display_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    paddingLeft: 50,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 30,
  },
});
