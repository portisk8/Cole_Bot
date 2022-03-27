import { Schema, model } from "mongoose";
const ColectivoSchema = new Schema(
  {
    name: String,
    tipo: String,
    empresa: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Colectivo", ColectivoSchema);
