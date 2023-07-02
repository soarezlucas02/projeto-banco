import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia,_cliente){
        this.agencia=agencia;
        this._cliente=_cliente;
    }

    _saldo = 0;

    sacar(valor){
        if(this._saldo < valor){
            return valor;
        }
        this._saldo -= valor;
        return valor
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }

}