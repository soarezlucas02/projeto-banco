class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
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

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 121184145;

const cliente2 = new Cliente();
cliente2.nome = "Leticia";
cliente2.cpf = 121184142;

const contaCorrenteLucas= new ContaCorrente();
contaCorrenteLucas.agencia = 1001;

const contaCorrenteLeticia= new ContaCorrente();
contaCorrenteLeticia.agencia = 1001;

const valorDepositado = contaCorrenteLucas.depositar(100);