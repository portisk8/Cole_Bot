import { ActionType } from './enums/actionType';
import { ActionIntent } from './utils/ActionIntents';
import dayjs from 'dayjs';

export class Action {
  private actionIntent = new ActionIntent();
  constructor() {}

  getResult(text: string): string {
    const actionType = this.actionIntent.getIntent(text);
    switch (actionType) {
      case ActionType.EstadoPuente:
        return this.getEstadoPuente();
      default:
        return 'No lo reconozco';
    }
  }

  getEstadoPuente(): string {
    let dayFormatted = dayjs().format('DD/MM/YYYY - HH:mm');
    return `Actualización ${dayFormatted} Hs Tránsito del Puente #Chaco #Corrientes - *NORMAL*`;
  }
}
