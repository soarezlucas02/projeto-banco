export class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo < valor){
            return valor;
        }
        this._saldo -= valor;
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    
}