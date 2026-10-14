import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../Interfaces/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {
    constructor (props: ContaPoupancaProps) {
        super(props);
    }
    public get getTaxaAniver(): number {return this.props.taxaAniversario} 
    

    public set setTaxaAniver(novoTaxaAniver: number){
        if (novoTaxaAniver === 0) {
            console.log("\n ERRO: O campo nao pode estar vazio!");
            return
        }
        this.props.taxaAniversario = novoTaxaAniver
    }
    renderJuros(){
        this.props.saldo += (this.props.saldo * 0.15);
    }
    public exibirExtrato(): void {
        console.log(`
            [CONTA POUPANCA]
            |Numero da conta: ${this.getNumero}
            |Agencia: ${this.getAgencia}
            |Saldo: ${this.getSaldo}
            |Titular: ${this.getTitular}
            |Taxa de Aniversario: ${this.getTaxaAniver}
        `)
    }
}