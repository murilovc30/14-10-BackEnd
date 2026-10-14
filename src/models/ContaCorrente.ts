import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../Interfaces/ContaProps.js";

export class ContaCorrente extends ContaBancaria <ContaCorrenteProps>{
    constructor (props: ContaCorrenteProps) {
        super(props);
    }

    public get getLimite(): number {return this.props.limite}

    public set setLimite(novoLimite: number){
        if (novoLimite  === 0) {
            console.log("\n ERRO: Resposta nao pode estar vazia!");
            return;
        }
        this.props.limite = novoLimite;
    }
    public exibirExtrato(): void {
        console.log(`
            [CONTA CORRENTE]
            |Numero da conta: ${this.getNumero}
            |Agencia: ${this.getAgencia}
            |Saldo: ${this.getSaldo}
            |Titular: ${this.getTitular}
            |Limite: ${this.getLimite}
        `)
    }

}