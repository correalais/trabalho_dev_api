const usuario = require('./negocio/biblioteca_negocio.js');


usuario.cadastrarLivro({isbn: 8575227182, nome: 'Python2', autor: 'Nilo Ney Coutinho2', editora: 'Novatec2', ano: '2019', status: 'Emprestado'}, 
function(err, livroCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Livro cadastrado: ");
        console.log(livroCadastrado);
    }
});    
 

usuario.cadastrarAutor({id:4, nome: 'João da Silva', pais: 'Brasil'}, 
function(err, autorCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Autor cadastrado: ");
        console.log(autorCadastrado);
    }
});  

usuario.cadastrarCliente({matricula: 123456, nome: 'Cláudia Pereira', telefone: 519874569}, 
function(err, clienteCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Cliente cadastrado: ");
        console.log(clienteCadastrado);
    }
});


usuario.buscarLivroISBN(8576082675, function(livro){
    if (!livro){
        console.log('Não há livros cadastrados.')
    } else{
        console.table(livro);
    }      
    
});    

usuario.listarLivros(function(livros){
    if (!livros){
        console.log('Não há livros cadastrados.')
    } else{
        console.log("Lista de livros: ");       
        console.table(livros);
    }
   
}); 

usuario.realizarEmprestimo({isbn: 8576082675, nome: 'Clean Code', cliente: 'Fulano da Silva', data_retirada: '2022/06/06', data_entrega: '2022/06/07'}, function(err, retorno){
    if (err){
        console.log(err);
    } else {
        console.log(retorno);
    }
}); 

usuario.consultarEmprestimo(8582603363, function(err, retorno){
    if (err){
        console.log(err);
    } else {
        console.log(retorno);
    }
}); 
