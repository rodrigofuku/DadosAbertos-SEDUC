const formacao_gestores_AF_2017 = [
{
"NIVEL_ENSINO":"Anos Finais",
"ANO":2017,
"GRUPO":"Intermediarios",
"ENSINO_MEDIO":0,
"GRADUACAO":77,
"ESPECIALIZACAO":12,
"MESTRADO":10,
"DOUTORADO":0
},
{
"NIVEL_ENSINO":"Anos Finais",
"ANO":2017,
"GRUPO":"Melhores",
"ENSINO_MEDIO":0,
"GRADUACAO":67,
"ESPECIALIZACAO":21,
"MESTRADO":4,
"DOUTORADO":0
},
{
"NIVEL_ENSINO":"Anos Finais",
"ANO":2017,
"GRUPO":"Piores",
"ENSINO_MEDIO":0,
"GRADUACAO":74,
"ESPECIALIZACAO":8,
"MESTRADO":9,
"DOUTORADO":2
}]


const formacao_gestores_AF_2018 = 
[{
"NIVEL_ENSINO":"Anos Finais",
"ANO":2018,
"GRUPO":"Intermediarios",
"ENSINO_MEDIO":1,
"GRADUACAO":76,
"ESPECIALIZACAO":8,
"MESTRADO":9,
"DOUTORADO":2
    
},
{
"NIVEL_ENSINO":"Anos Finais",
"ANO":2018,
"GRUPO":"Melhores",
"ENSINO_MEDIO":0,
"GRADUACAO":74,
"ESPECIALIZACAO":17,
"MESTRADO":5,
"DOUTORADO":0
},
{
"NIVEL_ENSINO":"Anos Finais",
"ANO":2018,
"GRUPO":"Piores",
"ENSINO_MEDIO":0,
"GRADUACAO":67,
"ESPECIALIZACAO":18,
"MESTRADO":10,
"DOUTORADO":1
}]

const formacao_gestores_AI_2017 = [
{
"NIVEL_ENSINO":"Anos Iniciais",
"ANO":2017,
"GRUPO":"Intermediarios",
"ENSINO_MEDIO":0,
"GRADUACAO":78,
"ESPECIALIZACAO":10,
"MESTRADO":9,
"DOUTORADO":1
    
},
{
    "NIVEL_ENSINO":"Anos Iniciais",
    "ANO":2017,
    "GRUPO":"Melhores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":74,
    "ESPECIALIZACAO":10,
    "MESTRADO":10,
    "DOUTORADO":4
    
},
{
    "NIVEL_ENSINO":"Anos Iniciais",
    "ANO":2017,
    "GRUPO":"Piores",
    "ENSINO_MEDIO":1,
    "GRADUACAO":72,
    "ESPECIALIZACAO":11,
    "MESTRADO":12,
    "DOUTORADO":0
    
}]

const formacao_gestores_AI_2018 = [ 
{
    "NIVEL_ENSINO":"Anos Iniciais",
    "ANO":2018,
    "GRUPO":"Intermediarios",
    "ENSINO_MEDIO":1,
    "GRADUACAO":75,
    "ESPECIALIZACAO":9,
    "MESTRADO":11,
    "DOUTORADO":1
    
},
{
    "NIVEL_ENSINO":"Anos Iniciais",
    "ANO":2018,
    "GRUPO":"Melhores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":79,
    "ESPECIALIZACAO":13,
    "MESTRADO":6,
    "DOUTORADO":0
    
}
,
{
    "NIVEL_ENSINO":"Anos Iniciais",
    "ANO":2018,
    "GRUPO":"Piores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":72,
    "ESPECIALIZACAO":14,
    "MESTRADO":11,
    "DOUTORADO":0
    
}]

