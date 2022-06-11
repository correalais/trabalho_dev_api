const usuario = require('./negocio/biblioteca_negocio.js');


/* usuario.cadastrarLivro({isbn: 8576082675, nome: 'Clean Code', autor: 'Robert C. Martin', editora: 'Alta Books', ano: '2009'}, 
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


usuario.cadastrarAutor({id:3, nome: 'Márcio da Silva', pais: 'Brasil'}, 
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

usuario.cadastrarCliente({matricula: 123456, nome: 'Cláudia Pereira', telefone: 519874569}, 
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
*/   

/* usuario.buscarLivroISBN(8576082675, function(livro){
    if (!livro){
        console.log('Não há livros cadastrados.')
    } else{
        console.table(livro);
    }      
    
}); */  

 usuario.listarLivros(function(livros){
    if (!livros){
        console.log('Não há livros cadastrados.')
    } else{
         console.log("Lista de livros: ");       
        console.table(livros);
    }
   
}); 