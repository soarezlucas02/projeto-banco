class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
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
contaCorrenteLucas.saldo= 0;



const contaCorrenteLeticia= new ContaCorrente();
contaCorrenteLeticia.agencia = 1001;
contaCorrenteLeticia.saldo= 0;


console.log(contaCorrenteLucas);
contaCorrenteLucas.saldo=100;
contaCorrenteLucas.sacar(50);
console.log(contaCorrenteLucas); 

console.log(cliente1);
console.log(cliente2);