const formacao_gestores_EM_2017 = [
{
    "NIVEL_ENSINO":"Ensino Medio",
    "ANO":2017,
    "GRUPO":"Intermediarios",
    "ENSINO_MEDIO":0,
    "GRADUACAO":76,
    "ESPECIALIZACAO":9,
    "MESTRADO":7,
    "DOUTORADO":2
    
},
{
    "NIVEL_ENSINO":"Ensino Medio",
    "ANO":2017,
    "GRUPO":"Melhores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":79,
    "ESPECIALIZACAO":9,
    "MESTRADO":5,
    "DOUTORADO":0
    
},
{
    "NIVEL_ENSINO":"Ensino Medio",
    "ANO":2017,
    "GRUPO":"Piores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":78,
    "ESPECIALIZACAO":10,
    "MESTRADO":8,
    "DOUTORADO":1
    
}]

const formacao_gestores_EM_2018 = [
{
    "NIVEL_ENSINO":"Ensino Medio",
    "ANO":2018,
    "GRUPO":"Intermediarios",
    "ENSINO_MEDIO":0,
    "GRADUACAO":74,
    "ESPECIALIZACAO":12,
    "MESTRADO":6,
    "DOUTORADO":2
    
},
{
    "NIVEL_ENSINO":"Ensino Medio",
    "ANO":2018,
    "GRUPO":"Melhores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":85,
    "ESPECIALIZACAO":6,
    "MESTRADO":4,
    "DOUTORADO":0
    
},
{
    "NIVEL_ENSINO":"Ensino Medio",
    "ANO":2018,
    "GRUPO":"Piores",
    "ENSINO_MEDIO":0,
    "GRADUACAO":69,
    "ESPECIALIZACAO":14,
    "MESTRADO":11,
    "DOUTORADO":1
    
}]

const tabelaLabels_3 = ['ENSINO_MEDIO', 'GRADUACAO', 'ESPECIALIZACAO',
'MESTRADO','DOUTORADO']



var form_gest_AI_2018 = document.getElementById('AI_2018_formacao_gestores');
var form_gest_AI_2018_1 = document.createElement('table');
form_gest_AI_2018_1.setAttribute('class', 'table table-hover');
    
var form_gest_AI_2018_9 = document.createElement('tbody');
var count_3 = 0;
    
for(let i of tabelaLabels_3){
        
        if(count_3 === 0){
            let form_gest_AI_2018_2 = document.createElement('thead');
            let form_gest_AI_2018_3 = document.createElement('tr');
            
            let form_gest_AI_2018_4 = document.createElement('th');
            form_gest_AI_2018_4.setAttribute('scope', 'col');
            form_gest_AI_2018_4.innerHTML = '#';
            
            let form_gest_AI_2018_5 = document.createElement('th');
            form_gest_AI_2018_5.setAttribute('scope', 'col');
            form_gest_AI_2018_5.innerHTML = 'Formação';
            
            let form_gest_AI_2018_6 = document.createElement('th');
            form_gest_AI_2018_6.setAttribute('scope', 'col');
            form_gest_AI_2018_6.innerHTML = 'Melhores';
            
            let form_gest_AI_2018_7 = document.createElement('th');
            form_gest_AI_2018_7.setAttribute('scope', 'col');
            form_gest_AI_2018_7.innerHTML = 'Intermediários';
            
            let form_gest_AI_2018_8 = document.createElement('th');
            form_gest_AI_2018_8.setAttribute('scope', 'col');
            form_gest_AI_2018_8.innerHTML = 'Piores';
            
            form_gest_AI_2018_3.appendChild(form_gest_AI_2018_4);
            form_gest_AI_2018_3.appendChild(form_gest_AI_2018_5);
            form_gest_AI_2018_3.appendChild(form_gest_AI_2018_6);
            form_gest_AI_2018_3.appendChild(form_gest_AI_2018_7);
            form_gest_AI_2018_3.appendChild(form_gest_AI_2018_8);
            
            form_gest_AI_2018_2.appendChild(form_gest_AI_2018_3);
            form_gest_AI_2018_1.appendChild(form_gest_AI_2018_2);
            
        }
        count_3++;
        let form_gest_AI_2018_10 = document.createElement('tr');
        
        let form_gest_AI_2018_11 = document.createElement('td');
        form_gest_AI_2018_11.setAttribute('scope', 'row');
        form_gest_AI_2018_11.innerHTML = count_3;
        
        let form_gest_AI_2018_12 = document.createElement('td');
        form_gest_AI_2018_12.innerHTML = i;
        
        let form_gest_AI_2018_13 = document.createElement('td');
        form_gest_AI_2018_13.innerHTML = formacao_gestores_AI_2018[0][i];
        
        let form_gest_AI_2018_14 = document.createElement('td');
        form_gest_AI_2018_14.innerHTML = formacao_gestores_AI_2018[1][i];
        
        let form_gest_AI_2018_15 = document.createElement('td');
        form_gest_AI_2018_15.innerHTML = formacao_gestores_AI_2018[2][i];
    
        form_gest_AI_2018_10.appendChild(form_gest_AI_2018_11);
        form_gest_AI_2018_10.appendChild(form_gest_AI_2018_12);
        form_gest_AI_2018_10.appendChild(form_gest_AI_2018_13);
        form_gest_AI_2018_10.appendChild(form_gest_AI_2018_14);
        form_gest_AI_2018_10.appendChild(form_gest_AI_2018_15);
        
        form_gest_AI_2018_9.appendChild(form_gest_AI_2018_10);
            
    }
    
        form_gest_AI_2018_1.appendChild(form_gest_AI_2018_9);
        form_gest_AI_2018.appendChild(form_gest_AI_2018_1);

