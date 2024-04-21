import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("     Mustard Jacket    ")
        console.log('\n--- MENU ---');
        console.log('1. Listar Produtos')
        console.log('2. Cadastrar Produto')
        console.log('3. Atualizar Produto');
        console.log('4. Deletar Produto');
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

                break;
            case 2:
                console.log("\n\nCadastrar Produto\n\n");

                break;
            case 3:
                console.log("\n\nAtualizar Produto\n\n");

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

export function sobre(): void {
    console.log("\n****");
    console.log("Projeto desenvolvido por: ");
    console.log("Andressa Oliveira");
    console.log("****");
}

main();