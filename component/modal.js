import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import HandleImagePicker from "../component/ImagePicker";
const PickerModal = (props) => {
  // variable declaration
  const [modalVisible, setModalVisible] = useState(false);
  return (

    // Modal UI
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ marginBottom: "15%", fontSize: 20 }}>
              You can take or choose picture!{" "}
            </Text>

           {/* picker component */}
            <HandleImagePicker />

            {props.pickedImagePath == null ? (
              <TouchableOpacity
                // disabled={true}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalheadingText}>Close</Text>
              </TouchableOpacity>
            ) : null
            // (
            //   <TouchableOpacity
            //     onPress={() => setModalVisible(!modalVisible)}
            //   >
            //     <Text style={styles.modalheadingText}>Close</Text>
            //   </TouchableOpacity>
            // )
            }
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add your Picture</Text>
      </Pressable>
    </View>
  );
};


//  styles fo modal
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: '10%',
  },
  modalView: {
    width: "90%",
    height: "30%",
    marginHorizontal: "5%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: "5%",
    marginTop: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194F7",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalheadingText: {
    fontSize: 18,

  },
});

export default PickerModal;
