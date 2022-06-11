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
    const sql = "INSERT INTO livros (isbn, nome, autor, editora, ano) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [livro.isbn, livro.nome, livro.autor, livro.editora, livro.ano];
    user.query(sql, values, 
        function (err, res) {
            callback(err, res.rows);
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
            callback(err, res.rows);
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
            callback(err, res.rows);
            user.end();
        })

}

function buscarLivroISBN(isbn){
    const user = new Client(conexao);
    user.connect();

    const sql = "SELECT * FROM livros WHERE isbn=$1";
    const values = [isbn];

    user.query(sql, values, 
        function (err, res) {
            if(err) {
                console.log(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let livro = res.rows[0];
                console.table(livro);
            }
            else {
                const error = "Livro não encontrado";
                console.log(error);
            }
            user.end();
        })
}

module.exports = {cadastrarLivro, cadastrarAutor, cadastrarCliente, buscarLivroISBN}