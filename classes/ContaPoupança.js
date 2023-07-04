import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, _cliente, agencia) {
    super(saldoInicial,_cliente,agencia);

  }
}
