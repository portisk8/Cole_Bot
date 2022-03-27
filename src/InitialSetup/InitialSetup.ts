import Colectivo from "../Schemas/ColectivoSchema";
import Horario from "../Schemas/HorarioSchema";
import { DayOfWeekEnum, DayOfWeekStringEnum } from "../enums/dayOfWeekEnum";

const colectivos = [
  {
    name: "Colectivo Sarmiento",
    tipo: "Sarmiento",
    empresa: "ATACO NORTE S.A.",
    horarios: [
      {
        partidaDesde: "UNNE",
        diaSemana: "Lunes",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(5, 0),
          new Date().setHours(5, 20),
          new Date().setHours(5, 35),
          new Date().setHours(5, 50),
          new Date().setHours(7, 0),
          new Date().setHours(7, 12),
          new Date().setHours(7, 22),
          new Date().setHours(7, 35),
          new Date().setHours(7, 50),
          new Date().setHours(9, 0),
          new Date().setHours(9, 12),
          new Date().setHours(9, 22),
          new Date().setHours(9, 35),
          new Date().setHours(9, 50),
          new Date().setHours(11, 0),
          new Date().setHours(11, 12),
          new Date().setHours(11, 22),
          new Date().setHours(11, 35),
          new Date().setHours(11, 50),
          new Date().setHours(13, 5),
          /*------------------------- */
          new Date().setHours(13, 30),
          new Date().setHours(13, 50),
          new Date().setHours(15, 0),
          new Date().setHours(15, 15),
          new Date().setHours(15, 35),
          new Date().setHours(15, 50),
          new Date().setHours(17, 0),
          new Date().setHours(17, 12),
          new Date().setHours(17, 22),
          new Date().setHours(17, 35),
          new Date().setHours(17, 50),
          new Date().setHours(19, 0),
          new Date().setHours(19, 12),
          new Date().setHours(19, 22),
          new Date().setHours(19, 35),
          new Date().setHours(19, 50),
          new Date().setHours(21, 20),
          new Date().setHours(21, 50),
          new Date().setHours(23, 50),
        ],
      },
      {
        partidaDesde: "Puerto",
        diaSemana: "Lunes",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(6, 5),
          new Date().setHours(6, 25),
          new Date().setHours(6, 40),
          new Date().setHours(6, 50),
          new Date().setHours(8, 0),
          new Date().setHours(8, 12),
          new Date().setHours(8, 22),
          new Date().setHours(8, 35),
          new Date().setHours(8, 50),
          new Date().setHours(10, 0),
          new Date().setHours(10, 12),
          new Date().setHours(10, 22),
          new Date().setHours(10, 35),
          new Date().setHours(10, 50),
          new Date().setHours(12, 0),
          new Date().setHours(12, 12),
          new Date().setHours(12, 22),
          new Date().setHours(12, 35),
          new Date().setHours(12, 50),
          new Date().setHours(14, 10),
          /**---------------------- */
          new Date().setHours(14, 30),
          new Date().setHours(14, 50),
          new Date().setHours(16, 0),
          new Date().setHours(16, 15),
          new Date().setHours(16, 35),
          new Date().setHours(16, 50),
          new Date().setHours(18, 0),
          new Date().setHours(18, 10),
          new Date().setHours(18, 12),
          new Date().setHours(18, 22),
          new Date().setHours(18, 35),
          new Date().setHours(18, 50),
          new Date().setHours(20, 0),
          new Date().setHours(20, 12),
          new Date().setHours(20, 22),
          new Date().setHours(20, 35),
          new Date().setHours(20, 50),
          new Date().setHours(22, 20),
          new Date().setHours(22, 50),
          new Date().setHours(0, 40),
        ],
      },
      //SABADO
      {
        partidaDesde: "UNNE",
        diaSemana: "Sabado",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(5, 20),
          new Date().setHours(5, 50),
          new Date().setHours(7, 0),
          new Date().setHours(7, 15),
          new Date().setHours(7, 30),
          new Date().setHours(7, 50),
          new Date().setHours(9, 0),
          new Date().setHours(9, 15),
          new Date().setHours(9, 30),
          new Date().setHours(9, 50),
          new Date().setHours(11, 0),
          new Date().setHours(11, 15),
          new Date().setHours(11, 30),
          new Date().setHours(11, 50),
          new Date().setHours(13, 10),
          new Date().setHours(13, 30),
          /**------------------------ */
          new Date().setHours(13, 50),
          new Date().setHours(15, 10),
          new Date().setHours(15, 50),
          new Date().setHours(17, 0),
          new Date().setHours(17, 35),
          new Date().setHours(17, 50),
          new Date().setHours(19, 0),
          new Date().setHours(19, 35),
          new Date().setHours(19, 50),
          new Date().setHours(21, 20),
          new Date().setHours(21, 50),
          new Date().setHours(23, 50),
        ],
      },
      {
        partidaDesde: "Puerto",
        diaSemana: "Sabado",
        diaSemanaNumero: 6,
        horas: [
          new Date().setHours(6, 25),
          new Date().setHours(6, 50),
          new Date().setHours(8, 0),
          new Date().setHours(8, 15),
          new Date().setHours(8, 30),
          new Date().setHours(8, 50),
          new Date().setHours(10, 0),
          new Date().setHours(10, 15),
          new Date().setHours(10, 30),
          new Date().setHours(10, 50),
          new Date().setHours(12, 0),
          new Date().setHours(12, 15),
          new Date().setHours(12, 30),
          new Date().setHours(12, 50),
          new Date().setHours(14, 10),
          new Date().setHours(14, 30),
          /**-------------------------- */
          new Date().setHours(14, 50),
          new Date().setHours(16, 10),
          new Date().setHours(16, 30),
          new Date().setHours(16, 50),
          new Date().setHours(18, 0),
          new Date().setHours(18, 15),
          new Date().setHours(18, 35),
          new Date().setHours(18, 50),
          new Date().setHours(20, 0),
          new Date().setHours(20, 15),
          new Date().setHours(20, 35),
          new Date().setHours(20, 50),
          new Date().setHours(22, 20),
          new Date().setHours(22, 45),
          new Date().setHours(22, 50),
          new Date().setHours(0, 40),
        ],
      },
      //DOMINGO Y FERIADO
      {
        partidaDesde: "UNNE",
        diaSemana: "Domingo",
        diaSemanaNumero: 0,
        horas: [
          new Date().setHours(5, 20),
          new Date().setHours(5, 50),
          new Date().setHours(7, 10),
          new Date().setHours(7, 30),
          new Date().setHours(7, 50),
          new Date().setHours(9, 10),
          new Date().setHours(9, 30),
          new Date().setHours(9, 50),
          new Date().setHours(11, 10),
          new Date().setHours(11, 30),
          new Date().setHours(11, 50),
          new Date().setHours(13, 10),
          new Date().setHours(13, 30),
          /**------------------------ */
          new Date().setHours(13, 50),
          new Date().setHours(15, 20),
          new Date().setHours(15, 45),
          new Date().setHours(17, 0),
          new Date().setHours(17, 35),
          new Date().setHours(17, 50),
          new Date().setHours(19, 0),
          new Date().setHours(19, 35),
          new Date().setHours(19, 50),
          new Date().setHours(21, 5),
          new Date().setHours(21, 20),
          new Date().setHours(21, 40),
          new Date().setHours(23, 30),
        ],
      },
      {
        partidaDesde: "Puerto",
        diaSemana: "Domingo",
        diaSemanaNumero: 0,
        horas: [
          new Date().setHours(6, 20),
          new Date().setHours(6, 50),
          new Date().setHours(8, 10),
          new Date().setHours(8, 30),
          new Date().setHours(8, 50),
          new Date().setHours(10, 10),
          new Date().setHours(10, 30),
          new Date().setHours(10, 50),
          new Date().setHours(12, 10),
          new Date().setHours(12, 30),
          new Date().setHours(12, 50),
          new Date().setHours(14, 25),
          /**------------------------------ */
          new Date().setHours(14, 50),
          new Date().setHours(16, 20),
          new Date().setHours(16, 45),
          new Date().setHours(18, 0),
          new Date().setHours(18, 15),
          new Date().setHours(18, 35),
          new Date().setHours(18, 50),
          new Date().setHours(20, 0),
          new Date().setHours(20, 15),
          new Date().setHours(20, 35),
          new Date().setHours(20, 50),
          new Date().setHours(22, 20),
          new Date().setHours(22, 35),
          new Date().setHours(0, 25),
        ],
      },
    ],
  },
  {
    name: "Colectivo Barranqueras",
    tipo: "Barranqueras",
    empresa: "ATACO NORTE S.A.",
    horarios: [
      {
        partidaDesde: "UNNE",
        diaSemana: "Lunes",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(5, 10),
          new Date().setHours(5, 30),
          new Date().setHours(5, 50),
          new Date().setHours(7, 10),
          new Date().setHours(7, 30),
          new Date().setHours(7, 50),
          new Date().setHours(9, 10),
          new Date().setHours(9, 30),
          new Date().setHours(9, 50),
          new Date().setHours(11, 10),
          new Date().setHours(11, 30),
          new Date().setHours(11, 50),
          /**----------------------- */
          new Date().setHours(13, 20),
          new Date().setHours(13, 50),
          new Date().setHours(15, 15),
          new Date().setHours(15, 20),
          new Date().setHours(15, 50),
          new Date().setHours(17, 10),
          new Date().setHours(17, 30),
          new Date().setHours(17, 50),
          new Date().setHours(19, 10),
          new Date().setHours(19, 30),
          new Date().setHours(19, 50),
          new Date().setHours(21, 15),
          new Date().setHours(21, 55),
          new Date().setHours(23, 50),
        ],
      },
      {
        partidaDesde: "Puerto",
        diaSemana: "Lunes",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(6, 10),
          new Date().setHours(6, 30),
          new Date().setHours(6, 50),
          new Date().setHours(8, 10),
          new Date().setHours(8, 30),
          new Date().setHours(8, 50),
          new Date().setHours(10, 10),
          new Date().setHours(10, 30),
          new Date().setHours(10, 50),
          new Date().setHours(12, 10),
          new Date().setHours(12, 30),
          new Date().setHours(12, 50),
          /**------------------------- */
          new Date().setHours(14, 20),
          new Date().setHours(14, 50),
          new Date().setHours(16, 20),
          new Date().setHours(16, 50),
          new Date().setHours(18, 10),
          new Date().setHours(18, 30),
          new Date().setHours(18, 50),
          new Date().setHours(20, 10),
          new Date().setHours(20, 30),
          new Date().setHours(20, 50),
          new Date().setHours(22, 20),
          new Date().setHours(22, 50),
          new Date().setHours(0, 40),
        ],
      },
      //SABADO

      {
        partidaDesde: "UNNE",
        diaSemana: "Sabado",
        diaSemanaNumero: 6,
        horas: [
          new Date().setHours(5, 10),
          new Date().setHours(5, 20),
          new Date().setHours(7, 20),
          new Date().setHours(7, 50),
          new Date().setHours(9, 20),
          new Date().setHours(9, 50),
          new Date().setHours(11, 20),
          new Date().setHours(11, 50),
          /**------------------- */
          new Date().setHours(13, 20),
          new Date().setHours(13, 50),
          new Date().setHours(15, 20),
          new Date().setHours(15, 30),
          new Date().setHours(15, 50),
          new Date().setHours(17, 10),
          new Date().setHours(17, 15),
          new Date().setHours(17, 30),
          new Date().setHours(17, 50),
          new Date().setHours(19, 10),
          new Date().setHours(19, 15),
          new Date().setHours(19, 30),
          new Date().setHours(19, 50),
          new Date().setHours(21, 15),
          new Date().setHours(21, 50),
          new Date().setHours(23, 30),
        ],
      },
      {
        partidaDesde: "Puerto",
        diaSemana: "Sabado",
        diaSemanaNumero: 6,
        horas: [
          new Date().setHours(6, 15),
          new Date().setHours(6, 50),
          new Date().setHours(8, 20),
          new Date().setHours(8, 50),
          new Date().setHours(10, 20),
          new Date().setHours(10, 50),
          new Date().setHours(12, 20),
          new Date().setHours(12, 50),
          /**------------------------ */
          new Date().setHours(14, 20),
          new Date().setHours(14, 50),
          new Date().setHours(16, 20),
          new Date().setHours(16, 50),
          new Date().setHours(18, 10),
          new Date().setHours(18, 30),
          new Date().setHours(18, 50),
          new Date().setHours(20, 10),
          new Date().setHours(20, 30),
          new Date().setHours(20, 50),
          new Date().setHours(22, 20),
          new Date().setHours(0, 30),
        ],
      },
      //DOMINGO Y FERIADO
      {
        partidaDesde: "UNNE",
        diaSemana: "Domingo",
        diaSemanaNumero: 0,
        horas: [
          new Date().setHours(5, 40),
          new Date().setHours(7, 20),
          new Date().setHours(7, 45),
          new Date().setHours(9, 20),
          new Date().setHours(9, 45),
          new Date().setHours(11, 20),
          new Date().setHours(11, 45),
          /**---------------------- */
          new Date().setHours(13, 40),
          new Date().setHours(15, 10),
          new Date().setHours(15, 40),
          new Date().setHours(17, 10),
          new Date().setHours(17, 15),
          new Date().setHours(17, 40),
          new Date().setHours(19, 10),
          new Date().setHours(19, 15),
          new Date().setHours(19, 40),
          new Date().setHours(21, 30),
          new Date().setHours(23, 20),
        ],
      },
      {
        partidaDesde: "Puerto",
        diaSemana: "Domingo",
        diaSemanaNumero: 0,
        horas: [
          new Date().setHours(6, 40),
          new Date().setHours(8, 20),
          new Date().setHours(8, 45),
          new Date().setHours(10, 20),
          new Date().setHours(10, 45),
          new Date().setHours(12, 20),
          new Date().setHours(12, 50),
          new Date().setHours(14, 10),
          /**---------------------- */
          new Date().setHours(14, 40),
          new Date().setHours(16, 10),
          new Date().setHours(16, 40),
          new Date().setHours(18, 10),
          new Date().setHours(18, 40),
          new Date().setHours(20, 15),
          new Date().setHours(20, 40),
          new Date().setHours(22, 5),
          new Date().setHours(22, 25),
          new Date().setHours(0, 15),
        ],
      },
    ],
  },
  {
    name: "Colectivo CAMPUS",
    tipo: "Campus",
    empresa: "ERSA",
    horarios: [
      {
        partidaDesde: "Terminal Resistencia",
        diaSemana: "Lunes",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(5, 35),
          new Date().setHours(6, 25),
          new Date().setHours(7, 15),
          new Date().setHours(8, 5),
          new Date().setHours(8, 55),
          new Date().setHours(9, 45),
          new Date().setHours(10, 35),
          new Date().setHours(11, 25),
          new Date().setHours(12, 15),
          new Date().setHours(13, 5),
          new Date().setHours(13, 55),
          new Date().setHours(14, 45),
          new Date().setHours(15, 35),
          new Date().setHours(16, 25),
          new Date().setHours(17, 15),
          new Date().setHours(18, 5),
          new Date().setHours(18, 55),
          new Date().setHours(19, 45),
          new Date().setHours(20, 47),
          new Date().setHours(21, 15),
        ],
      },
      {
        partidaDesde: "UNNE",
        diaSemana: "Lunes",
        diaSemanaNumero: 1,
        horas: [
          new Date().setHours(5, 35),
          new Date().setHours(6, 25),
          new Date().setHours(7, 15),
          new Date().setHours(8, 5),
          new Date().setHours(8, 55),
          new Date().setHours(9, 45),
          new Date().setHours(10, 35),
          new Date().setHours(11, 25),
          new Date().setHours(12, 15),
          new Date().setHours(13, 5),
          new Date().setHours(13, 55),
          new Date().setHours(14, 45),
          new Date().setHours(15, 35),
          new Date().setHours(16, 25),
          new Date().setHours(17, 15),
          new Date().setHours(18, 5),
          new Date().setHours(18, 55),
          new Date().setHours(19, 45),
          new Date().setHours(20, 35),
          new Date().setHours(21, 25),
        ],
      },
    ],
  },
];

