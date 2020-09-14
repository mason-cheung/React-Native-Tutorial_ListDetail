//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

const Select = (props) => {
  const [selected, setSelected] = useState("Select category");
  const [visible, setVisible] = useState(false);

  const Items = props.items.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.selectItem}
        key={index}
        onPress={() => {
          setSelected(item.value);
          props.onSelect(item.value);
          setVisible(false);
        }}
      >
        <Text style={{fontFamily: 'serif'}}>{item.label}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.selectView}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text style={styles.cateText}>{selected}</Text>
        <Image
          style={styles.selectImage}
          source={require("../assets/dropdown.png")}
        />
      </TouchableOpacity>
      <Modal animationType="slide" visible={visible}>
        <View style={styles.modalView}>
          <ScrollView>{Items}</ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectImage: {
    width: 16,
    height: 16,
    position: "absolute",
    justifyContent: "center",
    right: 10,
  },
  selectView: {
    padding: 15,
    borderColor: "#444",
    borderWidth: 1,
    borderRadius: 10,
  },
  selectItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  modalView: {
    marginTop: 100,
    backgroundColor: "lightblue",
  },
  cateText: {
    fontFamily: "serif",
  },
});

//make this component available to the app
export default Select;
