import { Schema, model } from 'mongoose';
const ConfiguracionSchema = new Schema(
  {
    welcomeMessage: String //Mensaje de bienvenida
  },
  {
    timestamps: true,
    versionKey: false
  }
);
export default model('Configuracion', ConfiguracionSchema);