//********************************************************************************     
//********************************************************************************


var form_gest_AI_2017 = document.getElementById('AI_2017_formacao_gestores');
var form_gest_AI_2017_1 = document.createElement('table');
form_gest_AI_2017_1.setAttribute('class', 'table table-hover');
    
var form_gest_AI_2017_9 = document.createElement('tbody');
var count_3 = 0;
    
for(let i of tabelaLabels_3){
        
        if(count_3 === 0){
            let form_gest_AI_2017_2 = document.createElement('thead');
            let form_gest_AI_2017_3 = document.createElement('tr');
            
            let form_gest_AI_2017_4 = document.createElement('th');
            form_gest_AI_2017_4.setAttribute('scope', 'col');
            form_gest_AI_2017_4.innerHTML = '#';
            
            let form_gest_AI_2017_5 = document.createElement('th');
            form_gest_AI_2017_5.setAttribute('scope', 'col');
            form_gest_AI_2017_5.innerHTML = 'Formação';
            
            let form_gest_AI_2017_6 = document.createElement('th');
            form_gest_AI_2017_6.setAttribute('scope', 'col');
            form_gest_AI_2017_6.innerHTML = 'Melhores';
            
            let form_gest_AI_2017_7 = document.createElement('th');
            form_gest_AI_2017_7.setAttribute('scope', 'col');
            form_gest_AI_2017_7.innerHTML = 'Intermediários';
            
            let form_gest_AI_2017_8 = document.createElement('th');
            form_gest_AI_2017_8.setAttribute('scope', 'col');
            form_gest_AI_2017_8.innerHTML = 'Piores';
            
            form_gest_AI_2017_3.appendChild(form_gest_AI_2017_4);
            form_gest_AI_2017_3.appendChild(form_gest_AI_2017_5);
            form_gest_AI_2017_3.appendChild(form_gest_AI_2017_6);
            form_gest_AI_2017_3.appendChild(form_gest_AI_2017_7);
            form_gest_AI_2017_3.appendChild(form_gest_AI_2017_8);
            
            form_gest_AI_2017_2.appendChild(form_gest_AI_2017_3);
            form_gest_AI_2017_1.appendChild(form_gest_AI_2017_2);
            
        }
        count_3++;
        let form_gest_AI_2017_10 = document.createElement('tr');
        
        let form_gest_AI_2017_11 = document.createElement('td');
        form_gest_AI_2017_11.setAttribute('scope', 'row');
        form_gest_AI_2017_11.innerHTML = count_3;
        
        let form_gest_AI_2017_12 = document.createElement('td');
        form_gest_AI_2017_12.innerHTML = i;
        
        let form_gest_AI_2017_13 = document.createElement('td');
        form_gest_AI_2017_13.innerHTML = formacao_gestores_AI_2017[0][i];
        
        let form_gest_AI_2017_14 = document.createElement('td');
        form_gest_AI_2017_14.innerHTML = formacao_gestores_AI_2017[1][i];
        
        let form_gest_AI_2017_15 = document.createElement('td');
        form_gest_AI_2017_15.innerHTML = formacao_gestores_AI_2017[2][i];
    
        form_gest_AI_2017_10.appendChild(form_gest_AI_2017_11);
        form_gest_AI_2017_10.appendChild(form_gest_AI_2017_12);
        form_gest_AI_2017_10.appendChild(form_gest_AI_2017_13);
        form_gest_AI_2017_10.appendChild(form_gest_AI_2017_14);
        form_gest_AI_2017_10.appendChild(form_gest_AI_2017_15);
        
        form_gest_AI_2017_9.appendChild(form_gest_AI_2017_10);
            
    }
    
        form_gest_AI_2017_1.appendChild(form_gest_AI_2017_9);
        form_gest_AI_2017.appendChild(form_gest_AI_2017_1);

