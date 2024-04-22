import { Produto } from "../model/Produto";
import { Jaqueta } from "../model/Jaqueta";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;


    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        };

    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nProduto de no. " + produto.getNumero() + " foi cadastrado com sucesso.");
    }
    atualizar(produto: Produto): void {
        let numero = produto.getNumero();
        let buscaProduto = this.buscarNoArray(numero);
    
        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO Produto número: " + numero + " foi atualizado.");
    
        } else
            console.log("\nO produto número: " + numero + " não foi encontrado.");
    }
    
    deletar(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);
    
        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO produto número: " + numero + "foi deletado.");
        }else
        console.log("O produto número" + numero + " não foi encontrado.");
    }
    
    

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (Jaqueta.numero === numero)
                return produto;
        }

        return null;
    }
}

