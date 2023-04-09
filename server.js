const express = require('express');
const produtoRoutes = require("./resources/produto/routes");
const categoriaRoutes = require("./resources/categoria/routes");

const bannerRoutes = require('./resources/banner/routes');
const clienteRoutes = require('./resources/cliente/routes');


// tipo pagamento
const tipopagamentoRoutes = require('./resources/tipo-pagamento/routes');

const app = express();

app.use(express.json());
app.use(produtoRoutes);
app.use(categoriaRoutes);
app.use(bannerRoutes);
app.use(clienteRoutes);

// tipo pagamento
app.use(tipopagamentoRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
