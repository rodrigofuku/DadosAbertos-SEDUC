const dataFrame = require('data-forge');
require('data-forge-fs');

const fs = require('fs');
const path = require('path');
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/';
*/
// TAMANHO DA AMOSTRA
// ANOS INICIAIS - 1464
// ANOS FINAIS - 2051
// ENSINO MEDIO - 2010

// Organiza o conjunto de pastas de database.
//const folders = fs.readdirSync(folderPath1);

// Variável para armazenar os caminhos dos arquivos    
var foldersPath = [];

/*
// DIVIDE OS ARQUIVOS GRANDES
var source = dataFrame.readFileSync(path.join(folderPath2, 'carga_horaria_por_docente_1119.csv')).parseCSV()
var sourceLength = source.toArray().length
var start = [0, (sourceLength/6)+1, ((sourceLength/6)*2)+1, ((sourceLength/6)*3)+1, 
                ((sourceLength/6)*4)+1, ((sourceLength/6)*5)+1]
var end = [(sourceLength/6), (sourceLength/6)*2, (sourceLength/6)*3, (sourceLength/6)*4,
                (sourceLength/6)*5, (sourceLength/6)*6] 
//console.log(sourceLength)
for(let i = 0; i < 6; i++){
    
  //  console.log(`start: ${start[i]} - end: ${end[i]} - i: ${i}`)
    

    var fileName = 'carga_horaria_por_docente_1119_' + (i + 1) + '.csv';

    source.between(start[i],end[i]).asCSV().writeFileSync(path.join(folderPath2, fileName))
                    
        console.log('Terminou! - ' + fileName) 
} */
// DISCIPLINAS SEM DOCENTES ASSOCIADOS
/*
var source = dataFrame.readFileSync(path.join(folderPath1, 'disciplinas_sem_docentes_associados/Atribuicao_Parte_1.csv')).parseCSV()
                .subset(['NM_COMPLETO_ESCOLA','NOME_DISCIPLINA','NR_HORA_AULA_SEMANA', 'MES_VIG', 'PRIMARY_KEY'])
                .parseInts(['NR_HORA_AULA_SEMANA', 'MES_VIG'])
                .asCSV().writeFileSync(path.join(folderPath2, 'atribuicao_parte_1.csv'))
        console.log('Terminou!')

var source = dataFrame.readFileSync(path.join(folderPath1, 'disciplinas_sem_docentes_associados/Atribuicao_Parte_2.csv')).parseCSV()
                .subset(['NM_COMPLETO_ESCOLA','NOME_DISCIPLINA','NR_HORA_AULA_SEMANA', 'MES_VIG', 'PRIMARY_KEY'])
                .parseInts(['NR_HORA_AULA_SEMANA', 'MES_VIG'])
                .asCSV().writeFileSync(path.join(folderPath2, 'atribuicao_parte_2.csv'))
        console.log('Terminou!')

var source = dataFrame.readFileSync(path.join(folderPath1, 'disciplinas_sem_docentes_associados/Atribuicao_Parte_3.csv')).parseCSV()
                .subset(['NM_COMPLETO_ESCOLA','NOME_DISCIPLINA','NR_HORA_AULA_SEMANA', 'MES_VIG', 'PRIMARY_KEY'])
                .parseInts(['NR_HORA_AULA_SEMANA', 'MES_VIG'])
                .asCSV().writeFileSync(path.join(folderPath2, 'atribuicao_parte_3.csv'))
        console.log('Terminou!')

var source = dataFrame.readFileSync(path.join(folderPath1, 'disciplinas_sem_docentes_associados/Atribuicao_Parte_4.csv')).parseCSV()
                .subset(['NM_COMPLETO_ESCOLA','NOME_DISCIPLINA','NR_HORA_AULA_SEMANA', 'MES_VIG', 'PRIMARY_KEY'])
                .parseInts(['NR_HORA_AULA_SEMANA', 'MES_VIG'])
                .asCSV().writeFileSync(path.join(folderPath2, 'atribuicao_parte_4.csv'))
        console.log('Terminou!')
*/

//for(let i = 1; i <= 3; i++){
/*    var file = fs.readFileSync(path.join(folderPath2, 'ausencias_por_servidor_1119.csv'));

    fs.appendFile(path.join(folderPath2, 'ausencias_por_servidor_agg.csv'), file, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
*/    
//}


// FORMACAO POR SERVIDOR


// Selecionando as series a serem utilizadas
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/formacao_por_servidor';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Base Formacao';

var filesFormacao = fs.readdirSync(folderPath1);

for (let i of filesFormacao){
    
    if(!i.toString().includes('DIC')){

        console.log('Abrindo o arquivo...');
        console.log(i)
        console.log('Iniciando o processamento...');

        dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
            .subset(['CIE_ESCOLA','NOME_UA_EXERC','NMCARGO_E','FORMACAO', 'PRIMARY_KEY', 'SECONDARY_KEY', 'TERTIARY_KEY'])
            .asCSV().writeFileSync(path.join(folderPath2, 'Alt_' + i))
        
        console.log('Terminou!')
        console.log('**********************************')

    }
}
*/

/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/formacao_por_servidor';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Base Formacao';

var filesFormacao = fs.readdirSync(folderPath2);

console.log(filesFormacao)

for (let i of filesFormacao){
    
    if(i.toString().includes('Alt_')){

        console.log('Abrindo o arquivo...');
        console.log(i)
        console.log('Iniciando o processamento...');

        var file = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                        .parseInts('CODIGO_CIE')
                        .where(row => row.CIE_ESCOLA > 0)
                        .orderBy(row => row.CIE_ESCOLA)
        
        var source = file.toArray();
        var escola = file.getSeries('CIE_ESCOLA').distinct().toArray();
        
        var professores = [];

        for(var j = 0; j < escola.length; j++){
                   
            // console.log(escola);
            var countProf = 0;
            var countLicenc = 0;
            var primKey, secKey, tertKey;
        
            for(var k = 0; k < source.length; k++){
                
                if(escola[j] === source[k].CIE_ESCOLA && source[k].NMCARGO_E.toString().includes('PROFESSOR')){

                    countProf++;
                    primKey = source[k].PRIMARY_KEY;
                    secKey = source[k].SECONDARY_KEY;
                    tertKey = source[k].TERTIARY_KEY;
                    var nomeEscola = source[k].NOME_UA_EXERC;
 
                }
                if(escola[j] === source[k].CIE_ESCOLA && source[k].NMCARGO_E.toString().includes('PROFESSOR')
                    && source[k].FORMACAO.toString().includes('LICENCIATURA')){
                        
                        countLicenc++;
                        
                }
        
            }            //    console.log(`ESCOLA: ${escola}, PROFESSOR: ${countProf}, LICENCIATURA: ${countLicenc}, 
                        //    PRIMARY_KEY: ${primKey}, SECONDARY_KEY: ${secKey}, TERTIARY_KEY: ${tertKey}`);
            let info = {
                        CODIGO_CIE: escola[j],
                        ESCOLA: nomeEscola, 
                        PROFESSOR: countProf, 
                        LICENCIATURA: countLicenc, 
                        PRIMARY_KEY: primKey, 
                        SECONDARY_KEY: secKey, 
                        TERTIARY_KEY: tertKey
                        };
                        
            professores.push(info);
            
        }
        
        fs.writeFileSync(path.join(folderPath2, i.substr(0, i.length-4) + '.json'),JSON.stringify(professores))
        console.log('Terminou!')
        console.log('*******************************')

    }
}

*/

/*
console.log('Abrindo os arquivos...')

var formacao_1 = dataFrame.readFileSync(path.join(folderPath2, 'Alt_BASE_FORMACAO_0419a_2.json')).parseJSON()
                    //.parseInts(['PROFESSOR', 'LICENCIATURA'])

var formacao_2 = dataFrame.readFileSync(path.join(folderPath2, 'Alt_BASE_FORMACAO_1119a_2.json')).parseJSON()
                    //.parseInts(['PROFESSOR', 'LICENCIATURA'])
 
console.log('Iniciando o processamento...')

formacao_1.concat(formacao_2).groupBy(row => row.CODIGO_CIE)
    .select(group => ({
        CODIGO_CIE: group.first().CODIGO_CIE,
        ESCOLA: group.first().ESCOLA,
        PROFESSOR: group.deflate(row => row.PROFESSOR).average().toFixed(2),
        LICENCIATURA: group.deflate(row => row.LICENCIATURA).average().toFixed(2), 
        
        PRIMARY_KEY: group.first().PRIMARY_KEY,
        SECONDARY_KEY: group.first().SECONDARY_KEY,
        TERTIARY_KEY: group.first().TERTIARY_KEY
    })).orderBy(row => row.CODIGO_CIE).inflate()
    .asCSV().writeFileSync(path.join(folderPath2, 'base_formacao_Tot.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'base_formacao_Tot.csv')).parseCSV()
    .parseFloats(['PROFESSOR', 'LICENCIATURA'])
    .select(row => ({
        CODIGO_CIE: row.CODIGO_CIE,
        ESCOLA: row.ESCOLA,
        PORC_LICENCIATURA: (row.LICENCIATURA/row.PROFESSOR*100).toFixed(2),
        
        PRIMARY_KEY: row.PRIMARY_KEY,
        SECONDARY_KEY: row.SECONDARY_KEY,
        TERTIARY_KEY: row.TERTIARY_KEY
    })).orderBy(row => row.CODIGO_CIE)
    .asCSV().writeFileSync(path.join(folderPath2, 'base_formacao_Porc.csv'))
    
console.log('Terminou!!!')
console.log('**************************************')

*/


// CARGA HORARIA POR DOCENTE
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/carga_horaria_por_docente';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Carga Horaria';
 
var filesCargaHoraria = fs.readdirSync(folderPath1);

for (let i of filesCargaHoraria){
    
    if(!i.includes('DIC')){
        
        console.log('Iniciando o processamento...')
        console.log(i)
     
        var source = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
                        .subset(['CODESC','NOMEESC','DEN_MATERIA','TOT_AULA_LIVRE', 'TOT_AULA_SUBST', 'TOT_GERAL_AULA',
                'TOT_AULA_LIVRE_NOTURNO', 'TOT_AULA_SUBST_NOTURNO', 'TOT_AULAS_NOTURNO','JORNADA','PRIMARY_KEY',
                'SECONDARY_KEY','TERTIARY_KEY'])
                        .asCSV().writeFileSync(path.join(folderPath2, 'Alt_' + i))
                console.log('Terminou!')
                console.log('*****************************')
   
    }
}

