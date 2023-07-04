import { ContaPoupanca } from "./classes/ContaPoupança.js";
import { Cliente } from "./classes/Cliente.js";
import { ContaCorrente } from "./classes/ContaCorrente.js";
import { Conta } from "./classes/Conta.js";

const cliente1 = new Cliente("Lucas", 121184145);

const cliente2 = new Cliente("Leticia", 121184142);

const contaCorrenteLucas = new ContaCorrente(cliente1, 1001);

const contaCorrenteLeticia = new ContaCorrente(cliente2, 1001);

const contaPoupancaLucas = new ContaPoupanca(1000, cliente1, 1001);

const contaPoupancaLeticia = new ContaPoupanca(2000, cliente2, 1001);

console.log(contaPoupancaLucas);
console.log(contaPoupancaLeticia);
console.log(contaCorrenteLucas);
console.log(contaCorrenteLeticia);

console.log(Conta.numeroDeContas)



