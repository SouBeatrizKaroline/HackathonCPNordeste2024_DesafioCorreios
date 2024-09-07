const fs = require('fs')
const obterResposta = require('./ia')
// Caminho do arquivo a ser lido
const caminhoArquivo = 'teste.txt'
const caminhoResposta = 'base.txt'

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

// Middleware para analisar dados JSON (opcional, se você estiver enviando JSON)
app.use(express.json());
app.use(express.static('public'))

//conexão com as paginas ejs
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.get("/", (req, res) =>{
    res.render("home")
})
app.post("/resposta" , async (req, res) =>{
    const duvida = req.body.pergunta
    obterResposta(duvida, base)
        .then(resposta => {
            res.render("resposta",{
                pergunta: duvida,
                resposta: resposta
            })
            console.log("Resposta da OpenAI:", resposta);
        })
        .catch(error => {
            console.error("Erro ao obter resposta:", error);
        });
    
})

app.listen(8080, ()=>{
    console.log("olamundo")
})


// Lê o arquivo de texto
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
const base = fs.readFileSync(caminhoResposta, 'utf-8');

// Caminho do arquivo a ser lido
// Lê o arquivo de texto
/*
obterResposta(conteudo, base)
  .then(resposta => {
    console.log("Resposta da OpenAI:", resposta);
  })
  .catch(error => {
    console.error("Erro ao obter resposta:", error);
  });*/