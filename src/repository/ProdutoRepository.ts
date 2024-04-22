import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    // CRUD 
	
	listarTodos(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(numero: number): void;
	
}