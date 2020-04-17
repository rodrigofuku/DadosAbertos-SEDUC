function paginaInicial(){
    fetch('/')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function professores(){
    fetch('/professores')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function gestores(){
    fetch('/gestores')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function idesp(){
    fetch('/idesp')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });
    
}

function saresp(){
    fetch('/saresp')
    .then((response) => {
        console.log(response);
        window.location.replace(response.url);
    })
    .catch((err) => {
        console.log(err);
    });

}
