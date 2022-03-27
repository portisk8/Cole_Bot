import { Schema, model } from "mongoose";
const FeriadoSchema = new Schema({
  feriadoTipo: String,
  feriado: Date,
});
export default model("Feriado", FeriadoSchema);
