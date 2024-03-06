//3

// let nomeProduto;
// let precoProduto;
// let novoProduto = {
//   nomeProduto,
//   precoProduto,
// };
// let listaProdutos = [];
// let novoNomeProduto = "novoNomeProduto";
// let novoPrecoProduto = "novoPrecoProduto";

// if (listaProdutos.length > 0) {
//   listaProdutos.forEach((produto) => {
//     console.log(produto.nomeProduto, produto.precoProduto);
//   });
// } else {
//   console.log("Estoque Vazio. Cadastre produtos");
// }

// novoProduto = {
//   nomeProduto: "nomeProduto",
//   precoProduto: "precoProduto",
// };

// listaProdutos.push(novoProduto);
// // console.log(listaProdutos);

// listaProdutos
//   .map((produto) => {
//     (novoProduto.nomeProduto = novoNomeProduto), (novoProduto.precoProduto = novoPrecoProduto);
//   });

// // console.log(listaProdutos);

//--------------------------------------------------------------------------------------------------------------------

//4

// let nomeProduto;
// let precoProduto;
// let novoProduto = {
//   nomeProduto,
//   precoProduto,
// };
// let listaProdutos = [];

// function criarProduto(nome, preco) {
//   novoProduto = {
//     nomeProduto: nome,
//     precoProduto: preco,
//   };
//   listaProdutos.push(novoProduto);
// }

// function lerProdutos() {
//   listaProdutos.forEach((novoProduto) => {
//     console.log(`Nome do produto: ${novoProduto.nomeProduto} | Preço do produto: ${novoProduto.precoProduto}`);
//   });
// }

// function atualizarProduto(nome, nomeNovo, precoNovo) {
//   listaProdutos
//     .filter((novoProduto) => novoProduto.nomeProduto === nome)
//     .map((novoProduto) => {
//       (novoProduto.nomeProduto = nomeNovo), (novoProduto.precoProduto = precoNovo);
//     });
// }

// function deletarProduto(nome) {
//   const produtoIndex = listaProdutos.findIndex((novoProduto) => novoProduto.nomeProduto === nome);
//   listaProdutos.splice(produtoIndex, 1);
// }

// criarProduto("lapis", "2");
// criarProduto("caneta", "3");
// criarProduto("caderno", "6");
// criarProduto("marca-texto", "7");
// atualizarProduto("lapis", "tesoura", "5");
// atualizarProduto("caneta", "cola", "3");
// atualizarProduto("caderno", "folha", "0.5");
// deletarProduto("marca-texto");
// lerProdutos();

//--------------------------------------------------------------------------------------------------------------------
