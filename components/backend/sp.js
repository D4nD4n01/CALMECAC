// backend/procedures.js
const db = require("./db");

// Login de maestro
async function loginTeacher(email, password) {
  const [rows] = await db.query("CALL LoginTeacher(?, ?)", [email, password]);
  return rows[0];
}

// Agregar nuevo maestro
async function addTeacher(name, mail, password) {
  await db.query("CALL sp_AddTeacher(?, ?, ?)", [name, mail, password]);
}

// Agregar nueva clase
async function addClass(idTeacher, className, subject, schedule) {
  await db.query("CALL sp_AddClass(?, ?, ?, ?)", [
    idTeacher,
    className,
    subject,
    schedule
  ]);
}

// Agregar estudiante
async function addStudent(name, lastname) {
  await db.query("CALL sp_AddStudent(?, ?)", [name, lastname]);
}

// Asignar estudiante a clase
async function addStudentToClass(idTeacher, idClass, idStudent) {
  await db.query("CALL sp_AddStudentToClass(?, ?, ?)", [
    idTeacher,
    idClass,
    idStudent
  ]);
}

// Registrar asistencia
async function registerAttendance(idClass, fecha, idTeacher, nombreAlumno, asistencia) {
  await db.query("CALL RegisterAttendance(?, ?, ?, ?, ?)", [
    idClass,
    fecha,
    idTeacher,
    nombreAlumno,
    asistencia
  ]);
}

// Obtener asistencia por clase y fecha
async function getAttendanceByDate(idClass, fecha) {
  const [rows] = await db.query("CALL GetAttendanceByClassAndDate(?, ?)", [
    idClass,
    fecha
  ]);
  return rows[0];
}

// Registrar conducta/participación
async function registerBehavior(idTeacher, idClass, nombreAlumno, tipo, descripcion) {
  await db.query("CALL RegisterBehavior(?, ?, ?, ?, ?)", [
    idTeacher,
    idClass,
    nombreAlumno,
    tipo,
    descripcion
  ]);
}

// Obtener historial de conducta
async function getBehaviorHistory(idTeacher, idClass, nombreAlumno) {
  const [rows] = await db.query("CALL GetBehaviorHistory(?, ?, ?)", [
    idTeacher,
    idClass,
    nombreAlumno
  ]);
  return rows[0];
}

module.exports = {
  loginTeacher,
  addTeacher,
  addClass,
  addStudent,
  addStudentToClass,
  registerAttendance,
  getAttendanceByDate,
  registerBehavior,
  getBehaviorHistory
};