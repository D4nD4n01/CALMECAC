// src/groups/AddGroupModal.jsx
import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import paths from "../../paths"
import Loading from "../../utils/Loading"

const isWeb = Platform.OS === "web";

const AddGroupModal = ({ visible, onClose, update}) => {

  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [hour, setHour] = useState("");
  const [classroom, setClassroom] = useState("");
  const [loading, setLoading] = useState(false)

  const getUserID = async () => {
    try {
      if (Platform.OS === "web") {
        return localStorage.getItem("userID");
      } else {
        return await AsyncStorage.getItem("userID");
      }
    } catch (error) {
      console.error("Error obteniendo userID:", error);
    }
  };

  const handleSave = async () => {
    setLoading(true)
    if (!subject || !grade || !hour || !classroom) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const userID = await getUserID();

    const obj = {
      intMode:1,
      strSubject: subject,
      strClassroom: classroom,
      strHour: hour,
      intGrade: parseInt(grade),
      idTeacher: userID

    };

    try {
      const response = await fetch(paths.URL + paths.COURSE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();

      if (result.success) {
        update()
        setLoading(false)
        onClose(); 
      } else {
        alert("Error al guardar", result.message || "Inténtalo de nuevo");
        setLoading(false)
      }
    } catch (error) {
      alert("Error de red", error.message);
      setLoading(false)
    }
  };

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
            backgroundColor: "#FFF5F5",
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

          {loading ? <Loading/> : null}

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
            style={inputStyle}
            placeholder="Materia (ej. Física)"
            value={subject}
            onChangeText={setSubject}
          />

          <TextInput
            style={inputStyle}
            placeholder="Grado (ej. 1, 2, 3)"
            keyboardType="numeric"
            value={grade}
            onChangeText={setGrade}
          />

          <TextInput
            style={inputStyle}
            placeholder="Horario (ej. 9:00-10:00)"
            value={hour}
            onChangeText={setHour}
          />

          <TextInput
            style={inputStyle}
            placeholder="Salón (ej. FF1)"
            value={classroom}
            onChangeText={setClassroom}
          />

          <TouchableOpacity
            onPress={handleSave}
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

const inputStyle = {
  backgroundColor: "#fff",
  borderRadius: 8,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderWidth: 1,
  borderColor: "#A52A2A",
  marginBottom: 15,
};

export default AddGroupModal;
