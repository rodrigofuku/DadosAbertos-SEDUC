var http = require('http'),
    config = require('./config'),
    fileHandler = require('./filehandler'),
    parse = require('url').parse,
    types = config.types,
    rootFolder = config.rootFolder,
    defaultIndex = config.defaultIndex,
    server;
    
module.exports = server = http.createServer();

server.on('request', onRequest);

function onRequest(req, res) {
    var filename = parse(req.url).pathname,
        fullPath,
        extension;
        
    if(filename === '/') {
        filename = defaultIndex;
    }

    if(filename === '/professores') {
        filename = '/results/professores.html';
    }

    if(filename === '/idesp') {
        filename = '/results/idesp.html';
    }

    if(filename === '/saresp') {
        filename = '/results/saresp.html';
    }

    if(filename === '/gestores') {
        filename = '/results/gestores.html';
    }


    fullPath = rootFolder + filename;
    console.log(fullPath);
    extension = filename.substr(filename.lastIndexOf('.') + 1);
    
    fileHandler(fullPath, (data) => {
        res.writeHead(200, {
            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length
        });
        res.end(data);
    }, (err) => {
        res.writeHead(404);
        res.end();
    });

}