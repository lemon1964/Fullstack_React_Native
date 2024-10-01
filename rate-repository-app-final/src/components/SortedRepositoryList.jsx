import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";

const SortedRepositoryList = ({ selectedSort, setSelectedSort }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Pressable onPress={toggleModal} style={styles.sortButton}>
        <Text style={styles.sortButtonText}>Sorted by {selectedSort}</Text>
      </Pressable>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select an item...</Text>

          <Picker
            selectedValue={selectedSort}
            onValueChange={itemValue => {
              setSelectedSort(itemValue);
              toggleModal();
            }}
            style={styles.picker}
          >
            <Picker.Item label="Latest repositories" value="latest" />
            <Picker.Item label="Highest rated repositories" value="highest" />
            <Picker.Item label="Lowest rated repositories" value="lowest" />
          </Picker>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  sortButton: {
    backgroundColor: "#e1e4e8",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  sortButtonText: {
    fontSize: 16,
    color: "#0366d6",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    height: 250,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  picker: {
    width: "100%",
    height: 50,
  },
});

export default SortedRepositoryList;
