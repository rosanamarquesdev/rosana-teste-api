const app = require('express').Router();
const database = require('../../connection/database');

const table = 'tb_produto';
const url = '/produtos';

app.get(url, async (req, res) => {
    // mostra as tabelas unidas mas com os campos manipulados
    // let dados = await database.execute(`
    // SELECT ${table}.nome, ${table}.quantidade, tb_categoria.titulo FROM ${table}
    // JOIN tb_categoria ON tb_categoria.id = ${table}.categoria_id;
    // `);

    // esse aqui mostra todos os dados das duas tabelas juntas (tb_produto e tb_categoria)
    let dados = await database.execute(`
        SELECT * FROM tb_produto 
        JOIN tb_categoria ON tb_categoria.id = tb_produto.categoria_id;
    `);

    res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {

    // mostra as tabelas unidas mas com os campos manipulados
    let dados = await database.execute(`
    SELECT ${table}.nome, ${table}.quantidade, tb_categoria.titulo FROM ${table}
    JOIN tb_categoria ON tb_categoria.id = ${table}.categoria_id;
    `);

    // se certifica se existe
    let jaExiste = await database.execute(`
    SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
    res.sendStatus(404);
    return;
    }

    res.send(dados[0]);
});

app.post(url, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO ${table} 
            (nome, quantidade, categoria_id)
        VALUES 
            ('${corpo.nome}', '${corpo.quantidade}','${corpo.categoria_id}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch(`${url}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

    //testa se existe algum cliente com aquele id
    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${table} SET 
            nome='${req.body.nome || jaExiste[0].nome}', 
            quantidade='${req.body.quantidade || jaExiste[0].quantidade}', 
            categoria_id='${req.body.categoria_id || jaExiste[0].categoria_id}'
        WHERE id = '${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${url}/:id`, async (req, res) => {
    await database.execute(`
        DELETE FROM ${table} WHERE id='${req.params.id}'
    `);
    
    res.sendStatus(204);
});

module.exports = app;