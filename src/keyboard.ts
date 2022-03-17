import { Context, Markup, Telegraf, Telegram } from "telegraf";
import { KeyBoardType } from "./enums/keyBoardType";

export class KeyBoard {
  constructor() {}

  getKeyBoardByType(type: KeyBoardType) {
    switch (type) {
      case KeyBoardType.Main:
        return Markup.keyboard([
          ["Estado del Puente"],
          ["Sarmiento Puerto", "Sarmiento UNNE"],
          ["Barranqueras Puerto", "Barranqueras UNNE"],
          ["Campus Corrientes", "Campus Resistencia"],
          ["Puntos de Recarga"],
          ["Deja un Comentario ..."],
          ["Ayuda"],
        ]);
      default:
        break;
    }
  }
}
