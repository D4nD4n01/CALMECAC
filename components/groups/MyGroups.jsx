import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegurar Bootstrap

const MyGroups = () => {
  return (
    <div className="container mt-4">
      {/* Encabezado */}
      <div className="bg-brown text-white p-3 rounded-top">
        <h2 className="fw-bold">Mis Grupos</h2>
      </div>

      {/* Botón */}
      <div className="p-3 bg-light border">
        <button className="btn btn-brown">Agregar grupo</button>
      </div>

      {/* Mensaje de vacío */}
      <div className="text-center mt-5 text-muted">
        <p>No tienes grupos actualmente</p>
      </div>
    </div>
  );
};

export default MyGroups;