*/
/*
//const folderPath1 = '../DadosAbertos-SEDUC/database/original/carga_horaria_por_docente';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Carga Horaria';
 
var filesCargaHoraria = fs.readdirSync(folderPath2);
var cargaArray = [];
for (let i of filesCargaHoraria){

    if(i.toString().includes('Alt_')){
        
        console.log('Iniciando o processamento...')
        console.log(i)

        var file = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                .parseInts(['CODESC','TOT_AULA_LIVRE', 'TOT_AULA_SUBST', 'TOT_GERAL_AULA', 
                'TOT_AULA_LIVRE_NOTURNO','TOT_AULA_SUBST_NOTURNO','TOT_AULAS_NOTURNO'])
                .orderBy(row => row.CODIGO_CIE)

        var escola = file.getSeries('CODESC').distinct().toArray();
        //console.log(escola)
        var source = file.toArray();
        //console.log(source)
        var aulas;

        console.log('Iniciando o processamento...')

        for(var j = 0; j < escola.length; j++){
               
            var countAulaLivreLP = 0;
            var countAulaSubstLP = 0;
            var countGeralAulaLP = 0;
            var countAulaLivreNotLP = 0;
            var countAulaSubstNotLP = 0;
            var countAulasNotLP = 0;
                        
            var countAulaLivreMat = 0;
            var countAulaSubstMat = 0;
            var countGeralAulaMat = 0;
            var countAulaLivreNotMat = 0;
            var countAulaSubstNotMat = 0;
            var countAulasNotMat = 0;
                        
            var countAulaLivreGeral = 0;
            var countAulaSubstGeral = 0;
            var countGeralAulaGeral = 0;
            var countAulaLivreNotGeral = 0;
            var countAulaSubstNotGeral = 0;
            var countAulasNotGeral = 0;
                        
            var countJornadaC = 0;
            var countJornadaB = 0;
            var countJornadaI = 0;
            var countJornadaR = 0;
                        
            var primKey, secKey, tertKey;
            
            for(var k = 0; k < source.length; k++){
                
                if(escola[j] === source[k].CODESC){ 
                    var nomeEscola = source[k].NOMEESC;
                    if(source[k].JORNADA === 'C') countJornadaC++;
                    if(source[k].JORNADA === 'B') countJornadaB++;
                    if(source[k].JORNADA === 'I') countJornadaI++;
                    if(source[k].JORNADA === 'R') countJornadaR++;
                                
                    primKey = source[k].PRIMARY_KEY;
                    secKey = source[k].SECONDARY_KEY;
                    tertKey = source[k].TERTIARY_KEY;
                                
                    countAulaLivreGeral += source[k].TOT_AULA_LIVRE;
                    countAulaSubstGeral += source[k].TOT_AULA_SUBST;
                    countGeralAulaGeral += source[k].TOT_GERAL_AULA;
                    countAulaLivreNotGeral += source[k].TOT_AULA_LIVRE_NOTURNO;
                    countAulaSubstNotGeral += source[k].TOT_AULA_SUBST_NOTURNO;
                    countAulasNotGeral += source[k].TOT_AULAS_NOTURNO;
                                
                    if(source[k].DEN_MATERIA.includes('PORT')){
                        countAulaLivreLP += source[k].TOT_AULA_LIVRE;
                        countAulaSubstLP += source[k].TOT_AULA_SUBST;
                        countGeralAulaLP += source[k].TOT_GERAL_AULA;
                        countAulaLivreNotLP += source[k].TOT_AULA_LIVRE_NOTURNO;
                        countAulaSubstNotLP += source[k].TOT_AULA_SUBST_NOTURNO;
                        countAulasNotLP += source[k].TOT_AULAS_NOTURNO;
                                  
                    } 
                                
                    if(source[k].DEN_MATERIA.includes('MAT')){
                        countAulaLivreMat += source[k].TOT_AULA_LIVRE;
                        countAulaSubstMat += source[k].TOT_AULA_SUBST;
                        countGeralAulaMat += source[k].TOT_GERAL_AULA;
                        countAulaLivreNotMat += source[k].TOT_AULA_LIVRE_NOTURNO;
                        countAulaSubstNotMat += source[k].TOT_AULA_SUBST_NOTURNO;
                        countAulasNotMat += source[k].TOT_AULAS_NOTURNO;
                    }
                                
                }
            }    
            
            let info = {
                            CODIGO_CIE: escola[j],
                            ESCOLA: nomeEscola, 
                            AULAS_LIVRES_LP: countAulaLivreLP, 
                            AULAS_SUBST_LP: countAulaSubstLP,
                            GERAL_AULAS_LP: countGeralAulaLP,
                            AULAS_LIVRES_NOT_LP: countAulaLivreNotLP, 
                            AULAS_SUBST_NOT_LP: countAulaSubstNotLP,
                            GERAL_AULAS_NOT_LP: countAulasNotLP,
                            
                            AULAS_LIVRES_MAT: countAulaLivreMat, 
                            AULAS_SUBST_MAT: countAulaSubstMat,
                            GERAL_AULAS_MAT: countGeralAulaMat,
                            AULAS_LIVRES_NOT_MAT: countAulaLivreNotMat,
                            AULAS_SUBST_NOT_MAT: countAulaSubstNotMat,
                            GERAL_AULAS_NOT_MAT: countAulasNotMat,
                            
                            AULAS_LIVRES_TOTAL: countAulaLivreGeral, 
                            AULAS_SUBST_TOTAL: countAulaSubstGeral,
                            GERAL_AULAS_TOTAL: countGeralAulaGeral,
                            AULAS_LIVRES_NOT_TOTAL: countAulaLivreNotGeral,
                            AULAS_SUBST_NOT_TOTAL: countAulaSubstNotGeral,
                            GERAL_AULAS_NOT_TOTAL: countAulasNotGeral,
                            
                            JORNADA_C: countJornadaC,
                            JORNADA_B: countJornadaB,
                            JORNADA_I: countJornadaI,
                            JORNADA_R: countJornadaR,
                            
                            PRIMARY_KEY: primKey, 
                            SECONDARY_KEY: secKey, 
                            TERTIARY_KEY: tertKey
                        };
                        cargaArray.push(info);
        } 

    }
    fs.writeFileSync(path.join(folderPath2, i.toString().substr(0, i.length-4)+'.json'),JSON.stringify(cargaArray))
//fs.writeFileSync(path.join(folderPath2, 'carga_horaria_por_docente_1119_2.json'),JSON.stringify(aulas))

    console.log('Terminou!')
    console.log('****************************')

}

*/

/*
var fileName_midle = ['0419_', '1119_'];

for(let i =0; i < 2; i++){
    var files = [];
    
    for(let j = 1; j <= 6; j++){
        let fileName = 'carga_horaria_por_docente_' + fileName_midle[i] + j + '.json';
        let file = dataFrame.readFileSync(path.join(folderPath2, '/Carga Horaria/', fileName)).parseJSON()
    //console.log(fileName)
        files.push(file)
        
    }
    let fileName_final = 'carga_horaria_por_docente_' + fileName_midle[i] + 'Total.csv'
    //console.log(fileName_final)
    let file_1 = files.shift();
    
    file_1.concat(files).asCSV().writeFileSync(path.join(folderPath2, fileName_final))
}
*/
/*
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Carga Horaria';

console.log('Abrindo os arquivos...')

var carga_horaria_1 = dataFrame.readFileSync(path.join(folderPath2, 'Alt_BASE_CARGA_HOR_SALA_AULA_0419.json'))
                        .parseJSON()
                        //.parseInts(['AULAS_LIVRES_LP','AULAS_SUBST_LP','GERAL_AULAS_LP',
                        'AULAS_LIVRES_NOT_LP','AULAS_SUBST_NOT_LP','GERAL_AULAS_NOT_LP',
                        'AULAS_LIVRES_MAT','AULAS_SUBST_MAT','GERAL_AULAS_MAT',
                        'AULAS_LIVRES_NOT_MAT','AULAS_SUBST_NOT_MAT','GERAL_AULAS_NOT_MAT',
                        'AULAS_LIVRES_TOTAL','AULAS_SUBST_TOTAL','GERAL_AULAS_TOTAL',
                        'AULAS_LIVRES_NOT_TOTAL','AULAS_SUBST_NOT_TOTAL','GERAL_AULAS_NOT_TOTAL',
                        'JORNADA_C','JORNADA_B','JORNADA_I','JORNADA_R'])
                        
var carga_horaria_2 = dataFrame.readFileSync(path.join(folderPath2, 'Alt_BASE_CARGA_HOR_SALA_AULA_1119.json'))
                        .parseJSON()
                        //.parseInts(['AULAS_LIVRES_LP','AULAS_SUBST_LP','GERAL_AULAS_LP',
                        'AULAS_LIVRES_NOT_LP','AULAS_SUBST_NOT_LP','GERAL_AULAS_NOT_LP',
                        'AULAS_LIVRES_MAT','AULAS_SUBST_MAT','GERAL_AULAS_MAT',
                        'AULAS_LIVRES_NOT_MAT','AULAS_SUBST_NOT_MAT','GERAL_AULAS_NOT_MAT',
                        'AULAS_LIVRES_TOTAL','AULAS_SUBST_TOTAL','GERAL_AULAS_TOTAL',
                        'AULAS_LIVRES_NOT_TOTAL','AULAS_SUBST_NOT_TOTAL','GERAL_AULAS_NOT_TOTAL',
                        'JORNADA_C','JORNADA_B','JORNADA_I','JORNADA_R'])

console.log('Iniciando o processamento...')

carga_horaria_1.concat(carga_horaria_2).groupBy(row => row.CODIGO_CIE)
    .select(group => ({
        CODIGO_CIE: group.first().CODIGO_CIE,
        ESCOLA: group.first().ESCOLA, 
        AULAS_LIVRES_LP: parseFloat(group.deflate(row => row.AULAS_LIVRES_LP).average().toFixed(0)),
        AULAS_SUBST_LP: parseFloat(group.deflate(row => row.AULAS_SUBST_LP).average().toFixed(0)),
        GERAL_AULAS_LP: parseFloat(group.deflate(row => row.GERAL_AULAS_LP).average().toFixed(0)),
        AULAS_LIVRES_NOT_LP: parseFloat(group.deflate(row => row.AULAS_LIVRES_NOT_LP).average().toFixed(0)),
        AULAS_SUBST_NOT_LP: parseFloat(group.deflate(row => row.AULAS_SUBST_NOT_LP).average().toFixed(0)),
        GERAL_AULAS_NOT_LP: parseFloat(group.deflate(row => row.GERAL_AULAS_NOT_LP).average().toFixed(0)),
                            
        AULAS_LIVRES_MAT: parseFloat(group.deflate(row => row.AULAS_LIVRES_MAT).average().toFixed(0)),
        AULAS_SUBST_MAT: parseFloat(group.deflate(row => row.AULAS_SUBST_MAT).average().toFixed(0)),
        GERAL_AULAS_MAT: parseFloat(group.deflate(row => row.GERAL_AULAS_MAT).average().toFixed(0)),
        AULAS_LIVRES_NOT_MAT: parseFloat(group.deflate(row => row.AULAS_LIVRES_NOT_MAT).average().toFixed(0)),
        AULAS_SUBST_NOT_MAT: parseFloat(group.deflate(row => row.AULAS_SUBST_NOT_MAT).average().toFixed(0)),
        GERAL_AULAS_NOT_MAT: parseFloat(group.deflate(row => row.GERAL_AULAS_NOT_MAT).average().toFixed(0)),
                            
        AULAS_LIVRES_TOTAL: parseFloat(group.deflate(row => row.AULAS_LIVRES_TOTAL).average().toFixed(0)),
        AULAS_SUBST_TOTAL: parseFloat(group.deflate(row => row.AULAS_SUBST_TOTAL).average().toFixed(0)),
        GERAL_AULAS_TOTAL: parseFloat(group.deflate(row => row.GERAL_AULAS_TOTAL).average().toFixed(0)),
        AULAS_LIVRES_NOT_TOTAL: parseFloat(group.deflate(row => row.AULAS_LIVRES_NOT_TOTAL).average().toFixed(0)),
        AULAS_SUBST_NOT_TOTAL: parseFloat(group.deflate(row => row.AULAS_SUBST_NOT_TOTAL).average().toFixed(0)),
        GERAL_AULAS_NOT_TOTAL: parseFloat(group.deflate(row => row.GERAL_AULAS_NOT_TOTAL).average().toFixed(0)),
                            
        JORNADA_C: parseFloat(group.deflate(row => row.JORNADA_C).average().toFixed(0)),
        JORNADA_B: parseFloat(group.deflate(row => row.JORNADA_B).average().toFixed(0)),
        JORNADA_I: parseFloat(group.deflate(row => row.JORNADA_I).average().toFixed(0)),
        JORNADA_R: parseFloat(group.deflate(row => row.JORNADA_R).average().toFixed(0)),
                            
        PRIMARY_KEY: group.first().PRIMARY_KEY,
        SECONDARY_KEY: group.first().SECONDARY_KEY,
        TERTIARY_KEY: group.first().TERTIARY_KEY
    })).orderBy(row => row.CODIGO_CIE).inflate()
    .asCSV().writeFileSync(path.join(folderPath2,'Alt_BASE_CARGA_HOR_SALA_AULA_Tot.csv'))

console.log('Terminou!!!')

console.log('Iniciando o processamento...')

dataFrame.readFileSync(path.join(folderPath2, 'Alt_BASE_CARGA_HOR_SALA_AULA_Tot.csv')).parseCSV()
    .parseFloats(['AULAS_LIVRES_LP','AULAS_SUBST_LP','GERAL_AULAS_LP','AULAS_LIVRES_NOT_LP',
    'AULAS_SUBST_NOT_LP','GERAL_AULAS_NOT_LP','AULAS_LIVRES_MAT','AULAS_SUBST_MAT','GERAL_AULAS_MAT',
    'AULAS_LIVRES_NOT_MAT','AULAS_SUBST_NOT_MAT','GERAL_AULAS_NOT_MAT',
    'AULAS_LIVRES_TOTAL','AULAS_SUBST_TOTAL','GERAL_AULAS_TOTAL',
    'AULAS_LIVRES_NOT_TOTAL','AULAS_SUBST_NOT_TOTAL','GERAL_AULAS_NOT_TOTAL',
    'JORNADA_C','JORNADA_B','JORNADA_I','JORNADA_R'])
    .select(row => ({
        CODIGO_CIE: row.CODIGO_CIE,
        ESCOLA: row.ESCOLA, 
        AULAS_LIVRES_LP: (row.AULAS_LIVRES_LP/row.GERAL_AULAS_LP*100).toFixed(2),
        AULAS_SUBST_LP: (row.AULAS_SUBST_LP/row.GERAL_AULAS_LP*100).toFixed(2),
        TOTAL_AULAS_LP: (row.GERAL_AULAS_LP/row.GERAL_AULAS_LP*100).toFixed(2),
        AULAS_LIVRES_NOT_LP: (row.AULAS_LIVRES_NOT_LP/row.GERAL_AULAS_NOT_LP*100).toFixed(2),
        AULAS_SUBST_NOT_LP: (row.AULAS_SUBST_NOT_LP/row.GERAL_AULAS_NOT_LP*100).toFixed(2),
        GERAL_AULAS_NOT_LP: (row.GERAL_AULAS_NOT_LP/row.GERAL_AULAS_NOT_LP*100).toFixed(2),
                            
        AULAS_LIVRES_MAT: (row.AULAS_LIVRES_MAT/row.GERAL_AULAS_MAT*100).toFixed(2),
        AULAS_SUBST_MAT: (row.AULAS_SUBST_MAT/row.GERAL_AULAS_MAT*100).toFixed(2),
        GERAL_AULAS_MAT: (row.GERAL_AULAS_MAT/row.GERAL_AULAS_MAT*100).toFixed(2),
        AULAS_LIVRES_NOT_MAT: (row.AULAS_LIVRES_NOT_MAT/row.GERAL_AULAS_NOT_MAT*100).toFixed(2),
        AULAS_SUBST_NOT_MAT: (row.AULAS_SUBST_NOT_MAT/row.GERAL_AULAS_NOT_MAT*100).toFixed(2),
        GERAL_AULAS_NOT_MAT: (row.GERAL_AULAS_NOT_MAT/row.GERAL_AULAS_NOT_MAT*100).toFixed(2),
                            
        AULAS_LIVRES_TOTAL: (row.AULAS_LIVRES_TOTAL/row.GERAL_AULAS_TOTAL*100).toFixed(2),
        AULAS_SUBST_TOTAL: (row.AULAS_SUBST_TOTAL/row.GERAL_AULAS_TOTAL*100).toFixed(2),
        GERAL_AULAS_TOTAL: (row.GERAL_AULAS_TOTAL/row.GERAL_AULAS_TOTAL*100).toFixed(2),
        AULAS_LIVRES_NOT_TOTAL: (row.AULAS_LIVRES_NOT_TOTAL/row.GERAL_AULAS_NOT_TOTAL*100).toFixed(2),
        AULAS_SUBST_NOT_TOTAL: (row.AULAS_SUBST_NOT_TOTAL/row.GERAL_AULAS_NOT_TOTAL*100).toFixed(2),
        GERAL_AULAS_NOT_TOTAL: (row.GERAL_AULAS_NOT_TOTAL/row.GERAL_AULAS_NOT_TOTAL*100).toFixed(2),
                            
        JORNADA_C: (row.JORNADA_C/(row.JORNADA_C+row.JORNADA_B+row.JORNADA_I+row.JORNADA_R)*100).toFixed(2),
        JORNADA_B: (row.JORNADA_B/(row.JORNADA_C+row.JORNADA_B+row.JORNADA_I+row.JORNADA_R)*100).toFixed(2),
        JORNADA_I: (row.JORNADA_I/(row.JORNADA_C+row.JORNADA_B+row.JORNADA_I+row.JORNADA_R)*100).toFixed(2),
        JORNADA_R: (row.JORNADA_R/(row.JORNADA_C+row.JORNADA_B+row.JORNADA_I+row.JORNADA_R)*100).toFixed(2),
                            
        PRIMARY_KEY: row.PRIMARY_KEY,
        SECONDARY_KEY: row.SECONDARY_KEY,
        TERTIARY_KEY: row.TERTIARY_KEY
    })).orderBy(row => row.CODIGO_CIE)
    .asCSV().writeFileSync(path.join(folderPath2,'Alt_BASE_CARGA_HOR_SALA_AULA_Porc.csv'))
        

console.log('Terminou!!!')                          

 */                 

