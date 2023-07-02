import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

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

//const valorDepositado = contaCorrenteLucas.depositar(100);