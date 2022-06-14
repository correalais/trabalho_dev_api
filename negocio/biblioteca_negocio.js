const bibliotecaRepository = require('../persistencia/biblioteca_persistencia')

 function cadastrarLivro (livro, callback) {
    if(!livro || !livro.isbn || !livro.nome || !livro.autor || !livro.editora || !livro.ano){
        const erro = "Preencha todos os campos!";
        callback(erro, undefined)
    }
    else {
        bibliotecaRepository.cadastrarLivro(livro, callback);
    }  
} 

function cadastrarAutor (autor, callback) {
    if(!autor || !autor.id||  !autor.nome || !autor.pais){
        const erro = "Preencha todos os campos!";
        callback(erro, undefined)
    }
    else {
        bibliotecaRepository.cadastrarAutor(autor, callback);
    }  
}

function cadastrarCliente (cliente, callback) {
    if(!cliente|| !cliente.matricula||  !cliente.nome || !cliente.telefone){
        const erro = "Preencha todos os campos!";
        callback(erro, undefined)
    }
    else {
        bibliotecaRepository.cadastrarCliente(cliente, callback);
    }  
} 

function buscarLivroISBN (isbn, callback) {
    if(!isbn){
        const erro = "Preencha todos os campos!";
        callback(erro, undefined)
    }
    else {
        bibliotecaRepository.buscarLivroISBN(isbn, callback);
    }  
}  

function listarLivros(callback) {
    bibliotecaRepository.listarLivros(callback);
}

function realizarEmprestimo(valores, callback){
    if(!valores|| !valores.isbn||  !valores.nome || !valores.cliente || !valores.data_retirada || !valores.data_entrega){
        const erro = "Preencha todos os campos!";
        callback(erro, undefined)
    } else {
        bibliotecaRepository.realizarEmprestimo(valores, callback)
    }
}

function consultarEmprestimo(isbn, callback){
    if (!isbn){
        const erro = "Preencha todos os campos!";
        callback(erro, undefined)
    } else {
        console.log('Status do Livro: ')
        bibliotecaRepository.consultarEmprestimo(isbn, callback)
    }
}


module.exports = {
    cadastrarLivro, cadastrarAutor, cadastrarCliente, buscarLivroISBN, listarLivros, realizarEmprestimo, consultarEmprestimo
} 