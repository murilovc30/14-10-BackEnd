import { ContaProps } from "../Interfaces/ContaProps.js";

export abstract class ContaBancaria<T extends ContaProps = ContaProps>{
    constructor(protected props: T) {}

    public get getNumero(): string {return this.props.numero;}
    public get getAgencia(): string {return this.props.agencia;}
    public get getTitular(): string {return this.props.titular;}
    public get getSaldo(): number {return this.props.saldo;}

    public set setNumero(novoNumero: string){
        if (novoNumero.trim().length === 0) {
            console.log("\n ERRO: Resposta nao pode estar vazia!");
            return;
        }
        this.props.numero = novoNumero;
    }
    public set setAgencia(novoAgencia: string){
        if (novoAgencia.trim().length === 0) {
            console.log("\n ERRO: Resposta nao pode estar vazia!");
            return;
        }
        this.props.agencia = novoAgencia;
    }
    public set setSaldo(novoSaldo: number){
        if (novoSaldo  === 0) {
            console.log("\n ERRO: Resposta nao pode estar vazia!");
            return;
        }
        this.props.saldo = novoSaldo;
    }


    sacar(valor:number){
        this.props.saldo -= valor;
    }
    depositar(valor:number){
        this.props.saldo += valor;
    }

    public abstract exibirExtrato(): void;
}
