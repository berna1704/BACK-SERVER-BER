//abiri uma pasta que contém html e executar atraves de 
//estrutura de decisão alguma pagina selecionada 

//sistema de rota simples
const http= require("http");
const fs= require("fs");

let porta =3000
let host ="localhost";

const server = http.createServer((req,res)=>{
    //header
    res.setHeader("content=type","text/html");
    //criano as rotas
    let html_page =""

    switch (req.url){
        case "/":
            html_page="home.html";
            res.statusCode = 200;
            break;
        case "/home":
            html_page="home.html";
            res.statusCode = 200;
            break;
        case "/servicos":
            html_page="home.html";
            res.statusCode = 200;
            break;
        case "/sobre":
            html_page="home.html";
            res.statusCode = 200;
            break;
        default:
            html_page="404.html";
            res.statusCode = 404;
            break;
    }
    //preparando a abertura das paginas em html 
fs.readFile("./html/"+html_page,(erro,data)=>{
    if (erro){
    console.log(erro);
}else{
    res.write(data);
    res.end()
}

})
})

server.listen(porta,host,()=>{
    console.log("servidor no ar")
})

