const cadastro = require('./negocio/biblioteca_negocio.js');


cadastro.cadastrarLivro({isbn: 8345082432, nome: 'Python', autor: 'Ciclano', editora: 'Alta Books', ano: '2020'}, 
function(err, livroCadastrado) {
    if(err) {
        console.log("Sistema esta com problemas");
        console.log(err);
    }
    else {
        console.log("Livro cadastrado: ");
        console.log(livroCadastrado);
    }
});   


cadastro.cadastrarAutor({id:3, nome: 'Beltrano', pais: 'Brasil'}, 
function(err, autorCadastrado) {
    if(err) {
        console.log("Sistema esta com problemas");
        console.log(err);
    }
    else {
        console.log("Autor cadastrado: ");
        console.log(autorCadastrado);
    }
});  

cadastro.cadastrarCliente({matricula: 123456, nome: 'Márcio Santos', telefone: 519874569}, 
function(err, clienteCadastrado) {
    if(err) {
        console.log("Sistema esta com problemas");
        console.log(err);
    }
    else {
        console.log("Cliente cadastrado: ");
        console.log(clienteCadastrado);
    }
});  