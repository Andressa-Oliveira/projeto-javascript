import readlinesync = require("readline-sync");
import { Jaqueta } from "../src/model/Jaqueta";
import { ProdutoController } from "../src/controller/ProdutoController";


export function main() {
    
    let produto: ProdutoController = new ProdutoController();
    let opcao, preco, numero: number;
    let descricao, tamanho, cor: string;

    while (true) {

        console.log("     Mustard Jacket    ");
        console.log('\n--- MENU ---');
        console.log('1. Listar Produtos');
        console.log('2. Cadastrar Produto');
        console.log('3. Atualizar Produto');
        console.log('4. Deletar Produto');
        console.log('5. Consultar Produto por Número ')
        console.log('0. Sair');

        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nMustard Jacket - Moda outono/inverno");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar Produtos \n\n");
                produto.listarTodos();
                break;
            case 2:
                console.log("\n\nCadastrar Produto\n\n");

                console.log("Preço: ")
                preco = readlinesync.questionFloat("");

                console.log("Descrição: ");
                descricao = readlinesync.question("");

                console.log("Tamanho :");
                tamanho = readlinesync.question("");

                console.log("Cor:");
                cor = readlinesync.question("");

                produto.cadastrar(
                new Jaqueta(produto.gerarNumero(), tamanho, cor, descricao, preco));

                break;
            case 3:
                console.log("\n\nAtualizar Produto\n\n");

                console.log("Digite o número do produto");
                numero = readlinesync.questionInt("");
                let produtos = produto.buscarNoArray(numero);

                break;
            case 4:
                console.log("\n\nDeletar Produto\n\n");

                break;

    

            default:
                console.log("\nOpção inválida.\n");

                break;


        }
    }
}

    function sobre(): void {
    console.log("\n****");
    console.log("Projeto desenvolvido por: ");
    console.log("Andressa Oliveira");
    console.log("****");
}

main();