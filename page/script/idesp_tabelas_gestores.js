const gestores_AI_2018 = [
        {
        "ANO": "2018",
        "GRUPO": "Melhores",
        "NIVEL": "Anos Iniciais",
        "DIRETOR": 98,
        "VICE_DIRETOR": 86,
        "PROFESSOR_COORDENADOR": 98
    },
    {
        "ANO": "2018",
        "GRUPO": "Intermediarios",
        "NIVEL": "Anos Iniciais",
        "DIRETOR": 97,
        "VICE_DIRETOR": 97,
        "PROFESSOR_COORDENADOR": 97
    },
    {
        "ANO": "2018",
        "GRUPO": "Piores",
        "NIVEL": "Anos Iniciais",
        "DIRETOR": 100,
        "VICE_DIRETOR": 92,
        "PROFESSOR_COORDENADOR": 100
    }
]


const gestores_AI_2017 = [
    {
        "ANO": "2017",
        "GRUPO": "Melhores",
        "NIVEL": "Anos Iniciais",
        "DIRETOR": 98,
        "VICE_DIRETOR": 98,
        "PROFESSOR_COORDENADOR": 99
    },
    {
        "ANO": "2017",
        "GRUPO": "Intermediarios",
        "NIVEL": "Anos Iniciais",
        "DIRETOR": 98,
        "VICE_DIRETOR": 97,
        "PROFESSOR_COORDENADOR": 100
    },
    {
        "ANO": "2017",
        "GRUPO": "Piores",
        "NIVEL": "Anos Iniciais",
        "DIRETOR": 99,
        "VICE_DIRETOR": 99,
        "PROFESSOR_COORDENADOR": 100
    }]


const gestores_AF_2018 = [
        {
        "ANO": "2018",
        "GRUPO": "Melhores",
        "NIVEL": "Anos Finais",
        "DIRETOR": 97,
        "VICE_DIRETOR": 98,
        "PROFESSOR_COORDENADOR": 97
    },
    {
        "ANO": "2018",
        "GRUPO": "Intermediarios",
        "NIVEL": "Anos Finais",
        "DIRETOR": 98,
        "VICE_DIRETOR": 96,
        "PROFESSOR_COORDENADOR": 97
    },
    {
        "ANO": "2018",
        "GRUPO": "Piores",
        "NIVEL": "Anos Finais",
        "DIRETOR": 99,
        "VICE_DIRETOR": 96,
        "PROFESSOR_COORDENADOR": 98
    }
]

const gestores_AF_2017 = [
    {
        "ANO": "2017",
        "GRUPO": "Melhores",
        "NIVEL": "Anos Finais",
        "DIRETOR": 94,
        "VICE_DIRETOR": 100,
        "PROFESSOR_COORDENADOR": 100
    },
    {
        "ANO": "2017",
        "GRUPO": "Intermediarios",
        "NIVEL": "Anos Finais",
        "DIRETOR": 100,
        "VICE_DIRETOR": 100,
        "PROFESSOR_COORDENADOR": 100
    },
    {
        "ANO": "2017",
        "GRUPO": "Piores",
        "NIVEL": "Anos Finais",
        "DIRETOR": 100,
        "VICE_DIRETOR": 97,
        "PROFESSOR_COORDENADOR": 100
    }]


const gestores_EM_2018 = [
        {
        "ANO": "2018",
        "GRUPO": "Melhores",
        "NIVEL": "Ensino Medio",
        "DIRETOR": 96,
        "VICE_DIRETOR": 99,
        "PROFESSOR_COORDENADOR": 96
    },
    {
        "ANO": "2018",
        "GRUPO": "Intermediarios",
        "NIVEL": "Ensino Medio",
        "DIRETOR": 97,
        "VICE_DIRETOR": 98,
        "PROFESSOR_COORDENADOR": 97
    },
    {
        "ANO": "2018",
        "GRUPO": "Piores",
        "NIVEL": "Ensino Medio",
        "DIRETOR": 98,
        "VICE_DIRETOR": 97,
        "PROFESSOR_COORDENADOR": 98
    }
]

