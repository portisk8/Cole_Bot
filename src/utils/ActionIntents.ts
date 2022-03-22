import { ActionType } from '../enums/actionType';

export class ActionIntent {
  getIntent(text: String): ActionType {
    let textLower = text.toLowerCase();
    if (
      ['puente', 'estado del puente', '✅ estado del puente ✅'].includes(
        textLower
      )
    )
      return ActionType.EstadoPuente;
    if (
      [
        'sarmiento puerto',
        'sarmiento unne',
        'barranqueras puerto',
        'barranqueras unne',
        'campus corrientes',
        'campus resistencia'
      ].includes(textLower)
    )
      return ActionType.Horario;

    return ActionType.Undefined;
  }
}
