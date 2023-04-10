-- CRIAR TABELA CLIENTES --
CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    quantidade INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
);

-- mostrar o id que representa a categoria la na tabela tb_categoria
SELECT * FROM tb_produto; 

-- mostrar as duas tabelas completas (só faz unir totalmente as duas)
SELECT * FROM tb_produto 
JOIN tb_categoria ON tb_categoria.id = tb_produto.categoria_id;

-- manipulando os campos que vao ser exibido (meche só na estrutura de CIMA)
-- tb_produto (nome)
-- tb_produto (quantidade)
SELECT tb_produto.nome, tb_produto.quantidade FROM tb_produto
JOIN tb_categoria ON tb_categoria.id = tb_produto.categoria_id;

-- manipulando os campos que vao ser exibido (meche só na estrutura de CIMA)
-- tb_produto (nome)
-- tb_produto (quantidade) , tb_categoria.descricao 
-- tb_categoria(titulo)
SELECT tb_produto.nome, tb_produto.quantidade, tb_categoria.titulo FROM tb_produto
JOIN tb_categoria ON tb_categoria.id = tb_produto.categoria_id;

-- manipulando os campos que vao ser exibido (meche só na estrutura de CIMA)
-- tb_produto (nome)
-- tb_produto (quantidade)
-- tb_categoria(titulo)
-- tb_categoria.descricao 
SELECT tb_produto.nome, tb_produto.quantidade, tb_categoria.titulo, tb_categoria.descricao FROM tb_produto
JOIN tb_categoria ON tb_categoria.id = tb_produto.categoria_id;



-- COMO FAZER ROTAS --
-- BOTEI NAS ROTAS MAS NO MYQL mostra normal

        SELECT * FROM tb_endereco 
        JOIN tb_cliente ON tb_cliente.id = tb_endereco.cliente_id;