const gestores_EM_2017 = [
    {
        "ANO": "2017",
        "GRUPO": "Melhores",
        "NIVEL": "Ensino Medio",
        "DIRETOR": 94,
        "VICE_DIRETOR": 99,
        "PROFESSOR_COORDENADOR": 100
    },
    {
        "ANO": "2017",
        "GRUPO": "Intermediarios",
        "NIVEL": "Ensino Medio",
        "DIRETOR": 97,
        "VICE_DIRETOR": 99,
        "PROFESSOR_COORDENADOR": 99
    },
    {
        "ANO": "2017",
        "GRUPO": "Piores",
        "NIVEL": "Ensino Medio",
        "DIRETOR": 98,
        "VICE_DIRETOR": 100,
        "PROFESSOR_COORDENADOR": 99
    }]




const tabelaLabels_2 = ['DIRETOR', 'VICE_DIRETOR', 'PROFESSOR_COORDENADOR']


var gest_AI_2018 = document.getElementById('AI_2018_gestores');
var gest_AI_2018_1 = document.createElement('table');
gest_AI_2018_1.setAttribute('class', 'table table-hover');
    
var gest_AI_2018_9 = document.createElement('tbody');
var count_2 = 0;
    
for(let i of tabelaLabels_2){
        
        if(count_2 === 0){
            let gest_AI_2018_2 = document.createElement('thead');
            let gest_AI_2018_3 = document.createElement('tr');
            
            let gest_AI_2018_4 = document.createElement('th');
            gest_AI_2018_4.setAttribute('scope', 'col');
            gest_AI_2018_4.innerHTML = '#';
            
            let gest_AI_2018_5 = document.createElement('th');
            gest_AI_2018_5.setAttribute('scope', 'col');
            gest_AI_2018_5.innerHTML = 'Gestores';
            
            let gest_AI_2018_6 = document.createElement('th');
            gest_AI_2018_6.setAttribute('scope', 'col');
            gest_AI_2018_6.innerHTML = 'Melhores';
            
            let gest_AI_2018_7 = document.createElement('th');
            gest_AI_2018_7.setAttribute('scope', 'col');
            gest_AI_2018_7.innerHTML = 'Intermediários';
            
            let gest_AI_2018_8 = document.createElement('th');
            gest_AI_2018_8.setAttribute('scope', 'col');
            gest_AI_2018_8.innerHTML = 'Piores';
            
            gest_AI_2018_3.appendChild(gest_AI_2018_4);
            gest_AI_2018_3.appendChild(gest_AI_2018_5);
            gest_AI_2018_3.appendChild(gest_AI_2018_6);
            gest_AI_2018_3.appendChild(gest_AI_2018_7);
            gest_AI_2018_3.appendChild(gest_AI_2018_8);
            
            gest_AI_2018_2.appendChild(gest_AI_2018_3);
            gest_AI_2018_1.appendChild(gest_AI_2018_2);
            
        }
        count_2++;
        let gest_AI_2018_10 = document.createElement('tr');
        
        let gest_AI_2018_11 = document.createElement('td');
        gest_AI_2018_11.setAttribute('scope', 'row');
        gest_AI_2018_11.innerHTML = count_2;
        
        let gest_AI_2018_12 = document.createElement('td');
        gest_AI_2018_12.innerHTML = i;
        
        let gest_AI_2018_13 = document.createElement('td');
        gest_AI_2018_13.innerHTML = gestores_AI_2018[0][i];
        
        let gest_AI_2018_14 = document.createElement('td');
        gest_AI_2018_14.innerHTML = gestores_AI_2018[1][i];
        
        let gest_AI_2018_15 = document.createElement('td');
        gest_AI_2018_15.innerHTML = gestores_AI_2018[2][i];
    
        gest_AI_2018_10.appendChild(gest_AI_2018_11);
        gest_AI_2018_10.appendChild(gest_AI_2018_12);
        gest_AI_2018_10.appendChild(gest_AI_2018_13);
        gest_AI_2018_10.appendChild(gest_AI_2018_14);
        gest_AI_2018_10.appendChild(gest_AI_2018_15);
        
        gest_AI_2018_9.appendChild(gest_AI_2018_10);
            
    }
    
        gest_AI_2018_1.appendChild(gest_AI_2018_9);
        gest_AI_2018.appendChild(gest_AI_2018_1);

//********************************************************************************     
//********************************************************************************


var gest_AI_2017 = document.getElementById('AI_2017_gestores');
var gest_AI_2017_1 = document.createElement('table');
gest_AI_2017_1.setAttribute('class', 'table table-hover');
    
