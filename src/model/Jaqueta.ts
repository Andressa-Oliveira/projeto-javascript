import { Produto } from "./Produto";

export class Jaqueta extends Produto {



	private cor: string;
	private numero: number;


	constructor(numero: number, tamanho: string, cor: string, descricao: string, preco: number) {
		super(descricao, preco, tamanho);
		this.cor = cor;
		this.numero = numero;


	}

	public get $numero(): number {
		return this.numero;
	}

	public set $numero(value: number) {
		this.numero = value;
	}


	public get $cor(): string {
		return this.cor;
	}


	public set $cor(value: string) {
		this.cor = value;
	}

	public visualizar(): void {
		super.visualizar();
		console.log("Cor: " + this.cor);
	}
}