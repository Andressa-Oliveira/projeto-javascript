import { Produto } from "./Produto";

export class Jaqueta extends Produto{

    private tamanho: string;
    private cor: string;


	constructor($tamanho: string, $cor: string, $nome: string, $descricao: string, $preco: number, $id: number ) {
        super($nome, $descricao, $preco, $id);
		this.tamanho = $tamanho;
		this.cor = $cor;
        
	}


   
	public get $tamanho(): string {
		return this.tamanho;
	}

   
	public get $cor(): string {
		return this.cor;
	}

    
	public set $tamanho(value: string) {
		this.tamanho = value;
	}

	public set $cor(value: string) {
		this.cor = value;
	}

}