var gest_AI_2017_9 = document.createElement('tbody');
var count_2 = 0;
    
for(let i of tabelaLabels_2){
        
        if(count_2 === 0){
            let gest_AI_2017_2 = document.createElement('thead');
            let gest_AI_2017_3 = document.createElement('tr');
            
            let gest_AI_2017_4 = document.createElement('th');
            gest_AI_2017_4.setAttribute('scope', 'col');
            gest_AI_2017_4.innerHTML = '#';
            
            let gest_AI_2017_5 = document.createElement('th');
            gest_AI_2017_5.setAttribute('scope', 'col');
            gest_AI_2017_5.innerHTML = 'Gestores';
            
            let gest_AI_2017_6 = document.createElement('th');
            gest_AI_2017_6.setAttribute('scope', 'col');
            gest_AI_2017_6.innerHTML = 'Melhores';
            
            let gest_AI_2017_7 = document.createElement('th');
            gest_AI_2017_7.setAttribute('scope', 'col');
            gest_AI_2017_7.innerHTML = 'Intermediários';
            
            let gest_AI_2017_8 = document.createElement('th');
            gest_AI_2017_8.setAttribute('scope', 'col');
            gest_AI_2017_8.innerHTML = 'Piores';
            
            gest_AI_2017_3.appendChild(gest_AI_2017_4);
            gest_AI_2017_3.appendChild(gest_AI_2017_5);
            gest_AI_2017_3.appendChild(gest_AI_2017_6);
            gest_AI_2017_3.appendChild(gest_AI_2017_7);
            gest_AI_2017_3.appendChild(gest_AI_2017_8);
            
            gest_AI_2017_2.appendChild(gest_AI_2017_3);
            gest_AI_2017_1.appendChild(gest_AI_2017_2);
            
        }
        count_2++;
        let gest_AI_2017_10 = document.createElement('tr');
        
        let gest_AI_2017_11 = document.createElement('td');
        gest_AI_2017_11.setAttribute('scope', 'row');
        gest_AI_2017_11.innerHTML = count_2;
        
        let gest_AI_2017_12 = document.createElement('td');
        gest_AI_2017_12.innerHTML = i;
        
        let gest_AI_2017_13 = document.createElement('td');
        gest_AI_2017_13.innerHTML = gestores_AI_2017[0][i];
        
        let gest_AI_2017_14 = document.createElement('td');
        gest_AI_2017_14.innerHTML = gestores_AI_2017[1][i];
        
        let gest_AI_2017_15 = document.createElement('td');
        gest_AI_2017_15.innerHTML = gestores_AI_2017[2][i];
    
        gest_AI_2017_10.appendChild(gest_AI_2017_11);
        gest_AI_2017_10.appendChild(gest_AI_2017_12);
        gest_AI_2017_10.appendChild(gest_AI_2017_13);
        gest_AI_2017_10.appendChild(gest_AI_2017_14);
        gest_AI_2017_10.appendChild(gest_AI_2017_15);
        
        gest_AI_2017_9.appendChild(gest_AI_2017_10);
            
    }
    
        gest_AI_2017_1.appendChild(gest_AI_2017_9);
        gest_AI_2017.appendChild(gest_AI_2017_1);

//********************************************************************************     
//********************************************************************************

var gest_AF_2018 = document.getElementById('AF_2018_gestores');
var gest_AF_2018_1 = document.createElement('table');
gest_AF_2018_1.setAttribute('class', 'table table-hover');
    
var gest_AF_2018_9 = document.createElement('tbody');
var count_2 = 0;
    
