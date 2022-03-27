import { Schema, model } from "mongoose";
const HorarioSchema = new Schema({
  colectivoId: {
    type: Schema.Types.ObjectId,
    ref: "Colectivo",
  },
  partidaDesde: String, //UNNE - PUERTO // UNNE Corrientes - Terminal Resistencia
  diaSemana: String, // "Lunes", "Martes" ....
  diaSemanaNumero: Number, // 0 (Sunday) - 6 (Saturday)
  horas: [Date],
});
export default model("Horario", HorarioSchema);