// CALCULO DOS TOTAIS DA CARGA HORARIA POR DOCENTE
/*
var files = ['carga_horaria_por_docente_0419_Total.csv', 'carga_horaria_por_docente_1119_Total.csv']

for(let i = 0; i < 2; i++){
    
    console.log('Iniciando o processamento...');
    console.log(files[i]);
    let fileName = files[i].substr(0, files[i].length - 9) + 'Calc.csv'

    dataFrame.readFileSync(path.join(folderPath2, files[i])).parseCSV()
        .parseInts(['AULAS_LIVRES_LP','AULAS_SUBST_LP','GERAL_AULAS_LP','AULAS_LIVRES_NOT_LP',
        'AULAS_SUBST_NOT_LP','GERAL_AULAS_NOT_LP','AULAS_LIVRES_MAT','AULAS_SUBST_MAT','GERAL_AULAS_MAT',
        'AULAS_LIVRES_NOT_MAT','AULAS_SUBST_NOT_MAT','GERAL_AULAS_NOT_MAT','AULAS_LIVRES_TOTAL',
        'AULAS_SUBST_TOTAL','GERAL_AULAS_TOTAL','AULAS_LIVRES_NOT_TOTAL','AULAS_SUBST_NOT_TOTAL',
        'GERAL_AULAS_NOT_TOTAL','JORNADA_C','JORNADA_B','JORNADA_I','JORNADA_R'])
        .groupBy(row => row.ESCOLA).select(group => ({
            ESCOLA: group.first().ESCOLA, 
            AULAS_LIVRES_LP: group.deflate(row => row.AULAS_LIVRES_LP).sum(), 
            AULAS_SUBST_LP: group.deflate(row => row.AULAS_SUBST_LP).sum(),
            GERAL_AULAS_LP: group.deflate(row => row.GERAL_AULAS_LP).sum(),
            AULAS_LIVRES_NOT_LP: group.deflate(row => row.AULAS_LIVRES_NOT_LP).sum(),
            AULAS_SUBST_NOT_LP: group.deflate(row => row.AULAS_SUBST_NOT_LP).sum(),
            GERAL_AULAS_NOT_LP: group.deflate(row => row.GERAL_AULAS_NOT_LP).sum(),
                                
            AULAS_LIVRES_MAT: group.deflate(row => row.AULAS_LIVRES_MAT).sum(),
            AULAS_SUBST_MAT: group.deflate(row => row.AULAS_SUBST_MAT).sum(),
            GERAL_AULAS_MAT: group.deflate(row => row.GERAL_AULAS_MAT).sum(),
            AULAS_LIVRES_NOT_MAT: group.deflate(row => row.AULAS_LIVRES_NOT_MAT).sum(),
            AULAS_SUBST_NOT_MAT: group.deflate(row => row.AULAS_SUBST_NOT_MAT).sum(),
            GERAL_AULAS_NOT_MAT: group.deflate(row => row.GERAL_AULAS_NOT_MAT).sum(),
                                
            AULAS_LIVRES_TOTAL: group.deflate(row => row.AULAS_LIVRES_TOTAL).sum(),
            AULAS_SUBST_TOTAL: group.deflate(row => row.AULAS_SUBST_TOTAL).sum(),
            GERAL_AULAS_TOTAL: group.deflate(row => row.GERAL_AULAS_TOTAL).sum(),
            AULAS_LIVRES_NOT_TOTAL: group.deflate(row => row.AULAS_LIVRES_NOT_TOTAL).sum(),
            AULAS_SUBST_NOT_TOTAL: group.deflate(row => row.AULAS_SUBST_NOT_TOTAL).sum(),
            GERAL_AULAS_NOT_TOTAL: group.deflate(row => row.GERAL_AULAS_NOT_TOTAL).sum(),
                                
            JORNADA_C: group.deflate(row => row.JORNADA_C).sum(),
            JORNADA_B: group.deflate(row => row.JORNADA_B).sum(),
            JORNADA_I: group.deflate(row => row.JORNADA_I).sum(),
            JORNADA_R: group.deflate(row => row.JORNADA_R).sum(),
                                
            PRIMARY_KEY: group.first().PRIMARY_KEY, 
            SECONDARY_KEY: group.first().SECONDARY_KEY, 
            TERTIARY_KEY: group.first().TERTIARY_KEY
            
        })).orderBy(row => row.PRIMARY_KEY).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, fileName))
    
    console.log('Terminou!'); console.log(fileName);
}
*/
/*        
    dataFrame.readFileSync(path.join(folderPath1,'carga_horaria_por_docente/BASE_CARGA_HOR_SALA_AULA_0419.csv'))
        .parseCSV().parseInts(['TOT_AULA_LIVRE', 'TOT_AULA_SUBST', 'TOT_GERAL_AULA',
        'TOT_AULA_LIVRE_NOTURNO', 'TOT_AULA_SUBST_NOTURNO', 'TOT_AULAS_NOTURNO'])
        .groupBy(row => row.NOMEESC)
        .select(group => ({

            NOMEESC: group.first().NOMEESC,
            DEN_MATERIA: group.first().DEN_MATERIA,
            TOT_AULA_LIVRE: group.deflate(row => row.TOT_AULA_LIVRE).sum(),
            TOT_AULA_SUBST: group.deflate(row => row.TOT_AULA_SUBST).sum(),
            TOT_GERAL_AULA: group.deflate(row => row.TOT_GERAL_AULA).sum(),
            TOT_AULA_LIVRE_NOTURNO: group.deflate(row => row.TOT_AULA_LIVRE_NOTURNO).sum(),
            TOT_AULA_SUBST_NOTURNO: group.deflate(row => row.TOT_AULA_SUBST_NOTURNO).sum(),
            TOT_AULAS_NOTURNO: group.deflate(row => row.TOT_AULAS_NOTURNO).sum(),
                        
            MED_AULA_LIVRE: group.deflate(row => row.TOT_AULA_LIVRE).average().toFixed(2),
            MED_AULA_SUBST: group.deflate(row => row.TOT_AULA_SUBST).average().toFixed(2),
            MED_GERAL_AULA: group.deflate(row => row.TOT_GERAL_AULA).average().toFixed(2),
            MED_AULA_LIVRE_NOTURNO: group.deflate(row => row.TOT_AULA_LIVRE_NOTURNO).average().toFixed(2),
            MED_AULA_SUBST_NOTURNO: group.deflate(row => row.TOT_AULA_SUBST_NOTURNO).average().toFixed(2),
            MED_AULAS_NOTURNO: group.deflate(row => row.TOT_AULAS_NOTURNO).average().toFixed(2),

            MIN_AULA_LIVRE: group.deflate(row => row.TOT_AULA_LIVRE).min(),
            MIN_AULA_SUBST: group.deflate(row => row.TOT_AULA_SUBST).min(),
            MIN_GERAL_AULA: group.deflate(row => row.TOT_GERAL_AULA).min(),
            MIN_AULA_LIVRE_NOTURNO: group.deflate(row => row.TOT_AULA_LIVRE_NOTURNO).min(),
            MIN_AULA_SUBST_NOTURNO: group.deflate(row => row.TOT_AULA_SUBST_NOTURNO).min(),
            MIN_AULAS_NOTURNO: group.deflate(row => row.TOT_AULAS_NOTURNO).min(),

            MAX_AULA_LIVRE: group.deflate(row => row.TOT_AULA_LIVRE).max(),
            MAX_AULA_SUBST: group.deflate(row => row.TOT_AULA_SUBST).max(),
            MAX_GERAL_AULA: group.deflate(row => row.TOT_GERAL_AULA).max(),
            MAX_AULA_LIVRE_NOTURNO: group.deflate(row => row.TOT_AULA_LIVRE_NOTURNO).max(),
            MAX_AULA_SUBST_NOTURNO: group.deflate(row => row.TOT_AULA_SUBST_NOTURNO).max(),
            MAX_AULAS_NOTURNO: group.deflate(row => row.TOT_AULAS_NOTURNO).max(),

            PRIMARY_KEY: group.first().PRIMARY_KEY,
            SECONDARY_KEY: group.first().SECONDARY_KEY,
            TERTIARY_KEY: group.first().TERTIARY_KEY
            }))
            .orderByDescending(row => row.TOT_DIAS_AUSENCIAS)
            .inflate().asCSV().writeFileSync(path.join(folderPath2,'carga_horaria_por_docente_0419.csv'))
            console.log("Terminou!")

*/