for(let i of tabelaLabels_2){
        
        if(count_2 === 0){
            let gest_AF_2018_2 = document.createElement('thead');
            let gest_AF_2018_3 = document.createElement('tr');
            
            let gest_AF_2018_4 = document.createElement('th');
            gest_AF_2018_4.setAttribute('scope', 'col');
            gest_AF_2018_4.innerHTML = '#';
            
            let gest_AF_2018_5 = document.createElement('th');
            gest_AF_2018_5.setAttribute('scope', 'col');
            gest_AF_2018_5.innerHTML = 'Gestores';
            
            let gest_AF_2018_6 = document.createElement('th');
            gest_AF_2018_6.setAttribute('scope', 'col');
            gest_AF_2018_6.innerHTML = 'Melhores';
            
            let gest_AF_2018_7 = document.createElement('th');
            gest_AF_2018_7.setAttribute('scope', 'col');
            gest_AF_2018_7.innerHTML = 'Intermediários';
            
            let gest_AF_2018_8 = document.createElement('th');
            gest_AF_2018_8.setAttribute('scope', 'col');
            gest_AF_2018_8.innerHTML = 'Piores';
            
            gest_AF_2018_3.appendChild(gest_AF_2018_4);
            gest_AF_2018_3.appendChild(gest_AF_2018_5);
            gest_AF_2018_3.appendChild(gest_AF_2018_6);
            gest_AF_2018_3.appendChild(gest_AF_2018_7);
            gest_AF_2018_3.appendChild(gest_AF_2018_8);
            
            gest_AF_2018_2.appendChild(gest_AF_2018_3);
            gest_AF_2018_1.appendChild(gest_AF_2018_2);
            
        }
        count_2++;
        let gest_AF_2018_10 = document.createElement('tr');
        
        let gest_AF_2018_11 = document.createElement('td');
        gest_AF_2018_11.setAttribute('scope', 'row');
        gest_AF_2018_11.innerHTML = count_2;
        
        let gest_AF_2018_12 = document.createElement('td');
        gest_AF_2018_12.innerHTML = i;
        
        let gest_AF_2018_13 = document.createElement('td');
        gest_AF_2018_13.innerHTML = gestores_AF_2018[0][i];
        
        let gest_AF_2018_14 = document.createElement('td');
        gest_AF_2018_14.innerHTML = gestores_AF_2018[1][i];
        
        let gest_AF_2018_15 = document.createElement('td');
        gest_AF_2018_15.innerHTML = gestores_AF_2018[2][i];
    
        gest_AF_2018_10.appendChild(gest_AF_2018_11);
        gest_AF_2018_10.appendChild(gest_AF_2018_12);
        gest_AF_2018_10.appendChild(gest_AF_2018_13);
        gest_AF_2018_10.appendChild(gest_AF_2018_14);
        gest_AF_2018_10.appendChild(gest_AF_2018_15);
        
        gest_AF_2018_9.appendChild(gest_AF_2018_10);
            
    }
    
        gest_AF_2018_1.appendChild(gest_AF_2018_9);
        gest_AF_2018.appendChild(gest_AF_2018_1);

//********************************************************************************     
//********************************************************************************

var gest_AF_2017 = document.getElementById('AF_2017_gestores');
var gest_AF_2017_1 = document.createElement('table');
gest_AF_2017_1.setAttribute('class', 'table table-hover');
    
var gest_AF_2017_9 = document.createElement('tbody');
var count_2 = 0;
    
