import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(_cliente,agencia) {
    super(0,_cliente,agencia);
    this._saldo=0;
  }
}