// AUSENCIAS POR SERVIDOR
/*
// CALCULOS POR MES DE REFERENCIA
const folderPath1 = '../DadosAbertos-SEDUC/database/original/ausencias_por_servidor';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Ausencias por Servidor';
 
var filesAusencias = fs.readdirSync(folderPath1);

for (let i of filesAusencias){
    
    if(!i.includes('DIC') && !i.includes('1118')){
        
        console.log('Iniciando o processamento...')
        console.log(i)
        
        dataFrame.readFileSync(path.join(folderPath1,i))
            .parseCSV().parseInts(['TT_DIAS_FALTA_MEDICA', 'TT_DIAS_FALTA_JUST', 'TT_DIAS_FALTA_INJUST',
            'TT_DIAS_FALTA_ABONADA', 'TT_DIAS_LIC_PREMIO', 'TT_DIAS_LIC_GESTANTE', 'TT_DIAS_LIC_ACID_TRAB',
            'TT_DIAS_LIC_INTER_PARTIC', 'TOT_DIAS_AUSENCIAS', 'TOTAL_DIAS_MES'])
            .groupBy(row => row.CIE_ESCOLA)
            .select(group => ({
                CODIGO_CIE: group.first().CIE_ESCOLA,
                ESCOLA: group.first().NOME_UA_EXERC,
                TT_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).sum(),
                TT_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).sum(),
                TT_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).sum(),
                TT_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).sum(),
                TT_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).sum(),
                TT_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).sum(),
                TT_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).sum(),
                TT_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).sum(),
                TOT_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).sum(),
                TOTAL_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).sum(),
                            
                MED_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).average().toFixed(2),
                MED_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).average().toFixed(2),
                MED_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).average().toFixed(2),
                MED_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).average().toFixed(2),
                MED_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).average().toFixed(2),
                MED_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).average().toFixed(2),
                MED_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).average().toFixed(2),
                MED_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).average().toFixed(2),
                MED_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).average().toFixed(2),
                MED_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).average().toFixed(2),
                        
                MIN_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).min(),
                MIN_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).min(),
                MIN_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).min(),
                MIN_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).min(),
                MIN_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).min(),
                MIN_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).min(),
                MIN_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).min(),
                MIN_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).min(),
                MIN_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).min(),
                MIN_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).min(),
    
                MAX_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).max(),
                MAX_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).max(),
                MAX_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).max(),
                MAX_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).max(),
                MAX_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).max(),
                MAX_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).max(),
                MAX_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).max(),
                MAX_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).max(),
                MAX_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).max(),
                MAX_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).max(),
    
                PRIMARY_KEY: group.first().PRIMARY_KEY,
                SECONDARY_KEY: group.first().SECONDARY_KEY,
                TERTIARY_KEY: group.first().TERTIARY_KEY
                }))
                .orderBy(row => row.CODIGO_CIE)
                .inflate().asCSV().writeFileSync(path.join(folderPath2,'Alt_'+ i))
                console.log("Terminou!")
                console.log("*********************************")
    }
}

*/

// CALCULO DAS MEDIAS CONSIDERANDO OS DOIS MESES DE REFERENCIA
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/ausencias_por_servidor';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Ausencias por Servidor';
 
var filesAusencias = fs.readdirSync(folderPath2);

console.log('Abrindo os arquivos...') 

var mes_1 = dataFrame.readFileSync(path.join(folderPath2,filesAusencias[0]))
        .parseCSV().parseInts(['TT_DIAS_FALTA_MEDICA', 'TT_DIAS_FALTA_JUST', 'TT_DIAS_FALTA_INJUST',
                    'TT_DIAS_FALTA_ABONADA', 'TT_DIAS_LIC_PREMIO', 'TT_DIAS_LIC_GESTANTE', 'TT_DIAS_LIC_ACID_TRAB',
                    'TT_DIAS_LIC_INTER_PARTIC', 'TOT_DIAS_AUSENCIAS', 'TOTAL_DIAS_MES',
                    'MIN_DIAS_FALTA_MEDICA', 'MIN_DIAS_FALTA_JUST', 'MIN_DIAS_FALTA_INJUST',
                    'MIN_DIAS_FALTA_ABONADA', 'MIN_DIAS_LIC_PREMIO', 'MIN_DIAS_LIC_GESTANTE',
                    'MIN_DIAS_LIC_ACID_TRAB', 'MIN_DIAS_LIC_INTER_PARTIC', 'MIN_DIAS_AUSENCIAS',
                    'MIN_DIAS_MES','MAX_DIAS_FALTA_MEDICA', 'MAX_DIAS_FALTA_JUST', 'MAX_DIAS_FALTA_INJUST',
                    'MAX_DIAS_FALTA_ABONADA', 'MAX_DIAS_LIC_PREMIO', 'MAX_DIAS_LIC_GESTANTE',
                    'MAX_DIAS_LIC_ACID_TRAB', 'MAX_DIAS_LIC_INTER_PARTIC', 'MAX_DIAS_AUSENCIAS',
                    'MAX_DIAS_MES'])
        .parseFloats(['MED_DIAS_FALTA_MEDICA', 'MED_DIAS_FALTA_JUST', 'MED_DIAS_FALTA_INJUST',
                    'MED_DIAS_FALTA_ABONADA', 'MED_DIAS_LIC_PREMIO', 'MED_DIAS_LIC_GESTANTE',
                    'MED_DIAS_LIC_ACID_TRAB', 'MED_DIAS_LIC_INTER_PARTIC', 'MED_DIAS_AUSENCIAS',
                    'MED_DIAS_MES'])
 
var mes_2 = dataFrame.readFileSync(path.join(folderPath2,filesAusencias[1]))
        .parseCSV().parseInts(['TT_DIAS_FALTA_MEDICA', 'TT_DIAS_FALTA_JUST', 'TT_DIAS_FALTA_INJUST',
                    'TT_DIAS_FALTA_ABONADA', 'TT_DIAS_LIC_PREMIO', 'TT_DIAS_LIC_GESTANTE', 'TT_DIAS_LIC_ACID_TRAB',
                    'TT_DIAS_LIC_INTER_PARTIC', 'TOT_DIAS_AUSENCIAS', 'TOTAL_DIAS_MES',
                    'MIN_DIAS_FALTA_MEDICA', 'MIN_DIAS_FALTA_JUST', 'MIN_DIAS_FALTA_INJUST',
                    'MIN_DIAS_FALTA_ABONADA', 'MIN_DIAS_LIC_PREMIO', 'MIN_DIAS_LIC_GESTANTE',
                    'MIN_DIAS_LIC_ACID_TRAB', 'MIN_DIAS_LIC_INTER_PARTIC', 'MIN_DIAS_AUSENCIAS',
                    'MIN_DIAS_MES','MAX_DIAS_FALTA_MEDICA', 'MAX_DIAS_FALTA_JUST', 'MAX_DIAS_FALTA_INJUST',
                    'MAX_DIAS_FALTA_ABONADA', 'MAX_DIAS_LIC_PREMIO', 'MAX_DIAS_LIC_GESTANTE',
                    'MAX_DIAS_LIC_ACID_TRAB', 'MAX_DIAS_LIC_INTER_PARTIC', 'MAX_DIAS_AUSENCIAS',
                    'MAX_DIAS_MES'])
        .parseFloats(['MED_DIAS_FALTA_MEDICA', 'MED_DIAS_FALTA_JUST', 'MED_DIAS_FALTA_INJUST',
                    'MED_DIAS_FALTA_ABONADA', 'MED_DIAS_LIC_PREMIO', 'MED_DIAS_LIC_GESTANTE',
                    'MED_DIAS_LIC_ACID_TRAB', 'MED_DIAS_LIC_INTER_PARTIC', 'MED_DIAS_AUSENCIAS',
                    'MED_DIAS_MES'])

console.log('Iniciando o processamento...') 

mes_1.concat(mes_2).groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            TT_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).sum(),
            TT_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).sum(),
            TT_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).sum(),
            TT_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).sum(),
            TT_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).sum(),
            TT_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).sum(),
            TT_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).sum(),
            TT_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).sum(),
            TOT_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).sum(),
            TOTAL_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).sum(),
                        
            MED_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).average().toFixed(2),
            MED_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).average().toFixed(2),
            MED_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).average().toFixed(2),
            MED_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).average().toFixed(2),
            MED_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).average().toFixed(2),
            MED_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).average().toFixed(2),
            MED_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).average().toFixed(2),
            MED_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).average().toFixed(2),
            MED_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).average().toFixed(2),
            MED_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).average().toFixed(2),
                    
            MIN_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).min(),
            MIN_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).min(),
            MIN_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).min(),
            MIN_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).min(),
            MIN_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).min(),
            MIN_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).min(),
            MIN_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).min(),
            MIN_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).min(),
            MIN_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).min(),
            MIN_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).min(),

            MAX_DIAS_FALTA_MEDICA: group.deflate(row => row.TT_DIAS_FALTA_MEDICA).max(),
            MAX_DIAS_FALTA_JUST: group.deflate(row => row.TT_DIAS_FALTA_JUST).max(),
            MAX_DIAS_FALTA_INJUST: group.deflate(row => row.TT_DIAS_FALTA_INJUST).max(),
            MAX_DIAS_FALTA_ABONADA: group.deflate(row => row.TT_DIAS_FALTA_ABONADA).max(),
            MAX_DIAS_LIC_PREMIO: group.deflate(row => row.TT_DIAS_LIC_PREMIO).max(),
            MAX_DIAS_LIC_GESTANTE: group.deflate(row => row.TT_DIAS_LIC_GESTANTE).max(),
            MAX_DIAS_LIC_ACID_TRAB: group.deflate(row => row.TT_DIAS_LIC_ACID_TRAB).max(),
            MAX_DIAS_LIC_INTER_PARTIC: group.deflate(row => row.TT_DIAS_LIC_INTER_PARTIC).max(),
            MAX_DIAS_AUSENCIAS: group.deflate(row => row.TOT_DIAS_AUSENCIAS).max(),
            MAX_DIAS_MES: group.deflate(row => row.TOTAL_DIAS_MES).max(),
            
            PRIMARY_KEY: group.first().PRIMARY_KEY,
            SECONDARY_KEY: group.first().SECONDARY_KEY,
            TERTIARY_KEY: group.first().TERTIARY_KEY
            }))
            .orderBy(row => row.CODIGO_CIE)
            .inflate().asCSV().writeFileSync(path.join(folderPath2,'ausencias_por_servidor_Tot.csv'))
            console.log("Terminou!")
            console.log("***********************************")

      