for(let i of tabelaLabels_2){
        
        if(count_2 === 0){
            let gest_AF_2017_2 = document.createElement('thead');
            let gest_AF_2017_3 = document.createElement('tr');
            
            let gest_AF_2017_4 = document.createElement('th');
            gest_AF_2017_4.setAttribute('scope', 'col');
            gest_AF_2017_4.innerHTML = '#';
            
            let gest_AF_2017_5 = document.createElement('th');
            gest_AF_2017_5.setAttribute('scope', 'col');
            gest_AF_2017_5.innerHTML = 'Gestores';
            
            let gest_AF_2017_6 = document.createElement('th');
            gest_AF_2017_6.setAttribute('scope', 'col');
            gest_AF_2017_6.innerHTML = 'Melhores';
            
            let gest_AF_2017_7 = document.createElement('th');
            gest_AF_2017_7.setAttribute('scope', 'col');
            gest_AF_2017_7.innerHTML = 'Intermediários';
            
            let gest_AF_2017_8 = document.createElement('th');
            gest_AF_2017_8.setAttribute('scope', 'col');
            gest_AF_2017_8.innerHTML = 'Piores';
            
            gest_AF_2017_3.appendChild(gest_AF_2017_4);
            gest_AF_2017_3.appendChild(gest_AF_2017_5);
            gest_AF_2017_3.appendChild(gest_AF_2017_6);
            gest_AF_2017_3.appendChild(gest_AF_2017_7);
            gest_AF_2017_3.appendChild(gest_AF_2017_8);
            
            gest_AF_2017_2.appendChild(gest_AF_2017_3);
            gest_AF_2017_1.appendChild(gest_AF_2017_2);
            
        }
        count_2++;
        let gest_AF_2017_10 = document.createElement('tr');
        
        let gest_AF_2017_11 = document.createElement('td');
        gest_AF_2017_11.setAttribute('scope', 'row');
        gest_AF_2017_11.innerHTML = count_2;
        
        let gest_AF_2017_12 = document.createElement('td');
        gest_AF_2017_12.innerHTML = i;
        
        let gest_AF_2017_13 = document.createElement('td');
        gest_AF_2017_13.innerHTML = gestores_AF_2017[0][i];
        
        let gest_AF_2017_14 = document.createElement('td');
        gest_AF_2017_14.innerHTML = gestores_AF_2017[1][i];
        
        let gest_AF_2017_15 = document.createElement('td');
        gest_AF_2017_15.innerHTML = gestores_AF_2017[2][i];
    
        gest_AF_2017_10.appendChild(gest_AF_2017_11);
        gest_AF_2017_10.appendChild(gest_AF_2017_12);
        gest_AF_2017_10.appendChild(gest_AF_2017_13);
        gest_AF_2017_10.appendChild(gest_AF_2017_14);
        gest_AF_2017_10.appendChild(gest_AF_2017_15);
        
        gest_AF_2017_9.appendChild(gest_AF_2017_10);
            
    }
    
        gest_AF_2017_1.appendChild(gest_AF_2017_9);
        gest_AF_2017.appendChild(gest_AF_2017_1);

//********************************************************************************     
//********************************************************************************

var gest_EM_2018 = document.getElementById('EM_2018_gestores');
var gest_EM_2018_1 = document.createElement('table');
gest_EM_2018_1.setAttribute('class', 'table table-hover');
    
var gest_EM_2018_9 = document.createElement('tbody');
var count_2 = 0;
    
for(let i of tabelaLabels_2){
        
        if(count_2 === 0){
            let gest_EM_2018_2 = document.createElement('thead');
            let gest_EM_2018_3 = document.createElement('tr');
            
            let gest_EM_2018_4 = document.createElement('th');
            gest_EM_2018_4.setAttribute('scope', 'col');
            gest_EM_2018_4.innerHTML = '#';
            
            let gest_EM_2018_5 = document.createElement('th');
            gest_EM_2018_5.setAttribute('scope', 'col');
            gest_EM_2018_5.innerHTML = 'Gestores';
            
            let gest_EM_2018_6 = document.createElement('th');
            gest_EM_2018_6.setAttribute('scope', 'col');
            gest_EM_2018_6.innerHTML = 'Melhores';
            
            let gest_EM_2018_7 = document.createElement('th');
            gest_EM_2018_7.setAttribute('scope', 'col');
            gest_EM_2018_7.innerHTML = 'Intermediários';
            
            let gest_EM_2018_8 = document.createElement('th');
            gest_EM_2018_8.setAttribute('scope', 'col');
            gest_EM_2018_8.innerHTML = 'Piores';
            
            gest_EM_2018_3.appendChild(gest_EM_2018_4);
            gest_EM_2018_3.appendChild(gest_EM_2018_5);
            gest_EM_2018_3.appendChild(gest_EM_2018_6);
            gest_EM_2018_3.appendChild(gest_EM_2018_7);
            gest_EM_2018_3.appendChild(gest_EM_2018_8);
            
            gest_EM_2018_2.appendChild(gest_EM_2018_3);
            gest_EM_2018_1.appendChild(gest_EM_2018_2);
            
        }
        count_2++;
        let gest_EM_2018_10 = document.createElement('tr');
        
        let gest_EM_2018_11 = document.createElement('td');
        gest_EM_2018_11.setAttribute('scope', 'row');
        gest_EM_2018_11.innerHTML = count_2;
        
        let gest_EM_2018_12 = document.createElement('td');
        gest_EM_2018_12.innerHTML = i;
        
        let gest_EM_2018_13 = document.createElement('td');
        gest_EM_2018_13.innerHTML = gestores_EM_2018[0][i];
        
        let gest_EM_2018_14 = document.createElement('td');
        gest_EM_2018_14.innerHTML = gestores_EM_2018[1][i];
        
        let gest_EM_2018_15 = document.createElement('td');
        gest_EM_2018_15.innerHTML = gestores_EM_2018[2][i];
    
        gest_EM_2018_10.appendChild(gest_EM_2018_11);
        gest_EM_2018_10.appendChild(gest_EM_2018_12);
        gest_EM_2018_10.appendChild(gest_EM_2018_13);
        gest_EM_2018_10.appendChild(gest_EM_2018_14);
        gest_EM_2018_10.appendChild(gest_EM_2018_15);
        
        gest_EM_2018_9.appendChild(gest_EM_2018_10);
            
    }
    
        gest_EM_2018_1.appendChild(gest_EM_2018_9);
        gest_EM_2018.appendChild(gest_EM_2018_1);

