export class Conta{
    static numeroDeContas = 0;
  
    constructor(saldoInicial,_cliente, agencia) {
      this.agencia = agencia;
      this._cliente = _cliente;
      this._saldo=saldoInicial;
      Conta.numeroDeContas++;
    }
  
    set cliente(novoValor) {
      if (novoValor instanceof Cliente) {
        this._cliente = novoValor;
      }
    }
  
    get saldo() {
      return this._saldo;
    }
  
  
    sacar(valor) {
      if (this._saldo < valor) {
        return valor;
      }
      this._saldo -= valor;
      return valor;
    }
  
    depositar(valor) {
      if (valor <= 0) {
        return;
      }
      this._saldo += valor;
    }
  
    transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }
  }
  