//********************************************************************************     
//********************************************************************************

var form_gest_AF_2018 = document.getElementById('AF_2018_formacao_gestores');
var form_gest_AF_2018_1 = document.createElement('table');
form_gest_AF_2018_1.setAttribute('class', 'table table-hover');
    
var form_gest_AF_2018_9 = document.createElement('tbody');
var count_3 = 0;
    
for(let i of tabelaLabels_3){
        
        if(count_3 === 0){
            let form_gest_AF_2018_2 = document.createElement('thead');
            let form_gest_AF_2018_3 = document.createElement('tr');
            
            let form_gest_AF_2018_4 = document.createElement('th');
            form_gest_AF_2018_4.setAttribute('scope', 'col');
            form_gest_AF_2018_4.innerHTML = '#';
            
            let form_gest_AF_2018_5 = document.createElement('th');
            form_gest_AF_2018_5.setAttribute('scope', 'col');
            form_gest_AF_2018_5.innerHTML = 'Formação';
            
            let form_gest_AF_2018_6 = document.createElement('th');
            form_gest_AF_2018_6.setAttribute('scope', 'col');
            form_gest_AF_2018_6.innerHTML = 'Melhores';
            
            let form_gest_AF_2018_7 = document.createElement('th');
            form_gest_AF_2018_7.setAttribute('scope', 'col');
            form_gest_AF_2018_7.innerHTML = 'Intermediários';
            
            let form_gest_AF_2018_8 = document.createElement('th');
            form_gest_AF_2018_8.setAttribute('scope', 'col');
            form_gest_AF_2018_8.innerHTML = 'Piores';
            
            form_gest_AF_2018_3.appendChild(form_gest_AF_2018_4);
            form_gest_AF_2018_3.appendChild(form_gest_AF_2018_5);
            form_gest_AF_2018_3.appendChild(form_gest_AF_2018_6);
            form_gest_AF_2018_3.appendChild(form_gest_AF_2018_7);
            form_gest_AF_2018_3.appendChild(form_gest_AF_2018_8);
            
            form_gest_AF_2018_2.appendChild(form_gest_AF_2018_3);
            form_gest_AF_2018_1.appendChild(form_gest_AF_2018_2);
            
        }
        count_3++;
        let form_gest_AF_2018_10 = document.createElement('tr');
        
        let form_gest_AF_2018_11 = document.createElement('td');
        form_gest_AF_2018_11.setAttribute('scope', 'row');
        form_gest_AF_2018_11.innerHTML = count_3;
        
        let form_gest_AF_2018_12 = document.createElement('td');
        form_gest_AF_2018_12.innerHTML = i;
        
        let form_gest_AF_2018_13 = document.createElement('td');
        form_gest_AF_2018_13.innerHTML = formacao_gestores_AF_2018[0][i];
        
        let form_gest_AF_2018_14 = document.createElement('td');
        form_gest_AF_2018_14.innerHTML = formacao_gestores_AF_2018[1][i];
        
        let form_gest_AF_2018_15 = document.createElement('td');
        form_gest_AF_2018_15.innerHTML = formacao_gestores_AF_2018[2][i];
    
        form_gest_AF_2018_10.appendChild(form_gest_AF_2018_11);
        form_gest_AF_2018_10.appendChild(form_gest_AF_2018_12);
        form_gest_AF_2018_10.appendChild(form_gest_AF_2018_13);
        form_gest_AF_2018_10.appendChild(form_gest_AF_2018_14);
        form_gest_AF_2018_10.appendChild(form_gest_AF_2018_15);
        
        form_gest_AF_2018_9.appendChild(form_gest_AF_2018_10);
            
    }
    
        form_gest_AF_2018_1.appendChild(form_gest_AF_2018_9);
        form_gest_AF_2018.appendChild(form_gest_AF_2018_1);

