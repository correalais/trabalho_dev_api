const usuario = require('./negocio/biblioteca_negocio.js');


usuario.cadastrarLivro({isbn: 9876543210, nome: 'Um teste perfeito', autor: 'José Antonio', editora: 'Páginas Brancas', ano: '2010', status: 'Disponivel'}, 
function(err, livroCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Livro cadastrado: ");
        console.log(livroCadastrado);
    }
});    
 

usuario.cadastrarAutor({id: 5, nome: 'José Antonio', pais: 'Brasil'}, 
function(err, autorCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Autor cadastrado: ");
        console.log(autorCadastrado);
    }
});  

usuario.cadastrarCliente({matricula: 456789, nome: 'Felipe Borges', telefone: 5194948888}, 
function(err, clienteCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Cliente cadastrado: ");
        console.log(clienteCadastrado);
    }
});


usuario.buscarLivroISBN(9876543210, function(livro){
    if (!livro){
        console.log('Não há livros cadastrados.')
    } else{
        console.table(livro);
    }      
    
});
usuario.buscarLivroNome('Um teste perfeito', function(livro){
    if (!livro){
        console.log(err)
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


usuario.realizarEmprestimo({isbn: 8575227182, nome: 'Python2', cliente: 'Alfredo Neves', data_retirada: '2022/06/13', data_entrega: '2022/06/14'}, function(err, retorno){
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
 