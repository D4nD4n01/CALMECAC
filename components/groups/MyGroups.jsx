import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MyGroups = () => {
  const [groups, setGroups] = useState([]); // Inicialmente vacío

  const addGroup = () => {
    alert("Botón aún no definido; próximamente estará terminado");
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#E3F2FD" }}>
      {/* Encabezado */}
      <View
        style={{
          backgroundColor: "#2196F3", // Azul claro
          paddingVertical: 16,
          paddingHorizontal: 24,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Mis Grupos
        </Text>
      </View>

      {/* Botón */}
      <View style={{ marginBottom: 32, alignItems: "center" }}>
        <TouchableOpacity
          onPress={addGroup}
          style={{
            backgroundColor: "#0D47A1", // Azul oscuro
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Agregar grupo
          </Text>
        </TouchableOpacity>
      </View>

      {/* Mostrar grupos si existen, sino mostrar mensaje */}
      {groups && groups.length > 0 ? (
        groups.map((group, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "white",
              padding: 16,
              marginBottom: 12,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Nombre: {group.nombre}
            </Text>
            <Text>Salón: {group.salon}</Text>
            <Text>Hora: {group.hora}</Text>
          </View>
        ))
      ) : (
        <View style={{ marginTop: 50, alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "#6c757d" }}>
            No tienes grupos actualmente
          </Text>
        </View>
      )}
    </View>
  );
};

export default MyGroups;
