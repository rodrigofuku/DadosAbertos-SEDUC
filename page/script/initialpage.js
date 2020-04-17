function paginaInicial(){
    fetch('http://penguin.linux.test:4000')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function professores(){
    fetch('http://penguin.linux.test:4000/professores')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function gestores(){
    fetch('http://penguin.linux.test:4000/gestores')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function idesp(){
    fetch('http://penguin.linux.test:4000/idesp')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function saresp(){
    fetch('http://penguin.linux.test:4000/saresp')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });

}
