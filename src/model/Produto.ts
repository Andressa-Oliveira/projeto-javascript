export abstract class Produto {

	private nome: string;
	private descricao: string;
	private preco: number;
	private id: number;


	constructor($nome: string, $descricao: string, $preco: number, $id: number) {
		this.nome = $nome;
		this.descricao = $descricao;
		this.preco = $preco;
		this.id = $id;
	}



	public get $nome(): string {
		return this.nome;
	}


	public get $descricao(): string {
		return this.descricao;
	}


	public get $preco(): number {
		return this.preco;
	}


	public get $id(): number {
		return this.id;
	}


	public set $nome(value: string) {
		this.nome = value;
	}


	public set $descricao(value: string) {
		this.descricao = value;
	}


	public set $preco(value: number) {
		this.preco = value;
	}


	public set $id(value: number) {
		this.id = value;
	}

	public visualizar(): void {
	console.log("\n\n******");
	console.log("Dados do Produto:");
	console.log("******");
	console.log("Nome do produto: " + this.nome);
	console.log("Descrição: " + this.descricao);
	console.log("Preço: R$" + this.preco.toFixed(2));
	console.log("Id: " + this.id);}

	
}