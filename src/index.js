import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let listaProdutos = [
  // {
  //   nome: "lapis",
  //   preco: 5,
  // },
  // {
  //   nome: "caderno",
  //   preco: 10,
  // },
  // {
  //   nome: "tesoura",
  //   preco: 3,
  // },
  // {
  //   nome: "cola",
  //   preco: 2,
  // },
  // {
  //   nome: "caneta",
  //   preco: 2,
  // },
];

app.post("/criar-produto", (req, res) => {
  const data = req.body;
  const nome = data.nome;
  const preco = data.preco;

  try {
    if (!nome || !preco) {
      res.status(400).json({msg: "Erro ao cadastrar o produto"});
    }

    let novoProduto = {
      nome: nome,
      preco: parseInt(preco),
    };

    listaProdutos.push(novoProduto);

    res.status(201).json({msg: "Produto cadastrado com sucesso"});
  } catch (error) {
    res.status(500).json({msg: "Erro interno"});
  }
});

app.get("/produtos", (req, res) => {
  try {
    if (listaProdutos.length > 0) {
      res.status(200).json({msg: listaProdutos});
    } else {
      res.status(200).json({msg: "Lista vazia"});
    }
  } catch (error) {
    res.status(500).json({msg: "Erro interno"});
  }
});

app.put("/produtos/:nome", (req, res) => {
  const data = req.body;
  const nome = req.params.nome;

  try {
    const produtoAtualizado = {
      nome: data.nome,
      preco: data.preco,
    };

    const produtoIndex = listaProdutos.findIndex((produto) => produto.nome === nome);
    if (produtoIndex !== -1) {
      listaProdutos[produtoIndex] = produtoAtualizado;
      res.status(200).json({msg: "Produto atualizado com sucesso", data: listaProdutos});
    } else {
      res.status(400).json({msg: "Erro ao atualizar o produto"});
    }
  } catch (error) {
    res.status(500).json({msg: "Erro interno"});
  }
});

app.delete("/produtos/:nome", (req, res) => {
  const nome = req.params.nome;

  try {
    const produtoIndex = listaProdutos.findIndex((produto) => produto.nome === nome);
    if (produtoIndex !== -1) {
      listaProdutos.splice(produtoIndex, 1);
      res.status(200).json({msg: "Produto apagado com sucesso", data: listaProdutos});
    } else {
      res.status(400).json({msg: "Erro ao apagar o produto"});
    }
  } catch (error) {
    res.status(500).json({msg: "Erro interno"});
  }
});

app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
