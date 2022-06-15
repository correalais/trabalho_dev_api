const usuario = require('./negocio/biblioteca_negocio.js');


/* usuario.cadastrarLivro({isbn: 2345678910, nome: 'Outro Teste', autor: 'José Antonio Silva', editora: 'Páginas Brancas', ano: '2010', status: 'Disponivel'}, 
function(err, livroCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Livro cadastrado: ");
        console.log(livroCadastrado);
    }
});   */  
 

/* usuario.cadastrarAutor({id: 6, nome: 'José Antonio da Silva', pais: 'Brasil'}, 
function(err, autorCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Autor cadastrado: ");
        console.log(autorCadastrado);
    }
});  
 */
/* usuario.cadastrarCliente({matricula: 456787, nome: 'Rodrigo da Silva', telefone: 5194948877}, 
function(err, clienteCadastrado) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Cliente cadastrado: ");
        console.log(clienteCadastrado);
    }
}); */


/* usuario.buscarLivroISBN(2345678910, function(livro){
    if (!livro){
        console.log('Não há livros cadastrados.')
    } else{
        console.table(livro);
    }      
    
}); */

/* usuario.buscarLivroNome('Outro Teste', function(livro){
    if (!livro){
        console.log(err)
    } else{
        console.table(livro);
    }      
    
}); */

/* usuario.listarLivros(function(livros){
    if (!livros){
        console.log('Não há livros cadastrados.')
    } else {
        console.log("Lista de livros: ");       
        console.table(livros);
    }
   
}); */ 


  usuario.realizarEmprestimo({isbn: 8575227182, nome: 'Python2', cliente: 'Rodrigo da Silva', matricula: 456787, data_retirada: '2022/06/13', data_entrega: '2022/06/14'}, function(err, retorno){
    if (err){
        console.log(err);
    } else {
        console.log(retorno);
    }
});  

usuario.consultarEmprestimo(8575227184, function(err, retorno){
    if (err){
        console.log(err);
    } else {
        console.log(retorno);
    }
}); 
  