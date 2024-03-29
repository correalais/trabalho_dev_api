const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '080194',
    database: 'trabalho_api'
};

function cadastrarLivro(livro, callback){

    const user = new Client(conexao);
    user.connect();
    const sql = "INSERT INTO livros (isbn, nome, autor, editora, ano, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [livro.isbn, livro.nome, livro.autor, livro.editora, livro.ano, livro.status];
    user.query(sql, values, 
        function (err, res) {
            if (err){
                const erro = "Ops! Aconteceu um erro. Revise e tente novamente.";
                callback(erro);
            } else {
                callback(res.rows);
            }
            
            user.end();
        } 
    )   

}

function cadastrarAutor(autor, callback){
    const user = new Client(conexao);
    user.connect();

    const sql = "INSERT INTO autor (id, nome, pais) VALUES ($1, $2, $3) RETURNING *";
    const values = [autor.id, autor.nome, autor.pais];

    user.query(sql, values, 
        function (err, res){
            if (err){
                const erro = "Ops! Aconteceu um erro. Revise e tente novamente.";
                callback(erro);
            } else {
                callback(res.rows);
            }
            user.end();
        })

}

function cadastrarCliente(cliente, callback){
    const user = new Client(conexao);
    user.connect();

    const sql = "INSERT INTO cliente (matricula, nome, telefone) VALUES ($1, $2, $3) RETURNING *";
    const values = [cliente.matricula, cliente.nome, cliente.telefone];

    user.query(sql, values, 
        function (err, res){
            if (err){
                const erro = "Ops! Aconteceu um erro. Revise e tente novamente.";
                callback(erro);
            } else {
                callback(res.rows);
            }
            user.end();
        })

}

function buscarLivroISBN(isbn, callback){
    const user = new Client(conexao);
    user.connect();

    const sql = "SELECT * FROM livros WHERE isbn=$1";
    const values = [isbn];

    user.query(sql, values, 
        function (err, res) {
            if(err) {
                //console.log(err.message, undefined); 
                const erro = "Ops! Aconteceu um erro. Revise e tente novamente.";
                callback(erro);            
            }
            else if (res.rows && res.rows.length > 0) {
                let livro = res.rows[0];
                //console.table(livro);
                callback(livro)
            }
            else {
                const error = "Livro não encontrado";
                console.log(error);
            }
            user.end();
        })
}
function buscarLivroNome(nome, callback){
    const user = new Client(conexao);
    user.connect();

    const sql = "SELECT * FROM livros WHERE nome=$1";
    const values = [nome];

    user.query(sql, values, 
        function (err, res) {
            if(err) {
                //console.log(err.message, undefined); 
                const erro = "Ops! Aconteceu um erro. Revise e tente novamente.";
                callback(err);            
            }
            else if (res.rows && res.rows.length > 0) {
                let livro = res.rows;
                //console.table(livro);
                callback(livro)
            }
            else {
                const error = "Nenhum livro com este nome cadastrado.";
                console.log(error);
            }
            user.end();
        })
}

function listarLivros(callback) {
    const user = new Client(conexao);
    user.connect();
    
    const sql = "SELECT * FROM livros";
    user.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let livros = res.rows;
                callback(livros);     
            }
            user.end();
        }
    )    
}

function realizarEmprestimo(valores, callback){
    const user = new Client(conexao);
    user.connect();
    const sql = "SELECT * FROM fn_fazerEmprestimo($1, $2, $3, $4, $5, $6)";
    const values = [valores.isbn, valores.nome, valores.cliente, valores.matricula, valores.data_retirada, valores.data_entrega];

    user.query(sql, values, 
        function (err, res){
            if (err){
                const erro = "Ops! Aconteceu um erro. Cliente não existe no sistema";
                callback(erro);
            } else {
                if (res.rows && res.rows.length > 0){
                    for (var i=0; i<res.rows.length; i++){
                        callback(res.rows[i]);
                    }
                }
                
            }
            user.end();
        });
}

function consultarEmprestimo (isbn, callback){
    const user = new Client(conexao);
    user.connect();
    const sql = "SELECT nome, status FROM livros where isbn = $1";
    const values = [isbn];

    user.query(sql, values, 
        function (err, res){
            if (err){
                const erro = "Ops! Aconteceu um erro. Revise e tente novamente.";
                callback(erro);
            } else {
                callback(res.rows);
            }
            user.end();
        });
}

module.exports = {cadastrarLivro, cadastrarAutor, cadastrarCliente, buscarLivroISBN, listarLivros, realizarEmprestimo, consultarEmprestimo, buscarLivroNome}