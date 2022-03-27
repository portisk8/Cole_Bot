import { ActionType } from './enums/actionType';
import { ActionIntent } from './utils/ActionIntents';
import dayjs from 'dayjs';
import timeZone from 'dayjs/plugin/timezone';
import dayJSUtc from 'dayjs/plugin/utc';
import ColectivoSchema from './Schemas/ColectivoSchema';
import HorarioSchema from './Schemas/HorarioSchema';

dayjs.extend(dayJSUtc);
dayjs.extend(timeZone);
export class Action {
  private actionIntent = new ActionIntent();
  constructor() {}

  async getResult(text: string): Promise<string> {
    const actionType = this.actionIntent.getIntent(text);
    switch (actionType) {
      case ActionType.EstadoPuente:
        return this.getEstadoPuente();
      case ActionType.Horario:
        return this.getHorarioColectivo(text);
      default:
        return 'No lo reconozco';
    }
  }
  async getHorarioColectivo(text: string): Promise<string> {
    text = text.toLowerCase();
    const diaSemanaActual = dayjs().tz('America/Argentina/Buenos_Aires').day();
    let colectivos = await this.getAllColectivos();
    if (colectivos && colectivos.length > 0) {
      let colectivoSelectedByTipo = colectivos.find((c: { tipo: string }) =>
        text.includes(c.tipo.toLowerCase())
      );
      if (colectivoSelectedByTipo != null) {
        let horario = colectivoSelectedByTipo.horarios.find(
          (h: any) =>
            h.diaSemanaNumero == diaSemanaActual &&
            text.includes(h.partidaDesde.toLowerCase())
        );
        if (horario != null) {
          let result = getResultFormat(horario);
          console.log(result);
          return result;
        } else {
          return `No se han encontrado horarios en este día para el colectivo *${colectivoSelectedByTipo.tipo}*`;
        }
      }
    }
    return 'No se ha encontrado datos para este colectivo';
  }

  getEstadoPuente(): string {
    let dayFormatted = dayjs()
      .tz('America/Argentina/Buenos_Aires')
      .format('DD/MM/YYYY - HH:mm');
    return `Actualización ${dayFormatted} Hs Tránsito del Puente #Chaco #Corrientes - *NORMAL*`;
  }

  async getAllColectivos(): Promise<any> {
    let colectivos = await ColectivoSchema.find();
    for (const colec of colectivos) {
      colec.horarios = await HorarioSchema.find({ colectivoId: colec._id });
    }
    return colectivos;
  }
}
function getResultFormat(horario: any): string {
  let stringResult = '';
  let proximoSeteado = false;
  stringResult += horario.title + '\n';
  stringResult += horario.subtitle + '\n';
  stringResult += '---------------------------------------\n';
  let horasOrdenadas = horario.horas.sort(
    (x: Date, y: Date) => +new Date(x) - +new Date(y)
  );
  let horaActual = dayjs().tz('America/Argentina/Buenos_Aires').hour();
  let minutoActual = dayjs().tz('America/Argentina/Buenos_Aires').minute();
  for (const hora of horasOrdenadas) {
    let horaCole = dayjs(hora).hour();
    let minutoCole = dayjs(hora).minute();
    if (
      !proximoSeteado &&
      (horaCole > horaActual ||
        (horaCole == horaActual && minutoCole >= minutoActual))
    ) {
      stringResult +=
        '\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\n';
      stringResult += '     Este es el próximo:\n';
      stringResult += '                ' + dayjs(hora).format('HH:mm') + '\n';
      stringResult +=
        '\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\n';
      proximoSeteado = true;
    } else {
      stringResult += '                ' + dayjs(hora).format('HH:mm') + '\n';
    }
  }
  return stringResult;
}