//********************************************************************************     
//********************************************************************************

var gest_EM_2017 = document.getElementById('EM_2017_gestores');
var gest_EM_2017_1 = document.createElement('table');
gest_EM_2017_1.setAttribute('class', 'table table-hover');
    
var gest_EM_2017_9 = document.createElement('tbody');
var count_2 = 0;
    
for(let i of tabelaLabels_2){
        
        if(count_2 === 0){
            let gest_EM_2017_2 = document.createElement('thead');
            let gest_EM_2017_3 = document.createElement('tr');
            
            let gest_EM_2017_4 = document.createElement('th');
            gest_EM_2017_4.setAttribute('scope', 'col');
            gest_EM_2017_4.innerHTML = '#';
            
            let gest_EM_2017_5 = document.createElement('th');
            gest_EM_2017_5.setAttribute('scope', 'col');
            gest_EM_2017_5.innerHTML = 'Gestores';
            
            let gest_EM_2017_6 = document.createElement('th');
            gest_EM_2017_6.setAttribute('scope', 'col');
            gest_EM_2017_6.innerHTML = 'Melhores';
            
            let gest_EM_2017_7 = document.createElement('th');
            gest_EM_2017_7.setAttribute('scope', 'col');
            gest_EM_2017_7.innerHTML = 'Intermediários';
            
            let gest_EM_2017_8 = document.createElement('th');
            gest_EM_2017_8.setAttribute('scope', 'col');
            gest_EM_2017_8.innerHTML = 'Piores';
            
            gest_EM_2017_3.appendChild(gest_EM_2017_4);
            gest_EM_2017_3.appendChild(gest_EM_2017_5);
            gest_EM_2017_3.appendChild(gest_EM_2017_6);
            gest_EM_2017_3.appendChild(gest_EM_2017_7);
            gest_EM_2017_3.appendChild(gest_EM_2017_8);
            
            gest_EM_2017_2.appendChild(gest_EM_2017_3);
            gest_EM_2017_1.appendChild(gest_EM_2017_2);
            
        }
        count_2++;
        let gest_EM_2017_10 = document.createElement('tr');
        
        let gest_EM_2017_11 = document.createElement('td');
        gest_EM_2017_11.setAttribute('scope', 'row');
        gest_EM_2017_11.innerHTML = count_2;
        
        let gest_EM_2017_12 = document.createElement('td');
        gest_EM_2017_12.innerHTML = i;
        
        let gest_EM_2017_13 = document.createElement('td');
        gest_EM_2017_13.innerHTML = gestores_EM_2017[0][i];
        
        let gest_EM_2017_14 = document.createElement('td');
        gest_EM_2017_14.innerHTML = gestores_EM_2017[1][i];
        
        let gest_EM_2017_15 = document.createElement('td');
        gest_EM_2017_15.innerHTML = gestores_EM_2017[2][i];
    
        gest_EM_2017_10.appendChild(gest_EM_2017_11);
        gest_EM_2017_10.appendChild(gest_EM_2017_12);
        gest_EM_2017_10.appendChild(gest_EM_2017_13);
        gest_EM_2017_10.appendChild(gest_EM_2017_14);
        gest_EM_2017_10.appendChild(gest_EM_2017_15);
        
        gest_EM_2017_9.appendChild(gest_EM_2017_10);
            
    }
    
        gest_EM_2017_1.appendChild(gest_EM_2017_9);
        gest_EM_2017.appendChild(gest_EM_2017_1);

//********************************************************************************     
//********************************************************************************