const ColectivoHorariosLunesViernes = async () => {
  try {
    // Count Documents
    const count = await Colectivo.estimatedDocumentCount();
    // check for existing Colectivos
    if (count > 0) return;
    for (const colec of colectivos) {
      let busNew = new Colectivo({
        name: colec.name,
        tipo: colec.tipo,
        empresa: colec.empresa,
      });
      busNew = await busNew.save();
      //Lunes - Viernes
      for (let index = 1; index <= 5; index++) {
        for (const horaCole of colec.horarios) {
          if (
            horaCole.diaSemanaNumero != DayOfWeekEnum.SABADO &&
            horaCole.diaSemanaNumero != DayOfWeekEnum.DOMINGO
          ) {
            let diaSemanaStr = "";
            switch (index) {
              case 1:
                diaSemanaStr = DayOfWeekStringEnum[DayOfWeekEnum.LUNES];
                break;
              case 2:
                diaSemanaStr = DayOfWeekStringEnum[DayOfWeekEnum.MARTES];
                break;
              case 3:
                diaSemanaStr = DayOfWeekStringEnum[DayOfWeekEnum.MIERCOLES];
                break;
              case 4:
                diaSemanaStr = DayOfWeekStringEnum[DayOfWeekEnum.JUEVES];
                break;
              case 5:
                diaSemanaStr = DayOfWeekStringEnum[DayOfWeekEnum.VIERNES];
                break;
            }
            let horarioNew = {
              partidaDesde: horaCole.partidaDesde,
              diaSemana: diaSemanaStr,
              diaSemanaNumero: index,
              horas: horaCole.horas,
              colectivoId: busNew._id,
            };
            await Horario.create(horarioNew);
          }
        }
      }

      //Sabado y Domingo
      for (const horaCole of colec.horarios) {
        if (horaCole.diaSemanaNumero == DayOfWeekEnum.SABADO) {
          let horarioNew = {
            partidaDesde: horaCole.partidaDesde,
            diaSemana: DayOfWeekStringEnum[DayOfWeekEnum.SABADO],
            diaSemanaNumero: DayOfWeekEnum.SABADO,
            horas: horaCole.horas,
            colectivoId: busNew._id,
          };
          await Horario.create(horarioNew);
        }
        if (horaCole.diaSemanaNumero == DayOfWeekEnum.DOMINGO) {
          let horarioNew = {
            partidaDesde: horaCole.partidaDesde,
            diaSemana: DayOfWeekStringEnum[DayOfWeekEnum.DOMINGO],
            diaSemanaNumero: DayOfWeekEnum.DOMINGO,
            horas: horaCole.horas,
            colectivoId: busNew._id,
          };
          await Horario.create(horarioNew);
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

export const InitialSetup = async () => {
  await ColectivoHorariosLunesViernes();
};
