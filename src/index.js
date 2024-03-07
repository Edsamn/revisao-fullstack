import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
const PORT = 8080;

let listaProdutos = [];

app.post("/criar-produto", (req, res) => {
  const data = req.body;
  const nome = data.nome;
  const preco = data.preco;

  try {
    if (!nome || !preco) {
      return res.status(400).json({msg: "Erro ao cadastrar o produto"});
    }

    let novoProduto = {
      nome: nome,
      preco: parseInt(preco),
    };

    listaProdutos.push(novoProduto);

    return res.status(201).json({msg: "Produto cadastrado com sucesso"});
  } catch (error) {
    return res.status(500).json({msg: "Erro interno"});
  }
});

app.get("/produtos", (req, res) => {
  try {
    if (listaProdutos.length > 0) {
      return res.status(200).json({msg: "Lista de produtos", data: listaProdutos});
    } else {
      return res.status(200).json({msg: "Lista vazia"});
    }
  } catch (error) {
    return res.status(500).json({msg: "Erro interno"});
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
      return res.status(200).json({msg: "Produto atualizado com sucesso", data: listaProdutos});
    } else {
      return res.status(400).json({msg: "Erro ao atualizar o produto"});
    }
  } catch (error) {
    return res.status(500).json({msg: "Erro interno"});
  }
});

app.delete("/produtos/:nome", (req, res) => {
  const nome = req.params.nome;

  try {
    const produtoIndex = listaProdutos.findIndex((produto) => produto.nome === nome);
    if (produtoIndex !== -1) {
      listaProdutos.splice(produtoIndex, 1);
      return res.status(200).json({msg: "Produto apagado com sucesso", data: listaProdutos});
    } else {
      return res.status(400).json({msg: "Erro ao apagar o produto"});
    }
  } catch (error) {
    return res.status(500).json({msg: "Erro interno"});
  }
});

app.listen(PORT, () => console.log("Servidor rodando na porta 8080"));
