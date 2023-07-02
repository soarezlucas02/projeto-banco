import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Lucas",121184145);

const cliente2 = new Cliente("Leticia", 121184142);

const contaCorrenteLucas= new ContaCorrente(101, cliente1);

const conta2= new ContaCorrente(102, cliente2);

//const contaCorrenteLeticia= new ContaCorrente();
//contaCorrenteLeticia.agencia = 1001;

contaCorrenteLucas.depositar(100)
contaCorrenteLucas.transferir(50,conta2)
console.log(contaCorrenteLucas)
console.log(conta2)

//const valorDepositado = contaCorrenteLucas.depositar(100);