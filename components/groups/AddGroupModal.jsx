// src/groups/AddGroupModal.jsx
import React from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Platform } from "react-native";

const isWeb = Platform.OS === "web";

const AddGroupModal = ({ visible, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: isWeb ? "40%" : "80%",
            backgroundColor: "#FFF5F5", // Fondo claro
            borderRadius: 10,
            padding: 20,
            elevation: 5,
            position: "relative",
          }}
        >
          {/* Botón cerrar */}
          <TouchableOpacity
            onPress={onClose}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              backgroundColor: "#8B0000",
              borderRadius: 20,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>X</Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#6B0000",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Añadir nuevo grupo
          </Text>

          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "#A52A2A",
              marginBottom: 15,
            }}
            placeholder="Grado (ej. 1, 2, 3)"
            keyboardType="numeric"
          />

          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "#A52A2A",
              marginBottom: 15,
            }}
            placeholder="Horario (ej. 9:00-10:00)"
          />

          <TextInput
            style={{
              backgroundColor: "#fff",
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "#A52A2A",
              marginBottom: 20,
            }}
            placeholder="Salón (ej. FF1)"
          />

          <TouchableOpacity
            style={{
              backgroundColor: "#8B0000",
              padding: 12,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Guardar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddGroupModal;