//********************************************************************************     
//********************************************************************************

var form_gest_AF_2017 = document.getElementById('AF_2017_formacao_gestores');
var form_gest_AF_2017_1 = document.createElement('table');
form_gest_AF_2017_1.setAttribute('class', 'table table-hover');
    
var form_gest_AF_2017_9 = document.createElement('tbody');
var count_3 = 0;
    
for(let i of tabelaLabels_3){
        
        if(count_3 === 0){
            let form_gest_AF_2017_2 = document.createElement('thead');
            let form_gest_AF_2017_3 = document.createElement('tr');
            
            let form_gest_AF_2017_4 = document.createElement('th');
            form_gest_AF_2017_4.setAttribute('scope', 'col');
            form_gest_AF_2017_4.innerHTML = '#';
            
            let form_gest_AF_2017_5 = document.createElement('th');
            form_gest_AF_2017_5.setAttribute('scope', 'col');
            form_gest_AF_2017_5.innerHTML = 'Formação';
            
            let form_gest_AF_2017_6 = document.createElement('th');
            form_gest_AF_2017_6.setAttribute('scope', 'col');
            form_gest_AF_2017_6.innerHTML = 'Melhores';
            
            let form_gest_AF_2017_7 = document.createElement('th');
            form_gest_AF_2017_7.setAttribute('scope', 'col');
            form_gest_AF_2017_7.innerHTML = 'Intermediários';
            
            let form_gest_AF_2017_8 = document.createElement('th');
            form_gest_AF_2017_8.setAttribute('scope', 'col');
            form_gest_AF_2017_8.innerHTML = 'Piores';
            
            form_gest_AF_2017_3.appendChild(form_gest_AF_2017_4);
            form_gest_AF_2017_3.appendChild(form_gest_AF_2017_5);
            form_gest_AF_2017_3.appendChild(form_gest_AF_2017_6);
            form_gest_AF_2017_3.appendChild(form_gest_AF_2017_7);
            form_gest_AF_2017_3.appendChild(form_gest_AF_2017_8);
            
            form_gest_AF_2017_2.appendChild(form_gest_AF_2017_3);
            form_gest_AF_2017_1.appendChild(form_gest_AF_2017_2);
            
        }
        count_3++;
        let form_gest_AF_2017_10 = document.createElement('tr');
        
        let form_gest_AF_2017_11 = document.createElement('td');
        form_gest_AF_2017_11.setAttribute('scope', 'row');
        form_gest_AF_2017_11.innerHTML = count_3;
        
        let form_gest_AF_2017_12 = document.createElement('td');
        form_gest_AF_2017_12.innerHTML = i;
        
        let form_gest_AF_2017_13 = document.createElement('td');
        form_gest_AF_2017_13.innerHTML = formacao_gestores_AF_2017[0][i];
        
        let form_gest_AF_2017_14 = document.createElement('td');
        form_gest_AF_2017_14.innerHTML = formacao_gestores_AF_2017[1][i];
        
        let form_gest_AF_2017_15 = document.createElement('td');
        form_gest_AF_2017_15.innerHTML = formacao_gestores_AF_2017[2][i];
    
        form_gest_AF_2017_10.appendChild(form_gest_AF_2017_11);
        form_gest_AF_2017_10.appendChild(form_gest_AF_2017_12);
        form_gest_AF_2017_10.appendChild(form_gest_AF_2017_13);
        form_gest_AF_2017_10.appendChild(form_gest_AF_2017_14);
        form_gest_AF_2017_10.appendChild(form_gest_AF_2017_15);
        
        form_gest_AF_2017_9.appendChild(form_gest_AF_2017_10);
            
    }
    
        form_gest_AF_2017_1.appendChild(form_gest_AF_2017_9);
        form_gest_AF_2017.appendChild(form_gest_AF_2017_1);

