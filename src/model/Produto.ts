export abstract class Produto {

	private descricao: string;
	private preco: number;
	private tamanho: string;


	constructor(descricao: string, preco: number, tamanho:string) {
		this.descricao = descricao;
		this.preco = preco;
		this.tamanho = tamanho;
	}



	public get $descricao(): string {
		return this.descricao;
	}

	public get $preco(): number {
		return this.preco;
	}
	
   
	public get $tamanho(): string {
		return this.tamanho;
	}

   
	public set $descricao(value: string) {
		this.descricao = value;
	}


	public set $preco(value: number) {
		this.preco = value;
	}

   
	public set $tamanho(value: string) {
		this.tamanho = value;
	}
	
	public visualizar(): void {
		console.log("Preço: R$" + this.preco.toFixed(2));
		console.log("Descrição: " + this.descricao);
		console.log("Tamanho: " + this.tamanho);
	
}
}