import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
import { ContaBancaria } from "./src/models/ContaBancaria.js";

console.log("=== SISTEMA DO BANCO ===");

const conta = new ContaCorrente({
    limite: 1,
    numero: "123456",
    agencia: "1234",
    titular: "Joao da Silva",
    saldo: 1000
});

const cliente = new ContaPoupanca({
    taxaAniversario: 0.5,
    numero: "654321",
    agencia: "1234",
    titular: "Ana Souza",
    saldo: 5000
});

cliente.sacar(200);
cliente.depositar(3000);

console.log("\n--- DEMONSTRACAO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: ContaBancaria[] = [conta, cliente];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const conta of bancoDeDados) {
    conta.exibirExtrato();
}