//********************************************************************************     
//********************************************************************************

var form_gest_EM_2018 = document.getElementById('EM_2018_formacao_gestores');
var form_gest_EM_2018_1 = document.createElement('table');
form_gest_EM_2018_1.setAttribute('class', 'table table-hover');
    
var form_gest_EM_2018_9 = document.createElement('tbody');
var count_3 = 0;
    
for(let i of tabelaLabels_3){
        
        if(count_3 === 0){
            let form_gest_EM_2018_2 = document.createElement('thead');
            let form_gest_EM_2018_3 = document.createElement('tr');
            
            let form_gest_EM_2018_4 = document.createElement('th');
            form_gest_EM_2018_4.setAttribute('scope', 'col');
            form_gest_EM_2018_4.innerHTML = '#';
            
            let form_gest_EM_2018_5 = document.createElement('th');
            form_gest_EM_2018_5.setAttribute('scope', 'col');
            form_gest_EM_2018_5.innerHTML = 'Formação';
            
            let form_gest_EM_2018_6 = document.createElement('th');
            form_gest_EM_2018_6.setAttribute('scope', 'col');
            form_gest_EM_2018_6.innerHTML = 'Melhores';
            
            let form_gest_EM_2018_7 = document.createElement('th');
            form_gest_EM_2018_7.setAttribute('scope', 'col');
            form_gest_EM_2018_7.innerHTML = 'Intermediários';
            
            let form_gest_EM_2018_8 = document.createElement('th');
            form_gest_EM_2018_8.setAttribute('scope', 'col');
            form_gest_EM_2018_8.innerHTML = 'Piores';
            
            form_gest_EM_2018_3.appendChild(form_gest_EM_2018_4);
            form_gest_EM_2018_3.appendChild(form_gest_EM_2018_5);
            form_gest_EM_2018_3.appendChild(form_gest_EM_2018_6);
            form_gest_EM_2018_3.appendChild(form_gest_EM_2018_7);
            form_gest_EM_2018_3.appendChild(form_gest_EM_2018_8);
            
            form_gest_EM_2018_2.appendChild(form_gest_EM_2018_3);
            form_gest_EM_2018_1.appendChild(form_gest_EM_2018_2);
            
        }
        count_3++;
        let form_gest_EM_2018_10 = document.createElement('tr');
        
        let form_gest_EM_2018_11 = document.createElement('td');
        form_gest_EM_2018_11.setAttribute('scope', 'row');
        form_gest_EM_2018_11.innerHTML = count_3;
        
        let form_gest_EM_2018_12 = document.createElement('td');
        form_gest_EM_2018_12.innerHTML = i;
        
        let form_gest_EM_2018_13 = document.createElement('td');
        form_gest_EM_2018_13.innerHTML = formacao_gestores_EM_2018[0][i];
        
        let form_gest_EM_2018_14 = document.createElement('td');
        form_gest_EM_2018_14.innerHTML = formacao_gestores_EM_2018[1][i];
        
        let form_gest_EM_2018_15 = document.createElement('td');
        form_gest_EM_2018_15.innerHTML = formacao_gestores_EM_2018[2][i];
    
        form_gest_EM_2018_10.appendChild(form_gest_EM_2018_11);
        form_gest_EM_2018_10.appendChild(form_gest_EM_2018_12);
        form_gest_EM_2018_10.appendChild(form_gest_EM_2018_13);
        form_gest_EM_2018_10.appendChild(form_gest_EM_2018_14);
        form_gest_EM_2018_10.appendChild(form_gest_EM_2018_15);
        
        form_gest_EM_2018_9.appendChild(form_gest_EM_2018_10);
            
    }
    
        form_gest_EM_2018_1.appendChild(form_gest_EM_2018_9);
        form_gest_EM_2018.appendChild(form_gest_EM_2018_1);

