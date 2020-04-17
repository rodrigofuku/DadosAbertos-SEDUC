process.title = "DadosAbertos-SEDUC";

var args = process.argv,
    port = args[2] || 4000,
    webServer = require('./server');
    
webServer.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}.`);
})