console.log('Iniciando o processamento...')
dataFrame.readFileSync(path.join(folderPath2,'ausencias_por_servidor_Tot.csv'))
        .parseCSV().parseInts(['TT_DIAS_FALTA_MEDICA', 'TT_DIAS_FALTA_JUST', 'TT_DIAS_FALTA_INJUST',
                    'TT_DIAS_FALTA_ABONADA', 'TT_DIAS_LIC_PREMIO', 'TT_DIAS_LIC_GESTANTE', 'TT_DIAS_LIC_ACID_TRAB',
                    'TT_DIAS_LIC_INTER_PARTIC', 'TOT_DIAS_AUSENCIAS', 'TOTAL_DIAS_MES',
                    ])
        .parseFloats(['MED_DIAS_FALTA_MEDICA', 'MED_DIAS_FALTA_JUST', 'MED_DIAS_FALTA_INJUST',
                    'MED_DIAS_FALTA_ABONADA', 'MED_DIAS_LIC_PREMIO', 'MED_DIAS_LIC_GESTANTE',
                    'MED_DIAS_LIC_ACID_TRAB', 'MED_DIAS_LIC_INTER_PARTIC', 'MED_DIAS_AUSENCIAS',
                    'MED_DIAS_MES'])
        .select(row => ({
            CODIGO_CIE: row.CODIGO_CIE,
            ESCOLA: row.ESCOLA,
            PORC_TT_DIAS_FALTA_MEDICA: (row.TT_DIAS_FALTA_MEDICA/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_FALTA_JUST: (row.TT_DIAS_FALTA_JUST/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_FALTA_INJUST: (row.TT_DIAS_FALTA_INJUST/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_FALTA_ABONADA: (row.TT_DIAS_FALTA_ABONADA/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_LIC_PREMIO: (row.TT_DIAS_LIC_PREMIO/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_LIC_GESTANTE: (row.TT_DIAS_LIC_GESTANTE/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_LIC_ACID_TRAB: (row.TT_DIAS_LIC_ACID_TRAB/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TT_DIAS_LIC_INTER_PARTIC: (row.TT_DIAS_LIC_INTER_PARTIC/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TOT_DIAS_AUSENCIAS: (row.TOT_DIAS_AUSENCIAS/row.TOTAL_DIAS_MES*100).toFixed(2),
            PORC_TOTAL_DIAS_MES: (row.TOTAL_DIAS_MES/row.TOTAL_DIAS_MES*100).toFixed(2),
                        
            PORC_MED_DIAS_FALTA_MEDICA: (row.MED_DIAS_FALTA_MEDICA/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_FALTA_JUST: (row.MED_DIAS_FALTA_JUST/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_FALTA_INJUST: (row.MED_DIAS_FALTA_INJUST/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_FALTA_ABONADA: (row.MED_DIAS_FALTA_ABONADA/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_LIC_PREMIO: (row.MED_DIAS_LIC_PREMIO/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_LIC_GESTANTE: (row.MED_DIAS_LIC_GESTANTE/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_LIC_ACID_TRAB: (row.MED_DIAS_LIC_ACID_TRAB/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_LIC_INTER_PARTIC: (row.MED_DIAS_LIC_INTER_PARTIC/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_AUSENCIAS: (row.MED_DIAS_AUSENCIAS/row.MED_DIAS_MES*100).toFixed(2),
            PORC_MED_DIAS_MES: (row.MED_DIAS_MES/row.MED_DIAS_MES*100).toFixed(2),
            
            PRIMARY_KEY: row.PRIMARY_KEY,
            SECONDARY_KEY: row.SECONDARY_KEY,
            TERTIARY_KEY: row.TERTIARY_KEY
        }))
            .orderBy(row => row.CODIGO_CIE)
            .asCSV().writeFileSync(path.join(folderPath2,'ausencias_por_servidor_Porc.csv'))
            console.log("Terminou!")
            console.log("**************************************")
*/


// PROFICIENCIA SARESP E DESEMPENHO IDESP

// CONCATENACAO DOS ARQUIVOS

// ARQUIVOS SARESP
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/proficiencia_SARESP';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/SARESP';
const folderPath3 = '../DadosAbertos-SEDUC/page/database/Analisados/SARESP_LP';
const folderPath4 = '../DadosAbertos-SEDUC/page/database/Analisados/SARESP_MAT';
const folderPath5 = '../DadosAbertos-SEDUC/page/database/Analisados/SARESP';

for(var ano = 2017; ano <= 2018; ano++){
    dataFrame.readFileSync(path.join(folderPath2, 'SARESP_escolas_'+ano+'.csv')).parseCSV()
        .where(row => row.ds_comp.toString().includes('PORT'))
        .where(row => row.SERIE_ANO.toString().includes('5'))
        .orderBy(row => row.NOMESC)
        .asCSV().writeFileSync(path.join(folderPath5, 'SARESP_escolas_'+ano+'_LP_5_AI.csv'))
    
    dataFrame.readFileSync(path.join(folderPath2, 'SARESP_escolas_'+ano+'.csv')).parseCSV()
        .where(row => row.ds_comp.toString().includes('PORT'))
        .where(row => row.SERIE_ANO.toString().includes('9'))
        .orderBy(row => row.NOMESC)
        .asCSV().writeFileSync(path.join(folderPath5, 'SARESP_escolas_'+ano+'_LP_9_AF.csv'))
        
    dataFrame.readFileSync(path.join(folderPath2, 'SARESP_escolas_'+ano+'.csv')).parseCSV()
        .where(row => row.ds_comp.toString().includes('PORT'))
        .where(row => row.SERIE_ANO.toString().includes('EM'))
        .orderBy(row => row.NOMESC)
        .asCSV().writeFileSync(path.join(folderPath5, 'SARESP_escolas_'+ano+'_LP_3_EM.csv'))
        
    dataFrame.readFileSync(path.join(folderPath2, 'SARESP_escolas_'+ano+'.csv')).parseCSV()
        .where(row => row.ds_comp.toString().includes('MAT'))
        .where(row => row.SERIE_ANO.toString().includes('5'))
        .orderBy(row => row.NOMESC)
        .asCSV().writeFileSync(path.join(folderPath5, 'SARESP_escolas_'+ano+'_MAT_5_AI.csv'))
        
    dataFrame.readFileSync(path.join(folderPath2, 'SARESP_escolas_'+ano+'.csv')).parseCSV()
        .where(row => row.ds_comp.toString().includes('MAT'))
        .where(row => row.SERIE_ANO.toString().includes('9'))
        .orderBy(row => row.NOMESC)
        .asCSV().writeFileSync(path.join(folderPath5, 'SARESP_escolas_'+ano+'_MAT_9_AF.csv'))
        
    dataFrame.readFileSync(path.join(folderPath2, 'SARESP_escolas_'+ano+'.csv')).parseCSV()
        .where(row => row.ds_comp.toString().includes('MAT'))
        .where(row => row.SERIE_ANO.toString().includes('EM'))
        .orderBy(row => row.NOMESC)
        .asCSV().writeFileSync(path.join(folderPath5, 'SARESP_escolas_'+ano+'_MAT_3_EM.csv'))
    
    
    
    var fileName_end = [['LP_3_EM', 'LP_5_AI', 'LP_9_AF'], ['MAT_3_EM', 'MAT_5_AI', 'MAT_9_AF']]
    var disc = ['LP', 'MAT'];
    
    for(var i = 0; i < 2; i++){
        var files = [];
        
        for(let j = 0; j < 3; j++){
            let fileName = 'SARESP_escolas_'+ano+'_' + fileName_end[i][j] + '.csv';
            console.log(fileName)
            let file = dataFrame.readFileSync(path.join(folderPath5, fileName)).parseCSV()
    
            files.push(file)
                
        }
        let fileName_final = 'SARESP_escolas_'+ano+'_' + disc[i] + '_Geral.csv'
        
        let file_1 = files.shift();
        
        file_1.concat(files).asCSV().writeFileSync(path.join(folderPath5, fileName_final))
    }
}
*/

// CALCULO DA ESTATISTICA DESCRITIVA DO SARESP POR ESCOLA


/*
var fileNames_LP = fs.readdirSync(folderPath3);
var fileNames_MAT = fs.readdirSync(folderPath4);

for(let i = 0; i < 8; i++){

    if(!fileNames_LP[i].toString().includes('Geral')){
        console.log(`i = ${i} - fileNames_LP[i] = ${fileNames_LP[i]}`)
    
        dataFrame.readFileSync(path.join(folderPath3, fileNames_LP[i])).parseCSV()
            .parseFloats('DESEMPENHO')
            .groupBy(row => row.CODESC)
            .select(group => ({
                CODIGO_CIE: group.first().CODESC,
                ESCOLA: group.first().NOMESC,
                SERIE_ANO: group.first().SERIE_ANO,
                DISCIPLINA: group.first().ds_comp,
                DESEMPENHO_MED: group.deflate(row => row.DESEMPENHO).average().toFixed(1),
                DESEMPENHO_MAX: group.deflate(row => row.DESEMPENHO).max(),
                DESEMPENHO_MIN: group.deflate(row => row.DESEMPENHO).min(),
                PRIMARY_KEY: group.first().PRIMARY_KEY,
                ANO: group.first().ANO
            })).orderBy(row => row.CODIGO_CIE)
            .inflate().asCSV()
            .writeFileSync(path.join(folderPath3,'Calc_'+fileNames_LP[i]))
                    console.log("Terminou!")
    } else {
        console.log(`i = ${i} - fileNames_LP[i] = ${fileNames_LP[i]}`)
    
        dataFrame.readFileSync(path.join(folderPath3, fileNames_LP[i])).parseCSV()
            .parseFloats('DESEMPENHO')
            .groupBy(row => row.CODESC)
            .select(group => ({
                CODIGO_CIE: group.first().CODESC,
                ESCOLA: group.first().NOMESC,
                DISCIPLINA: group.first().ds_comp,
                DESEMPENHO_MED: group.deflate(row => row.DESEMPENHO).average().toFixed(1),
                DESEMPENHO_MAX: group.deflate(row => row.DESEMPENHO).max(),
                DESEMPENHO_MIN: group.deflate(row => row.DESEMPENHO).min(),
                PRIMARY_KEY: group.first().PRIMARY_KEY,
                ANO: group.first().ANO
            })).orderBy(row => row.CODIGO_CIE)
            .inflate().asCSV()
            .writeFileSync(path.join(folderPath3,'Calc_'+fileNames_LP[i]))
                    console.log("Terminou!")
    }
    
    if(!fileNames_MAT[i].toString().includes('Geral')){
        console.log(`i = ${i} - fileNames_MAT[i] = ${fileNames_MAT[i]}`)    
    
        dataFrame.readFileSync(path.join(folderPath4, fileNames_MAT[i])).parseCSV()
            .parseFloats('DESEMPENHO')
            .groupBy(row => row.CODESC)
            .select(group => ({
                CODIGO_CIE: group.first().CODESC,
                ESCOLA: group.first().NOMESC,
                SERIE_ANO: group.first().SERIE_ANO,
                DISCIPLINA: group.first().ds_comp,
                DESEMPENHO_MED: group.deflate(row => row.DESEMPENHO).average().toFixed(1),
                DESEMPENHO_MAX: group.deflate(row => row.DESEMPENHO).max(),
                DESEMPENHO_MIN: group.deflate(row => row.DESEMPENHO).min(),
                PRIMARY_KEY: group.first().PRIMARY_KEY,
                ANO: group.first().ANO
            })).orderBy(row => row.CODIGO_CIE)
            .inflate().asCSV()
            .writeFileSync(path.join(folderPath4,'Calc_'+fileNames_MAT[i]))
                    console.log("Terminou!")
    } else {
    
        console.log(`i = ${i} - fileNames_MAT[i] = ${fileNames_MAT[i]}`)    
    
        dataFrame.readFileSync(path.join(folderPath4, fileNames_MAT[i])).parseCSV()
            .parseFloats('DESEMPENHO')
            .groupBy(row => row.CODESC)
            .select(group => ({
                CODIGO_CIE: group.first().CODESC,
                ESCOLA: group.first().NOMESC,
                DISCIPLINA: group.first().ds_comp,
                DESEMPENHO_MED: group.deflate(row => row.DESEMPENHO).average().toFixed(1),
                DESEMPENHO_MAX: group.deflate(row => row.DESEMPENHO).max(),
                DESEMPENHO_MIN: group.deflate(row => row.DESEMPENHO).min(),
                PRIMARY_KEY: group.first().PRIMARY_KEY,
                ANO: group.first().ANO
            })).orderBy(row => row.CODIGO_CIE)
            .inflate().asCSV()
            .writeFileSync(path.join(folderPath4,'Calc_'+fileNames_MAT[i]))
                    console.log("Terminou!")
    }
                
}

*/

/*
// Concatena os arquivos do SARESP
const folderPath1 = '../DadosAbertos-SEDUC/database/original/proficiencia_SARESP';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/SARESP';

var filesSARESP = [];

for(let i = 2011; i <= 2018; i++){
    
    let fileName = 'SARESP_escolas_' + i + '.csv';
    
    var saresp_LP_M_a = [];
    var saresp_LP_M = dataFrame.readFileSync(path.join(folderPath2, fileName)).parseCSV()
                        .parseInts('CODESC')//.parseFloats('DESEMPENHO')
        
        saresp_LP_M.getSeries('medprof')
            .forEach(row => {
                if(row.toString().includes(',')) {
                    row = row.replace(',', '.')
                }
                saresp_LP_M_a.push(row)
            })
        
        saresp_LP_M.dropSeries('medprof').withSeries('DESEMPENHO', () => {
            return new dataFrame.Series({ values: saresp_LP_M_a })
        }).asCSV().writeFileSync(path.join(folderPath2, fileName))
        
       
        filesSARESP.push(saresp_LP_M)
         
         console.log(saresp_LP_M.toArray())

}
//console.log(saresp_LP_M_1)
//console.log(typeof(saresp_LP_M_1))
    
    var saresp_LP_M_1 = filesSARESP.shift();
    saresp_LP_M_1.concat(filesSARESP)
        .asCSV().writeFileSync(path.join(folderPath2, 'SARESP_All.csv'))
    


dataFrame.readFileSync(path.join(folderPath2, 'SARESP_All.csv')).parseCSV()
    .where(row => row.ds_comp.toString().includes('PORT') || row.ds_comp.toString().includes('MAT'))
    .orderBy(row => row.CODESC)
    .asCSV().writeFileSync(path.join(folderPath2,'SARESP_LP_M.csv'))
*/


// ARQUIVOS IDESP

/*
// Separando as informcoes de anos especificos - 2017 e 2018
// Alterar o ano manualmente - na próxima oportunidade, automatizar com um loop
for(let i = 0; i < 3; i++){
    
    let fileName = ['IDESP_AI.csv', 'IDESP_AF.csv', 'IDESP_EM.csv']
    let fileName2 = fileName[i].substr(0, fileName[i].length - 4) + '_2017.csv';
    console.log(fileName[i])
    console.log(fileName2)
    
    dataFrame.readFileSync(path.join(folderPath2,'/IDESP/', fileName[i])).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2017).orderBy(row => row.ESCOLA)
        .asCSV().writeFileSync(path.join(folderPath2, fileName2))
        
}
*/

/*
// Concatenando as informacoes dos anos em um unico arquivo
var filesAI = []; 
var filesAF = []; 
var filesEM = [];

for(let i = 2007; i <= 2018; i++){

    var fileNameAI = 'IDESP_escolas_AI_' + i + '.csv';
    var fileNameAF = 'IDESP_escolas_AF_' + i + '.csv';
    var fileNameEM = 'IDESP_escolas_EM_' + i + '.csv';
    
    var fileAI = dataFrame.readFileSync(path.join(folderPath2, fileNameAI)).parseCSV();
    var fileAF = dataFrame.readFileSync(path.join(folderPath2, fileNameAF)).parseCSV();
    var fileEM = dataFrame.readFileSync(path.join(folderPath2, fileNameEM)).parseCSV();
    
    filesAI.push(fileAI); 
    filesAF.push(fileAF); 
    filesEM.push(fileEM);

}
    var AI = filesAI.shift(); 
    var AF = filesAF.shift(); 
    var EM = filesEM.shift(); 

AI.concat(filesAI).asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AI.csv'));
AF.concat(filesAF).asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AF.csv'));
EM.concat(filesEM).asCSV().writeFileSync(path.join(folderPath2, 'IDESP_EM.csv'));

*/

/*
// Separando as informacoes por ano em arquivos diferentes
for(let i = 2007; i <= 2018; i++){ // IDESP

    var anoRef = 'ano' + i;
*/
/*
    var fileName = 'IDESP_escolas_AI_' + i + '.csv';
    
    var file = dataFrame.readFileSync(path.join(folderPath1, 'desempenho_IDESP/IDESP_Escolas_2007_2018_AI.CSV')).parseCSV()
                    .subset(['CODIGO CIE', 'ESCOLA', 'NIVEL_ENSINO', 'PRIMARY_KEY' ,'SECONDARY_KEY', anoRef])
                    .parseInts('CODIGO CIE').parseFloats(anoRef)
          //console.log(idespAI.toArray())    
*/
/*
    var fileName = 'IDESP_escolas_AF_' + i + '.csv';
    
    var file = dataFrame.readFileSync(path.join(folderPath1, 'desempenho_IDESP/IDESP_Escolas_2007_2018_AF.CSV')).parseCSV()
                    .subset(['CODIGO CIE', 'ESCOLA', 'NIVEL_ENSINO', 'PRIMARY_KEY' ,'SECONDARY_KEY', anoRef])
                    .parseInts('CODIGO CIE').parseFloats(anoRef)
*/
/*
    var fileName = 'IDESP_escolas_EM_' + i + '.csv';
    
    var file = dataFrame.readFileSync(path.join(folderPath1, '/original/desempenho_IDESP/IDESP_Escolas_2007_2018_EM.CSV')).parseCSV()
                    .subset(['CODIGO CIE', 'ESCOLA', 'NIVEL_ENSINO', 'PRIMARY_KEY' ,'SECONDARY_KEY', anoRef])
                    .parseInts('CODIGO CIE').parseFloats(anoRef)
*/
// IDESP

//}
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/proficiencia_SARESP';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/SARESP';
 
// Primeiro passo para a analise do SARESP
for(var i = 2011; i <= 2018; i++){ // SARESP
    let fileName = 'SARESP_escolas_' + i + '.csv';
    
    var file = dataFrame.readFileSync(path.join(folderPath1, fileName)).parseCSV()
        .subset(['CODESC','NOMESC', 'SERIE_ANO', 'ds_comp' ,'medprof' ,'PRIMARY_KEY'])
        .parseInts('CODESC');
// SARESP
*/

/*
// INSERE O ANO EM CADA ENTRADA - SARESP E IDESP

    console.log('Inciando...')    
    var ano = [];
    var j = 0;
    console.log(file.toArray().length)
    while(j <= file.toArray().length){
        if(j < file.toArray().length){
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i); ano.push(i);
            console.log('Parte 1: ' + j)
            
        }
        
        j += 1000;
        console.log(j)
        if(j > file.toArray().length){
            console.log('Parte 2 - Dentro do if - 1: ' + j)
            
            j = j - file.toArray().length;
            j = 1000 - j;
            j = file.toArray().length - j;
            
            console.log('Parte 2 - Dentro do if - 2: ' + j)
            
            for(let k = j; k < file.toArray().length; k++){
                console.log('Parte 2 - Dentro do for - 3: ' + k)
                ano.push(i);
                
            }
            j += 1000;
            console.log('Fim: ' + j)
        }
    } 
    file.withSeries('ANO', () => {
        return new dataFrame.Series({ values: ano })
        })
        .asCSV().writeFileSync(path.join(folderPath2, fileName));
    console.log('Finalizado! ' + fileName);

}

*/

// HISTORICO DE MATRICULA POR TURMA

/*

const folderPath1 = '../DadosAbertos-SEDUC/database/original/historico_de_matricula_por_turma';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Historico Matricula';


// Conhecendo os tipos de classe e os tipos de ensino
var a = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017.csv')).parseCSV()
    .getSeries('TIPOCLASSE_DESC').distinct()
    fs.writeFileSync(path.join(folderPath2, 'historico_matricula_Tipo_Classe_2017.csv'), a)

var b = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018.csv')).parseCSV()
    .getSeries('TIPOCLASSE_DESC').distinct()
    fs.writeFileSync(path.join(folderPath2, 'historico_matricula_Tipo_Classe_2018.csv'), b)

var c = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017.csv')).parseCSV()
    .getSeries('TipoEnsino').distinct()
    fs.writeFileSync(path.join(folderPath2, 'historico_matricula_Tipo_Ensino_2017.csv'), c)

var d = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018.csv')).parseCSV()
    .getSeries('TipoEnsino').distinct()
    fs.writeFileSync(path.join(folderPath2, 'historico_matricula_Tipo_Ensino_2018.csv'), d)

 
        console.log('Abrindo o arquivo...');

        dataFrame.readFileSync(path.join(folderPath1, '10_Escolas_Classes_Qtde_Alunos_Parte_1.csv'))
            .parseCSV().subset(['ANO','COD_ESC', 'NOMESC','TIPOCLASSE_DESC', 'TipoEnsino', 'SERIE','QTDE_ALUNOS', 'PRIMARY_KEY', 'SECONDARY_KEY'])
            .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_1.csv'))

        dataFrame.readFileSync(path.join(folderPath1, '10_Escolas_Classes_Qtde_Alunos_Parte_2.csv'))
            .parseCSV().subset(['ANO','COD_ESC', 'NOMESC','TIPOCLASSE_DESC', 'TipoEnsino', 'SERIE','QTDE_ALUNOS', 'PRIMARY_KEY', 'SECONDARY_KEY'])
            .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2.csv'))

        dataFrame.readFileSync(path.join(folderPath1, '10_Escolas_Classes_Qtde_Alunos_Parte_3.csv'))
            .parseCSV().subset(['ANO', 'COD_ESC','NOMESC','TIPOCLASSE_DESC', 'TipoEnsino', 'SERIE','QTDE_ALUNOS', 'PRIMARY_KEY', 'SECONDARY_KEY'])
            .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_3.csv'))

        dataFrame.readFileSync(path.join(folderPath1, '10_Escolas_Classes_Qtde_Alunos_Parte_4.csv'))
            .parseCSV().subset(['ANO','COD_ESC', 'NOMESC','TIPOCLASSE_DESC', 'TipoEnsino', 'SERIE','QTDE_ALUNOS', 'PRIMARY_KEY', 'SECONDARY_KEY'])
            .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_4.csv'))

        console.log('Iniciando o processamento...');

for(let i = 2; i <= 4; i++){
    let fileName = 'historico_matricula_' + i + '.csv';
    let fileName_final = 'historico_matricula_' + i + '_Rev.csv';
    dataFrame.readFileSync(path.join(folderPath2, fileName)).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2017 || row.ANO === 2018)
        .asCSV().writeFileSync(path.join(folderPath2, fileName_final))
    
}

        console.log('Continuando 1...');
        
var file_1 = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2_Rev.csv')).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2017)

var file_2 = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_3_Rev.csv')).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2017)

var file_3 = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_4_Rev.csv')).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2017)
        
file_1.concat(file_2, file_3).asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017.csv'))

        console.log('Continuando 2...');
        
file_1 = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2_Rev.csv')).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2018)

file_2 = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_3_Rev.csv')).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2018)

file_3 = dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_4_Rev.csv')).parseCSV()
        .parseInts('ANO')
        .where(row => row.ANO === 2018)
        
file_1.concat(file_2, file_3).asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018.csv'))

        console.log('Continuando 3...');
        
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017.csv')).parseCSV()
    .where(row => row.TIPOCLASSE_DESC === 'CLASSE COMUM' || row.TIPOCLASSE_DESC === 'CLASSE MULTISSERIADA' 
    || row.TIPOCLASSE_DESC === 'CLASSE DE EF/EM INTEGRAL' || row.TIPOCLASSE_DESC === 'ENSINO MEDIO ARTICULADO')
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_Sel.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018.csv')).parseCSV()
    .where(row => row.TIPOCLASSE_DESC === 'CLASSE COMUM' || row.TIPOCLASSE_DESC === 'CLASSE MULTISSERIADA' 
    || row.TIPOCLASSE_DESC === 'CLASSE DE EF/EM INTEGRAL' || row.TIPOCLASSE_DESC === 'ENSINO MEDIO ARTICULADO')
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_Sel.csv'))

    console.log('Continuando 4...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_Sel.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('MEDIO'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_EM.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_Sel.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('MEDIO'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_EM.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_Sel.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('ENSINO FUNDAMENTAL DE 9 ANOS'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_EF.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_Sel.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('ENSINO FUNDAMENTAL DE 9 ANOS'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_EF.csv'))

    console.log('Continuando 5...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 1 || row.SERIE === 2 || row.SERIE === 3 || 
                    row.SERIE === 4 || row.SERIE === 5)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_AI.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 1 || row.SERIE === 2 || row.SERIE === 3 || 
                    row.SERIE === 4 || row.SERIE === 5)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_AI.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 6 || row.SERIE === 7 || row.SERIE === 8 || 
                    row.SERIE === 9)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_AF.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 6 || row.SERIE === 7 || row.SERIE === 8 || 
                    row.SERIE === 9)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_AF.csv'))

    console.log('Continuando 6...');

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_AI.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_AI_Tot.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_AI.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_AI_Tot.csv'))

    console.log('Continuando 7...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_AF.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_AF_Tot.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_AF.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_AF_Tot.csv'))

    console.log('Continuando 8...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_EM.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_EM_Tot.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_EM.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_EM_Tot.csv'))

// *******************************************************************
// Classes Comuns e Integral

    console.log('Continuando 9...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017.csv')).parseCSV()
    .where(row => row.TIPOCLASSE_DESC === 'CLASSE COMUM' || row.TIPOCLASSE_DESC === 'CLASSE DE EF/EM INTEGRAL')
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_Sel_2.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018.csv')).parseCSV()
    .where(row => row.TIPOCLASSE_DESC === 'CLASSE COMUM' || row.TIPOCLASSE_DESC === 'CLASSE DE EF/EM INTEGRAL')
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_Sel_2.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_Sel_2.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('MEDIO'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_EM.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_Sel_2.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('MEDIO'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_EM.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_Sel_2.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('ENSINO FUNDAMENTAL DE 9 ANOS'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_EF.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_Sel_2.csv')).parseCSV()
    .where(row => row.TipoEnsino.toString().includes('ENSINO FUNDAMENTAL DE 9 ANOS'))
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_EF.csv'))

    console.log('Continuando 10...');

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 1 || row.SERIE === 2 || row.SERIE === 3 || 
                    row.SERIE === 4 || row.SERIE === 5)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_AI.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 1 || row.SERIE === 2 || row.SERIE === 3 || 
                    row.SERIE === 4 || row.SERIE === 5)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_AI.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 6 || row.SERIE === 7 || row.SERIE === 8 || 
                    row.SERIE === 9)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_AF.csv'))

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_EF.csv')).parseCSV()
    .parseInts('SERIE')
    .where(row => row.SERIE === 6 || row.SERIE === 7 || row.SERIE === 8 || 
                    row.SERIE === 9)
    .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_AF.csv'))

    console.log('Continuando 11...');

dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_AI.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_AI_Tot.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_AI.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_AI_Tot.csv'))

    console.log('Continuando 12...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_AF.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_AF_Tot.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_AF.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_AF_Tot.csv'))

    console.log('Continuando 13...');
    
dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_EM.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2017_CC_INT_EM_Tot.csv'))


dataFrame.readFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_EM.csv')).parseCSV()
        .parseInts('QTDE_ALUNOS')
        .groupBy(row => row.COD_ESC).select(group => ({
           ANO: group.first().ANO,
           CODIGO_CIE: group.first().COD_ESC,
           ESCOLA: group.first().NOMESC,
           TIPO_CLASSE: group.first().TIPOCLASSE_DESC,
           TIPO_ENSINO: group.first().TipoEnsino,
           
           TOTAL_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).sum(),
           MED_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).average().toFixed(2),
           MIN_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).min(),
           MAX_ALUNOS: group.deflate(row => row.QTDE_ALUNOS).max(),
           
           PRIMARY_KEY: group.first().PRIMARY_KEY,
           SECONDARY_KEY: group.first().SECONDARY_KEY
        })).orderBy(row => row.COD_ESC).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'historico_matricula_2018_CC_INT_EM_Tot.csv'))

console.log('Terminou!!!');
console.log('*************************************');

*/



// DISCIPLINAS SEM DOCENTES ASSOCIADOS
/*
// Separando os registros por mes    
const folderPath1 = '../DadosAbertos-SEDUC/database/original/disciplinas_sem_docentes_associados';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Disciplinas sem Docentes';
 
var filesDisciplinas = fs.readdirSync(folderPath1);

for (let i of filesDisciplinas){
    
    if(!i.toString().includes('DIC')){

        console.log('Abrindo o arquivo...');
        console.log(i)
        console.log('Iniciando o processamento...');

    var disciplina_mes_2 = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
                            .parseInts('MES_VIG').where(row => row.MES_VIG === 2)
                            .asCSV().writeFileSync(path.join(folderPath1, 'Alt_Mes_2_' + i))
    
    var disciplina_mes_3 = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
                            .parseInts('MES_VIG').where(row => row.MES_VIG === 3)
                            .asCSV().writeFileSync(path.join(folderPath1, 'Alt_Mes_3_' + i))
    }
    console.log('Terminou!!!')
    console.log('******************************')
}
*/
     
/*
// Calculando os Totais Gerais, LP e MAT por mes
const folderPath1 = '../DadosAbertos-SEDUC/database/original/disciplinas_sem_docentes_associados';
const folderPath2 = '../DadosAbertos-SEDUC/database/original/disciplinas_sem_docentes_associados/Separados';
 
var filesDisciplinas = fs.readdirSync(folderPath1);
console.log(filesDisciplinas)

for (let i of filesDisciplinas){
    
    if(i.toString().includes('Alt_')){

        console.log('Abrindo o arquivo...');
        console.log(i)
        console.log('Iniciando o processamento...');

    var disciplina_mes_2 = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
        .parseInts(['CD_ESCOLA','NR_HORA_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CD_ESCOLA)
        .select(group => ({
            CODIGO_CIE: group.first().CD_ESCOLA,
            ESCOLA: group.first().NM_COMPLETO_ESCOLA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.NR_HORA_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CD_ESCOLA).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'Tot_Geral_' + i))

    dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
        .parseInts(['CD_ESCOLA','NR_HORA_AULA_SEMANA','MES_VIG'])
        .where(row => row.NOME_DISCIPLINA.toString().includes('PORT'))
        .groupBy(row => row.CD_ESCOLA)
        .select(group => ({
            CODIGO_CIE: group.first().CD_ESCOLA,
            ESCOLA: group.first().NM_COMPLETO_ESCOLA,
            DISCIPLINA: group.first().NOME_DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.NR_HORA_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CD_ESCOLA).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'LP_Tot_' + i))

    dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
        .parseInts(['CD_ESCOLA','NR_HORA_AULA_SEMANA','MES_VIG'])
        .where(row => row.NOME_DISCIPLINA.toString().includes('MAT'))
        .groupBy(row => row.CD_ESCOLA)
        .select(group => ({
            CODIGO_CIE: group.first().CD_ESCOLA,
            ESCOLA: group.first().NM_COMPLETO_ESCOLA,
            DISCIPLINA: group.first().NOME_DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.NR_HORA_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CD_ESCOLA).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'MAT_Tot_' + i))

    }
    console.log('Terminou!!!')
    console.log('*************************************')
    
}
*/
/*    
    var disciplina = dataFrame.readFileSync(path.join(folderPath2, fileName)).parseCSV()
                        .getSeries('MES_VIG').distinct().toArray(); // Encontrando os meses de referencia
                        
    
    let fileName_final = 'disciplinas_sem_docentes_parte_' + i + '_Meses.csv'; // Encontrando os meses de referencia
    fs.writeFileSync(path.join(folderPath2, fileName_final), disciplina); // Encontrando os meses de referencia
*/

/*
    console.log('Terminou!!!')
}
 */

 // Concatenando os arquivos e calculando os Totais
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/disciplinas_sem_docentes_associados';
const folderPath2 = '../DadosAbertos-SEDUC/database/original/disciplinas_sem_docentes_associados/Separados';

    let fileName = '_Atribuicao_Parte_';

// TOTAL GERAL
    console.log('Abrindo os arquivos...');
    
    var disciplina_mes_2_1 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_2' + fileName + '1.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_2_2 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_2' + fileName + '2.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_2_3 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_2' + fileName + '3.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_2_4 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_2' + fileName + '4.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
    
    console.log('Iniciando o processamento...');
    
    disciplina_mes_2_1.concat(disciplina_mes_2_2, disciplina_mes_2_3, disciplina_mes_2_4)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_2' + fileName + 'FINAL.csv'))

    console.log('Terminou - Mes 2 - Total Geral');
    console.log('*************************************************************');
    
    console.log('Abrindo os arquivos...');
    
    var disciplina_mes_3_1 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_3' + fileName + '1.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_3_2 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_3' + fileName + '2.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_3_3 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_3' + fileName + '3.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_3_4 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_3' + fileName + '4.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_3_1.concat(disciplina_mes_3_2, disciplina_mes_3_3, disciplina_mes_3_4)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.PRIMARY_KEY).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_3' + fileName + 'FINAL.csv'))

    console.log('Terminou - Mes 3 - Total Geral');
    console.log('*************************************************************');
    
// TOTAL LP
    console.log('Abrindo os arquivos...');
    
    disciplina_mes_2_1 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_2' + fileName + '1.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_2_2 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_2' + fileName + '2.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_2_3 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_2' + fileName + '3.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_2_4 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_2' + fileName + '4.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_2_1.concat(disciplina_mes_2_2, disciplina_mes_2_3, disciplina_mes_2_4)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            DISCIPLINA: group.first().DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_2' + fileName + 'FINAL.csv'))

    console.log('Terminou - Mes 2 - LP Total');
    console.log('*************************************************************');
    
    console.log('Abrindo os arquivos...');
    
    disciplina_mes_3_1 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_3' + fileName + '1.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3_2 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_3' + fileName + '2.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3_3 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_3' + fileName + '3.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3_4 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_3' + fileName + '4.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_3_1.concat(disciplina_mes_3_2, disciplina_mes_3_3, disciplina_mes_3_4)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            DISCIPLINA: group.first().DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_3' + fileName + 'FINAL.csv'))

    console.log('Terminou - Mes 3 - LP Total');
    console.log('*************************************************************');
    
// TOTAL MAT
    console.log('Abrindo os arquivos...');
    
    disciplina_mes_2_1 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2' + fileName + '1.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_2_2 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2' + fileName + '2.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_2_3 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2' + fileName + '3.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_2_4 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2' + fileName + '4.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_2_1.concat(disciplina_mes_2_2, disciplina_mes_2_3, disciplina_mes_2_4)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            DISCIPLINA: group.first().DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2' + fileName + 'FINAL.csv'))

    console.log('Terminou - Mes 2 - MAT Total');
    console.log('*************************************************************');

    console.log('Abrindo os arquivos...');
    
    disciplina_mes_3_1 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_3' + fileName + '1.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3_2 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_3' + fileName + '2.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3_3 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_3' + fileName + '3.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3_4 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_3' + fileName + '4.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_3_1.concat(disciplina_mes_3_2, disciplina_mes_3_3, disciplina_mes_3_4)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            DISCIPLINA: group.first().DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).sum(),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_3' + fileName + 'FINAL.csv'))

    console.log('Terminou - Mes 3 - MAT Total');
    console.log('*************************************************************');




// Concatenando os arquivos com os totais e calculando as medias mensais
//const folderPath2 = '../DadosAbertos-SEDUC/database/original/disciplinas_sem_docentes_associados/Separados';

    let fileName1 = '_Atribuicao_Parte_FINAL';
    let fileName_final = 'disciplinas_sem_docentes_final_';

// MEDIA TOTAL GERAL
    var disciplina_mes_2 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_2' + fileName1 + '.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    var disciplina_mes_3 = dataFrame.readFileSync(path.join(folderPath2, 'Tot_Geral_Alt_Mes_3' + fileName1 + '.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
    
    console.log('Iniciando o processamento...');
    
    disciplina_mes_2.concat(disciplina_mes_3)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).average().toFixed(2),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, fileName_final + 'Tot_Geral.csv'))

    console.log('Terminou - Final - Total Geral');
    console.log('*************************************************************');

// MEDIA LP 
     disciplina_mes_2 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_2'+fileName1 + '.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3 = dataFrame.readFileSync(path.join(folderPath2, 'LP_Tot_Alt_Mes_3'+fileName1 + '.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_2.concat(disciplina_mes_3)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            DISCIPLINA: group.first().DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).average().toFixed(2),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, fileName_final + 'LP_Tot.csv'))

    console.log('Terminou - Final - LP Total');
    console.log('*************************************************************');
    
// MEDIA MAT   
    disciplina_mes_2 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2'+fileName1 + '.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    disciplina_mes_3 = dataFrame.readFileSync(path.join(folderPath2, 'MAT_Tot_Alt_Mes_2'+fileName1 + '.csv')).parseCSV()
        .parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])

    console.log('Iniciando o processamento...');
    
    disciplina_mes_2.concat(disciplina_mes_3)
        //.parseInts(['TOTAL_AULA_SEMANA','MES_VIG'])
        .groupBy(row => row.CODIGO_CIE)
        .select(group => ({
            CODIGO_CIE: group.first().CODIGO_CIE,
            ESCOLA: group.first().ESCOLA,
            DISCIPLINA: group.first().DISCIPLINA,
            TOTAL_AULA_SEMANA: group.deflate(row => row.TOTAL_AULA_SEMANA).average().toFixed(2),
            MES_VIG: group.first().MES_VIG,
            PRIMARY_KEY: group.first().PRIMARY_KEY
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync(path.join(folderPath2, fileName_final + 'MAT_Tot.csv'))

    console.log('Terminou - Final - MAT Total');
    console.log('*************************************************************');
 
 */
 
 
 // HISTORICO DE GESTORES NAS UNIDADES ESCOLARES
/*
// Foi necessario alterar o nome das colunas referentes aos anos
const folderPath1 = '../DadosAbertos-SEDUC/database/original/historico_gestores_UE';
const folderPath2 = '../DadosAbertos-SEDUC/page/database';

const filesGestores = fs.readdirSync(folderPath1);

for(let i = 0; i < filesGestores.length; i++){
    
    if(!filesGestores[i].toString().includes('DIC')){
        
        console.log('Iniciando...')
        console.log(filesGestores[i])
        // Selecionando as series a serem utilizadas
        dataFrame.readFileSync(path.join(folderPath1, filesGestores[i])).parseCSV()
            .subset(['CD_ESCOLA','NOME_UNID_ADM','ano2014','ano2015','ano2016','ano2017',
                    'ano2018','ano2019','PRIMARY_KEY','SECONDARY_KEY'])
            .parseInts('CD_ESCOLA')
            .select(row => ({
                CODIGO_CIE: row.CD_ESCOLA,
                ESCOLA: row.NOME_UNID_ADM,
                ANO_2014: row.ano2014,
                ANO_2015: row.ano2015,
                ANO_2016: row.ano2016,
                ANO_2017: row.ano2017,
                ANO_2018: row.ano2018,
                ANO_2019: row.ano2019,
                PRIMARY_KEY: row.PRIMARY_KEY,
                SECONDARY_KEY: row.SECONDARY_KEY
            }))
            .orderBy(row => row.CODIGO_CIE)
            .asCSV().writeFileSync(path.join(folderPath2, filesGestores[i]))
    
    }
    
}
   
    
*/

 
// INSTALACOES FISICAS POR UNIDADE ESCOLAR

// Selecionando as series a serem utilizadas
const folderPath1 = '../DadosAbertos-SEDUC_database/database/original/instalacoes_fisicas_por_UE';
const folderPath2 = '../DadosAbertos-SEDUC/page/database';

    dataFrame.readFileSync(path.join(folderPath1, '06_Escolas_Dependencias.csv')).parseCSV()
        .subset(['CODESC','NOMESC','SALAS_AULA','SALAS_ED_INF','SALAS_ED_ESP','SALAS_ED_ART',
        'SALA_RECURSO','TOT_SALAS_AULA','SALA_LEITURA','BIBLIOTECA','TOT_SALA_LEITURA',
        'AUDITORIO','ANFITEATRO','TEATRO','VIDEOTECA','SALA_TV','LAB_INFO',
        'LAB_CIENCIAS','LAB_FISICA','LAB_QUIMICA','LAB_BIOLOGIA',
        'LAB_CIENCIA_FISICA_BIOLOGICA','TOT_LAB_CIENCIA','LAB_LINGUAS','LAB_MULTIUSO',
        'BRINQUEDOTECA','QUADRA_COBERTA','QUADRA_DESCOBERTA','GINASIO','TOT_QUADRA',
        'QUADRA_AREIA','QUADRA_GRAMA','CAMPO_FUTEBOL','OFICINA','PLAYGROUND',
        'PRIMARY_KEY','SECONDARY_KEY']).parseInts('CODESC')
        .orderBy(row => row.CODESC)
        .asCSV().writeFileSync(path.join(folderPath2, 'instalacoes_fisicas_UE.csv'))



// MMR CLUSTERS

// Selecionando as series a serem utilizadas
/*
for(let i = 1; i <= 3; i++){
    
    dataFrame.readFileSync(path.join(folderPath1, 'cluster_MMR/12_MMR_Clusters.csv')).parseCSV()
        .subset(['CD_ESCOLA','NR_CICLO','DT_ANO_LETIVO']).parseInts('NR_CICLO')
        .where(row => row.NR_CICLO === i)
        .orderBy(row => row.CD_ESCOLA)
        .asCSV().writeFileSync(path.join(folderPath2, 'clusters_MMR_Ciclo_'+i+'.csv'))

}

*/

// SERVIDORES ATIVOS
/*
const folderPath1 = '../DadosAbertos-SEDUC_database/database/original/servidores_ativos_por_UE';
const folderPath2 = '../DadosAbertos-SEDUC_database/database/analysis/Servidores Ativos';
const folderPath3 = '../DadosAbertos-SEDUC_database/database/original/ausencias_por_servidor';

const filesServidores = fs.readdirSync(folderPath1);

const codigoCIE = dataFrame.readFileSync(path.join(folderPath3, 'BASE_AUSENCIAS_0419.csv')).parseCSV()
                    .subset(['CIE_ESCOLA','UA_EXERC']).parseInts(['CIE_ESCOLA','UA_EXERC'])
                    .where(row => row.CIE_ESCOLA > 0)
                    .groupBy(row => row.UA_EXERC)
                    .select(group => ({
                        CODIGO_CIE: group.first().CIE_ESCOLA,
                        CODIGO_UA: group.first().UA_EXERC
                    })).orderBy(row => row.CODIGO_UA).toArray()
//console.log(codigoCIE)

var contentJson = [];                 
                    
for(let i of filesServidores){
    
    if(!i.toString().includes('DIC')){
        console.log('Abrindo o arquivo...');
        console.log('Iniciando o processamento 1...');

        // Selecionando as series a serem utilizadas    
        var file = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
                    .subset(['UA_E','NOMEUA_E','SEXO','IDADE','NOMECAR_E',
                        'ANOS_TRAB_CARGO_C','JORNADA','PRIMARY_KEY',
                        'SECONDARY_KEY','TERTIARY_KEY'])
                    .where(row => row.NOMECAR_E.toString().includes('PROFESSOR'))
                    .orderBy(row => row.UA_E)

        // Calculando o sexo dos professores
        var masculino = 0, feminino = 0, total = 0, percMasculino = 0, percFeminino = 0;
        
            file.forEach(row => {
                    if(row.SEXO === 'M') masculino ++;
                    if(row.SEXO === 'F') feminino ++;
                })
            total = masculino + feminino;
            percMasculino = (masculino / total * 100).toFixed(2);
            percFeminino = (feminino / total * 100).toFixed(2);
            
            contentJson.push({
                                DADOS: 'Mes', 
                                MASCULINO: masculino, 
                                FEMININO: feminino, 
                                TOTAL: total, 
                                PERC_MASC: parseFloat(percMasculino), 
                                PERC_FEM: parseFloat(percFeminino)
                                })
                                
            console.log('Terminou!!!');
            console.log('Calculo do sexo - '+i);
            console.log('************************************************************')
        
        // Calculando as medias, os mininos e os maximos por UE
        file.parseInts(['IDADE','ANOS_TRAB_CARGO_C'])
            .groupBy(row => row.UA_E)
            .select(group => ({
                CODIGO_UA: group.first().UA_E,
                ESCOLA: group.first().NOMEUA_E,
                
                MED_IDADE: group.deflate(row => row.IDADE).average().toFixed(2),
                MIN_IDADE: group.deflate(row => row.IDADE).min(),
                MAX_IDADE: group.deflate(row => row.IDADE).max(),
                
                MED_EXPERIENCIA: group.deflate(row => row.ANOS_TRAB_CARGO_C).average().toFixed(2),
                MIN_EXPERIENCIA: group.deflate(row => row.ANOS_TRAB_CARGO_C).min(),
                MAX_EXPERIENCIA: group.deflate(row => row.ANOS_TRAB_CARGO_C).max(),
                
                PRIMARY_KEY: group.first().PRIMARY_KEY,
                SECONDARY_KEY: group.first().SECONDARY_KEY,
                TERTIARY_KEY: group.first().TERTIARY_KEY,
            }))
            .orderBy(row => row.CODIGO_UA).inflate()
            .asCSV().writeFileSync(path.join(folderPath2, 'Calc_'+i))

            console.log('Terminou!!!');
            console.log('Calculo das medias, minimos e maximos - '+i);
            console.log('************************************************************')
        
    }
        

    
}
console.log('Salvando a contagem do sexo dos professores...');
        // Salvando a contagem do sexo dos professores
        fs.writeFileSync(path.join(folderPath2,'servidores_ativos_sexo.json'), 
                JSON.stringify(contentJson))
 
 console.log('Iniciando o processamento 2...');   
// Calculando a media mensal do sexo dos professores
dataFrame.readFileSync(path.join(folderPath2, 'servidores_ativos_sexo.json')).parseJSON()
    //.parseInts(['MASCULINO','FEMININO','TOTAL'])
    //.parseFloats(['PERC_MASC','PERC_FEM'])
    .groupBy(row => row.DADOS).select(group => ({
        MASCULINO: group.deflate(row => row.MASCULINO).average().toFixed(0),
        FEMININO: group.deflate(row => row.FEMININO).average().toFixed(0),
        TOTAL: group.deflate(row => row.TOTAL).average().toFixed(0),
    })).inflate()
    .select(row => ({
        MASCULINO: row.MASCULINO,
        FEMININO: row.FEMININO,
        TOTAL: row.TOTAL,
        PERC_MASC: (row.MASCULINO/row.TOTAL*100).toFixed(2),
        PERC_FEM: (row.FEMININO/row.TOTAL*100).toFixed(2),

    }))
    .asCSV().writeFileSync(path.join(folderPath2, 'Calc_servidores_ativos_sexo.csv'))
            console.log('Terminou!!!');
            console.log('Calculo da media mensal do sexo dos professores.');
            console.log('************************************************************')

console.log('Iniciando o processamento 3...');

const filesServidores_2 = fs.readdirSync(folderPath2);

var files_servidores_2 = [];

for(let j of filesServidores_2){
    if(j.toString().includes('BASE')){
        files_servidores_2.push(j);
    }
}

  // Calculando as medias, os mininos e os maximos por UE por mes  
var servidores_ativos_1 = dataFrame.readFileSync(path.join(folderPath2,files_servidores_2[0])).parseCSV()
                            .parseInts(['MIN_IDADE','MAX_IDADE','MIN_EXPERIENCIA','MAX_EXPERIENCIA'])
                            .parseFloats(['MED_IDADE','MED_EXPERIENCIA'])
                            

var servidores_ativos_2 = dataFrame.readFileSync(path.join(folderPath2,files_servidores_2[1])).parseCSV()
                            .parseInts(['MIN_IDADE','MAX_IDADE','MIN_EXPERIENCIA','MAX_EXPERIENCIA'])
                            .parseFloats(['MED_IDADE','MED_EXPERIENCIA'])

servidores_ativos_1.concat(servidores_ativos_2).groupBy(row => row.CODIGO_UA)
    .select(group => ({
        CODIGO_UA: group.first().CODIGO_UA,
        ESCOLA: group.first().ESCOLA,
        
        MED_IDADE: group.deflate(row => row.MED_IDADE).average().toFixed(2),
        MIN_IDADE: group.deflate(row => row.MIN_IDADE).average().toFixed(0),
        MAX_IDADE: group.deflate(row => row.MAX_IDADE).average().toFixed(0),
        
        MED_EXPERIENCIA: group.deflate(row => row.MED_EXPERIENCIA).average().toFixed(2),
        MIN_EXPERIENCIA: group.deflate(row => row.MIN_EXPERIENCIA).average().toFixed(0),
        MAX_EXPERIENCIA: group.deflate(row => row.MAX_EXPERIENCIA).average().toFixed(0),
        
        PRIMARY_KEY: group.first().PRIMARY_KEY,
        SECONDARY_KEY: group.first().SECONDARY_KEY,
        TERTIARY_KEY: group.first().TERTIARY_KEY
    })).orderBy(row => row.CODIGO_UA).inflate()
    .asCSV().writeFileSync(path.join(folderPath2,'Calc_Tot_servidores_ativos.csv'))

        console.log('Terminou!!!');
            console.log('Calculo as medias, os mininos e os maximos por UE por mes.');
            console.log('************************************************************')

console.log('Iniciando o processamento 4...');


// Inserindo o Codigo CIE no arquivo
dataFrame.readFileSync(path.join(folderPath2,'Calc_Tot_servidores_ativos.csv')).parseCSV()
                    .parseInts('CODIGO_UA')
                    .where(row => !row.ESCOLA.toString().includes('D.E.REG.'))
                    .orderBy(row => row.CODIGO_UA)
                    .asCSV().writeFileSync(path.join(folderPath2,'Calc_Tot_servidores_ativos_2.csv'))
                    
const codigoUA = dataFrame.readFileSync(path.join(folderPath2,'Calc_Tot_servidores_ativos_2.csv')).parseCSV()
                    .parseInts(['CODIGO_UA','MIN_IDADE','MAX_IDADE','MIN_EXPERIENCIA',
                                'MAX_EXPERIENCIA'])
                    .parseFloats(['MED_IDADE','MED_EXPERIENCIA'])
                    .orderBy(row => row.CODIGO_UA).toArray()

                  
//console.log(codigoUA)

var withCode = [];

for(let k = 0; k < codigoUA.length; k++){
    //console.log(codigoCIE[k])
    for(let l = 0; l < codigoCIE.length; l++){
      //      console.log(codigoUA[l])
        if(codigoCIE[l].CODIGO_UA === codigoUA[k].CODIGO_UA){
            
            let info = {
                    CODIGO_CIE: codigoCIE[l].CODIGO_CIE,
                    CODIGO_UA: codigoUA[k].CODIGO_UA,
                    ESCOLA: codigoUA[k].ESCOLA,
                    
                    MED_IDADE: codigoUA[k].MED_IDADE,
                    MIN_IDADE: codigoUA[k].MIN_IDADE,
                    MAX_IDADE: codigoUA[k].MAX_IDADE,
                    
                    MED_EXPERIENCIA: codigoUA[k].MED_EXPERIENCIA,
                    MIN_EXPERIENCIA: codigoUA[k].MIN_EXPERIENCIA,
                    MAX_EXPERIENCIA: codigoUA[k].MAX_EXPERIENCIA,
                    
                    PRIMARY_KEY: codigoUA[k].PRIMARY_KEY,
                    SECONDARY_KEY: codigoUA[k].SECONDARY_KEY,
                    TERTIARY_KEY: codigoUA[k].TERTIARY_KEY
                };
                    
                withCode.push(info);
                break;
        }
        
    }
    continue;
}
    
    fs.writeFileSync(path.join(folderPath2, 'Calc_Tot_servidores_ativos_CIE.json'), JSON.stringify(withCode))

            console.log('Terminou!!!');
            console.log('Insercao do Codigo CIE.');
            console.log('************************************************************');

*/

// ENDERECOS DE ESCOLAS
/*
const folderPath1 = '../DadosAbertos-SEDUC/database/original/enderecos_de_escolas';
const folderPath2 = '../DadosAbertos-SEDUC/database/analysis/Enderecos Escolas';


// Selecionando as informacoes a serem utilizadas
dataFrame.readFileSync(path.join(folderPath1, '11_Escolas_Coordenadas.csv')).parseCSV()
    .subset(['COD_ESC','NOMESC','ZONA','DS_LONGITUDE','DS_LATITUDE','PRIMARY_KEY','SECONDARY_KEY'])
    //.parseFloats(['DS_LONGITUDE','DS_LATITUDE'])
    .asCSV().writeFileSync(path.join(folderPath2, 'coordenadas_das_escolas.csv'))


// Alterando o tipo de dado - longitude e latitude 

dataFrame.readFileSync(path.join(folderPath2, 'coordenadas_das_escolas.csv')).parseCSV()
    .select(row => {
        let longitude = row.DS_LONGITUDE.toString().replace(',','.');
        let latitude = row.DS_LATITUDE.toString().replace(',','.');
        return {
            CODIGO_CIE: row.COD_ESC,
            ESCOLA: row.NOMESC,
            ZONA: row.ZONA,
    
            LONGITUDE: longitude,
            LATITUDE: latitude,
            
            PRIMARY_KEY: row.PRIMARY_KEY,
            SECONDARY_KEY: row.SECONDARY_KEY
    }
    }).asCSV().writeFileSync(path.join(folderPath2, 'coordenadas_das_escolas.csv'))
    //.parseFloats(['DS_LONGITUDE','DS_LATITUDE'])
 */   