//********************************************************************************     
//********************************************************************************

var form_gest_EM_2017 = document.getElementById('EM_2017_formacao_gestores');
var form_gest_EM_2017_1 = document.createElement('table');
form_gest_EM_2017_1.setAttribute('class', 'table table-hover');
    
var form_gest_EM_2017_9 = document.createElement('tbody');
var count_3 = 0;
    
for(let i of tabelaLabels_3){
        
        if(count_3 === 0){
            let form_gest_EM_2017_2 = document.createElement('thead');
            let form_gest_EM_2017_3 = document.createElement('tr');
            
            let form_gest_EM_2017_4 = document.createElement('th');
            form_gest_EM_2017_4.setAttribute('scope', 'col');
            form_gest_EM_2017_4.innerHTML = '#';
            
            let form_gest_EM_2017_5 = document.createElement('th');
            form_gest_EM_2017_5.setAttribute('scope', 'col');
            form_gest_EM_2017_5.innerHTML = 'Formação';
            
            let form_gest_EM_2017_6 = document.createElement('th');
            form_gest_EM_2017_6.setAttribute('scope', 'col');
            form_gest_EM_2017_6.innerHTML = 'Melhores';
            
            let form_gest_EM_2017_7 = document.createElement('th');
            form_gest_EM_2017_7.setAttribute('scope', 'col');
            form_gest_EM_2017_7.innerHTML = 'Intermediários';
            
            let form_gest_EM_2017_8 = document.createElement('th');
            form_gest_EM_2017_8.setAttribute('scope', 'col');
            form_gest_EM_2017_8.innerHTML = 'Piores';
            
            form_gest_EM_2017_3.appendChild(form_gest_EM_2017_4);
            form_gest_EM_2017_3.appendChild(form_gest_EM_2017_5);
            form_gest_EM_2017_3.appendChild(form_gest_EM_2017_6);
            form_gest_EM_2017_3.appendChild(form_gest_EM_2017_7);
            form_gest_EM_2017_3.appendChild(form_gest_EM_2017_8);
            
            form_gest_EM_2017_2.appendChild(form_gest_EM_2017_3);
            form_gest_EM_2017_1.appendChild(form_gest_EM_2017_2);
            
        }
        count_3++;
        let form_gest_EM_2017_10 = document.createElement('tr');
        
        let form_gest_EM_2017_11 = document.createElement('td');
        form_gest_EM_2017_11.setAttribute('scope', 'row');
        form_gest_EM_2017_11.innerHTML = count_3;
        
        let form_gest_EM_2017_12 = document.createElement('td');
        form_gest_EM_2017_12.innerHTML = i;
        
        let form_gest_EM_2017_13 = document.createElement('td');
        form_gest_EM_2017_13.innerHTML = formacao_gestores_EM_2017[0][i];
        
        let form_gest_EM_2017_14 = document.createElement('td');
        form_gest_EM_2017_14.innerHTML = formacao_gestores_EM_2017[1][i];
        
        let form_gest_EM_2017_15 = document.createElement('td');
        form_gest_EM_2017_15.innerHTML = formacao_gestores_EM_2017[2][i];
    
        form_gest_EM_2017_10.appendChild(form_gest_EM_2017_11);
        form_gest_EM_2017_10.appendChild(form_gest_EM_2017_12);
        form_gest_EM_2017_10.appendChild(form_gest_EM_2017_13);
        form_gest_EM_2017_10.appendChild(form_gest_EM_2017_14);
        form_gest_EM_2017_10.appendChild(form_gest_EM_2017_15);
        
        form_gest_EM_2017_9.appendChild(form_gest_EM_2017_10);
            
    }
    
        form_gest_EM_2017_1.appendChild(form_gest_EM_2017_9);
        form_gest_EM_2017.appendChild(form_gest_EM_2017_1);

//********************************************************************************     
//********************************************************************************
