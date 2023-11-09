const express = require("express")

const app = express()

app.get('/' , (requisicao, resposta) =>  {
    resposta.send("Estou funcionando com express")

})

app.listen(3000 , () => {
    console.log("Estou rodando na porta 3000!")
})