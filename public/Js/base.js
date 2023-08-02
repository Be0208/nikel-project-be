const nome = "Bernardo Dartora";
let nome2 = "";
let pessoaDefault = {
    nome: "Bernardo Dartora",
    idade: "25",
    trabalho: "programador"
}

let nomes = ["Bernardo Dartora", "Bianca De Andrade", "Pietro Bitencurt"];
let pessoasListaVazia = []
let pessoas = [
    {
        nome: "Bernardo Dartora",
        idade: "25",
        trabalho: "programador"
    },
    {
        nome: "Bianca De Andrade",
    idade: "25",
    trabalho: "ux/ui"
    }
];

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
   
    console.log("idade:"); 
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-----imprimir Pessoas-----");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade:"); 
        console.log(item.idade);
    
        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pietro bitencurt",
    idade:"8",
    trabalho: "estudante"
});

imprimirPessoas();


//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Bianca De Andrade",
//    idade: "25",
//    trabalho: "UX/UI"
//});

//recebeEalteraNome("joão martelo");
//recebeEalteraNome("maria silva")

//alterarnome();