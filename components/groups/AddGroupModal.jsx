// src/groups/AddGroupModal.jsx
import React from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const AddGroupModal = ({ visible, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Botón cerrar */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>Añadir nuevo grupo</Text>

          <TextInput style={styles.input} placeholder="Grado (ej. 1, 2, 3)" keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Horario (ej. 9:00-10:00)" />
          <TextInput style={styles.input} placeholder="Salón (ej. FF1)" />

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "40%",
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  closeText: {
    fontSize: 18,
    color: "#0D47A1",
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0D47A1",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#2196F3",
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#0D47A1",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default AddGroupModal;
