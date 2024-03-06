import express from "express";

const app = express();
app.use(express.json());

let listaProdutos = [
  {
    nome: "lapis",
    preco: "5",
  },
  {
    nome: "caderno",
    preco: "10",
  },
  {
    nome: "tesoura",
    preco: "3",
  },
  {
    nome: "cola",
    preco: "2",
  },
  {
    nome: "caneta",
    preco: "2",
  },
];

app.post("/criar-produto", (req, res) => {
  const data = req.body;
  const nome = data.nome;
  const preco = data.preco;

  listaProdutos.push({
    nome,
    preco,
  });

  if (data.nome === "" || data.preco === "") {
    res.status(400).json({msg: "Erro ao cadastrar o produto"});
  }

  res.status(201).json({msg: "Produto cadastrado com sucesso"});
});

app.get("/produtos", (req, res) => {
  res.status(200).json({msg: "Lista de produtos", data: listaProdutos});
});

app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
