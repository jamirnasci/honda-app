import type { IConsorcio } from "./Consorcio";

export interface IMoto {
  nome: string;
  preco: number;
  tipo: string;
  cilindrada: string;
  potenciaMaxima: string;
  torque_maximo: string;
  transmissso: string;
  sistemaDePartida: string;
  diametroXCurso: string;
  relacaoDeCompressao: string;
  sistemaDeAlimentacao: string;
  combustivel: string;
  capacidade: string;
  oleoDoMotor: string;
  img1: string;
  consorcio: IConsorcio
}