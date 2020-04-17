const dataFrame = require('data-forge');
require('data-forge-fs');

const fs = require('fs');
const path = require('path');

//const folderPath1 = '../DadosAbertos-SEDUC/page/database/';
//const folderPath2 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
//const folderPath3 = '../DadosAbertos-SEDUC/page/database_page/Analisados/IDESP';


//const folders = fs.readdirSync(folderPath1);

/*
// Ordenando o conteudo dos arquivos - CODIGO_CIE
for(let i of folders){

    
        if(!i.toString().includes('.')){
            
            let files = fs.readdirSync(path.join(folderPath1,i));
            
            for(let j of files){
                console.log('Processando o arquivo ' + j);
                
                dataFrame.readFileSync(path.join(folderPath1, i, j)).parseCSV()
                    .parseInts('CODIGO_CIE')
                    .where(row => row.CODIGO_CIE > 0)
                    .orderBy(row => row.CODIGO_CIE)
                    .asCSV().writeFileSync(path.join(folderPath1, i, j));
                
                console.log('Terminou!!!');
                console.log('**************************************');
            }
        } else {    
    
            console.log('Processando o arquivo ' + i);
            dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
                .parseInts('CODIGO_CIE')
                .where(row => row.CODIGO_CIE > 0)
                .orderBy(row => row.CODIGO_CIE)
                .asCSV().writeFileSync(path.join(folderPath1, i));
            console.log('Terminou!!!');
            console.log('**************************************');                
        }
    
}
*/

/*
const folderPath1 = '../DadosAbertos-SEDUC/page/database/IDESP_Todos';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/IDESP';

// Organizando as informacoes do SARESP e IDESP
const fileName_final = ['2017', '2018']


for(let i = 0; i < 2; i++){
    var anosIniciais = dataFrame.readFileSync(path.join(folderPath1, 'IDESP_AI_' + fileName_final[i] + '.csv')).parseCSV()
    var anosFinais = dataFrame.readFileSync(path.join(folderPath1, 'IDESP_AF_' + fileName_final[i] + '.csv')).parseCSV()
    var ensinoMedio = dataFrame.readFileSync(path.join(folderPath1, 'IDESP_EM_' + fileName_final[i] + '.csv')).parseCSV()

    var start = 0;
    var end = 0;

    // Ordenacao de todas as informacoes para teste do script
    anosIniciais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AI_' + fileName_final[i] + '_Ord.csv'))
    
    anosFinais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AF_' + fileName_final[i] + '_Ord.csv'))

    ensinoMedio.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_EM_' + fileName_final[i] + '_Ord.csv'))

    // 100 melhores desempenhos 
    console.log('Separando os 100 melhores desempenhos...');
    
    anosIniciais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .head(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AI_' + fileName_final[i] + '_Ord_Head.csv'))
    
    anosFinais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .head(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AF_' + fileName_final[i] + '_Ord_Head.csv'))

    ensinoMedio.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .head(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_EM_' + fileName_final[i] + '_Ord_Head.csv'))
    
    // 100 piores desempenhos
    console.log('Separando os 100 piores desempenhos...');
    
    anosIniciais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .tail(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AI_' + fileName_final[i] + '_Ord_Tail.csv'))
    
    anosFinais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .tail(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AF_' + fileName_final[i] + '_Ord_Tail.csv'))

    ensinoMedio.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .tail(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_EM_' + fileName_final[i] + '_Ord_Tail.csv'))

    // 100 desempenhos intermediarios
    console.log('Separando os 100 desempenhos intermediarios...');
    
    start = parseInt((anosIniciais.toArray().length / 2) - 50);
    end = parseInt((anosIniciais.toArray().length / 2) + 50);
    
    console.log(`Anos Iniciais - Ano: ${fileName_final[i]}`);
    console.log(`start: ${start} - end: ${end}`);
    console.log('*****************************************************')
    
    anosIniciais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .skip(start).take(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AI_' + fileName_final[i] + '_Ord_Interm.csv'))

    start = parseInt((anosFinais.toArray().length / 2) - 50);
    end = parseInt((anosFinais.toArray().length / 2) + 50);

    console.log(`Anos Finais - Ano: ${fileName_final[i]}`);
    console.log(`start: ${start} - end: ${end}`);
    console.log('*****************************************************')
    
    
    anosFinais.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .skip(start).take(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_AF_' + fileName_final[i] + '_Ord_Interm.csv'))

    start = parseInt((ensinoMedio.toArray().length / 2) - 50);
    end = parseInt((ensinoMedio.toArray().length / 2) + 50);
    
    console.log(`Ensino Medio - Ano: ${fileName_final[i]}`);
    console.log(`start: ${start} - end: ${end}`);
    console.log('*****************************************************')
    
    ensinoMedio.parseFloats('IDESP').where(row => row.IDESP > 0)
        .orderByDescending(row => row.IDESP)
        .skip(start).take(100)
        .asCSV().writeFileSync(path.join(folderPath2, 'IDESP_EM_' + fileName_final[i] + '_Ord_Interm.csv'))

    console.log('Terminou!!!')  
    
}

*/

/*
const folderPath1 = '../DadosAbertos-SEDUC/page/database';
const folderPath2 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath3 = '../DadosAbertos-SEDUC/page/database/IDESP';

// Insere as coordenadas das escolas nos arquivos estratificados 
// por desempenho do IDESP
const files = fs.readdirSync(folderPath3)

const coordenadasEscolas = dataFrame.readFileSync(path.join(folderPath1,'coordenadas_das_escolas.csv'))
                                .parseCSV().toArray()

for(let i of files){
    
    if(i.toString().includes('Head') || i.toString().includes('Interm') 
        || i.toString().includes('Tail')){
        console.log('Processando o arquivo ' + i);
        
        var escola = dataFrame.readFileSync(path.join(folderPath3, i)).parseCSV()
                        .toArray()
        
        var countEscola = escola.length;
        var countCoordenadas = coordenadasEscolas.length
        
        var coordenadas = [];
        
        for(let j = 0; j < countEscola; j++){
            
            for(let k = 0; k < countCoordenadas; k++){
                
                if(escola[j].CODIGO_CIE === coordenadasEscolas[k].CODIGO_CIE){
                    
                    let info = {
                        CODIGO_CIE: escola[j].CODIGO_CIE,
                        ESCOLA: coordenadasEscolas[k].ESCOLA,
                        ZONA: coordenadasEscolas[k].ZONA,
                        LONGITUDE: coordenadasEscolas[k].LONGITUDE,
                        LATITUDE: coordenadasEscolas[k].LATITUDE,
                        
                        PRIMARY_KEY: coordenadasEscolas[k].PRIMARY_KEY,
                        SECONDARY_KEY: coordenadasEscolas[k].SECONDARY_KEY
                        };
                        
                    coordenadas.push(info);
                    break;
                }
            }
            continue;
        }
        let fileName = 'Alt_' + i.substr(0, i.length-4);
        
        fs.writeFileSync(path.join(folderPath2, fileName + '.json'), JSON.stringify(coordenadas))
        
        var coordEsc =  dataFrame.readFileSync(path.join(folderPath2, fileName + '.json')).parseJSON()
                
        
        dataFrame.readFileSync(path.join(folderPath3, i)).parseCSV()
            .withSeries('ZONA', coordEsc.getSeries('ZONA'))        
            .asCSV().writeFileSync(path.join(folderPath2, fileName + '.csv'))
                
        dataFrame.readFileSync(path.join(folderPath2, fileName + '.csv')).parseCSV()
            .withSeries('LONGITUDE', coordEsc.getSeries('LONGITUDE'))        
            .asCSV().writeFileSync(path.join(folderPath2, fileName + '.csv'))
    
        dataFrame.readFileSync(path.join(folderPath2, fileName + '.csv')).parseCSV()
            .withSeries('LATITUDE', coordEsc.getSeries('LATITUDE'))        
            .asCSV().writeFileSync(path.join(folderPath2, fileName + '.csv'))
    
        
        console.log('Terminou!!!');
        console.log('**************************************');
    }
}    
   
*/


/*
// Insere a existencia de cluster nos arquivos estratificados do IDESP
// Nenhuma correspondencia encontrada
const files = fs.readdirSync('../DadosAbertos-SEDUC/page/database_page/Analisados/IDESP_Todos/')

const cluster = ['clusters_MMR_Ciclo_1.csv','clusters_MMR_Ciclo_3.csv','clusters_MMR_Ciclo_3.csv']

for(let i = 0; i < files.length; i++){
    
    console.log('Processando o arquivo ' + files[i]);
    
    var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database_page/Analisados/IDESP_Todos/', files[i])).parseCSV()
                    .parseInts('CODIGO_CIE').orderBy(row => row.CODIGO_CIE).toArray()
    
    var countEscola = escola.length;
    
    var clusterArray = [];
    
    var countCluster = 0;
    var clusterFile;
        
    if(files[i].toString().includes('AI')){
        clusterFile = dataFrame.readFileSync(path.join(folderPath1, cluster[0])).parseCSV()
                        .parseInts('CD_ESCOLA').orderBy(row => row.CD_ESCOLA).toArray()
        countCluster = clusterFile.length
    }
        
    if(files[i].toString().includes('AF')){
        clusterFile = dataFrame.readFileSync(path.join(folderPath1, cluster[1])).parseCSV()
                        .parseInts('CD_ESCOLA').orderBy(row => row.CD_ESCOLA).toArray()
        countCluster = clusterFile.length
    }

    if(files[i].toString().includes('EM')){
        clusterFile = dataFrame.readFileSync(path.join(folderPath1, cluster[2])).parseCSV()
                        .parseInts('CD_ESCOLA').orderBy(row => row.CD_ESCOLA).toArray()
        countCluster = clusterFile.length
    }

    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < countCluster; k++){
            
            if(escola[j].CODIGO_CIE === clusterFile[k].CD_ESCOLA){
                
                let info = {
                    ESCOLA: escola[k].ESCOLA,
                    CODIGO: escola[k].CODIGO_CIE,
                    CLUSTER: 'SIM',
                    };
                    
                clusterArray.push(info);
                break;
            }
        }
        continue;
    }
    let fileName = 'Alt_' + files[i].substr(0, files[i].length-4);
    
    fs.writeFileSync(path.join(folderPath2, fileName + '.json'), JSON.stringify(clusterArray))
    
    var coordEsc =  dataFrame.readFileSync(path.join(folderPath2, fileName + '.json')).parseJSON()
            
    console.log('Terminou!!!');
    console.log('**************************************');

}  
*/

/*
// Insere o total de ausencia nos arquivos estratificados do IDESP

const folderPath1 = '../DadosAbertos-SEDUC/page/database/IDESP_Todos';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/Ausencias';
const folderPath3 = '../DadosAbertos-SEDUC/database_final/Intermediarios';

const files = fs.readdirSync(folderPath1)

const ausencias = dataFrame.readFileSync(path.join(folderPath2,'ausencias_por_servidor_Porc.csv'))
                                .parseCSV().parseFloats('PORC_TOT_DIAS_AUSENCIAS').toArray()

for(let i = 0; i < files.length; i++){

    console.log('Processando o arquivo ' + files[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files[i])).parseCSV()
                    .parseFloats('IDESP').where(row => row.IDESP > 0).toArray()
    
    var countEscola = escola.length;
    var countAusencias = ausencias.length
    
    var ausenciasArray = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < countAusencias; k++){
            
            if(escola[j].CODIGO_CIE === ausencias[k].CODIGO_CIE){
                
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                    IDESP: escola[j].IDESP,
                    AUSENCIAS: ausencias[k].PORC_TOT_DIAS_AUSENCIAS,
                    ANO: escola[j].ANO,
                    
                    SECONDARY_KEY: escola[j].SECONDARY_KEY,
                    TERTIARY_KEY: ausencias[k].TERTIARY_KEY
                    
                };
                    
                ausenciasArray.push(info);
                break;
            }
        }
        continue;
    }
    let fileName = files[i].substr(0, files[i].length-4);
    
    fs.writeFileSync(path.join(folderPath3, fileName + '.json'), JSON.stringify(ausenciasArray))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}    
 */
 
/* 
 // Insere as informacoes das disciplinas sem docentes nos arquivos 
 // estratificados do IDESP

const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/Disciplinas sem Docentes';


const files = fs.readdirSync(folderPath1)

const disciplinas = dataFrame.readFileSync(
                        path.join(folderPath2,'disciplinas_sem_docentes_final_Tot_Geral.csv'))
                        .parseCSV()
                        .parseInts('CODIGO_CIE')
                        .parseFloats('TOTAL_AULA_SEMANA').toArray()
console.log(disciplinas)

for(let i = 0; i < files.length; i++){

    console.log('Processando o arquivo ' + files[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files[i])).parseJSON()
                    .parseInts('CODIGO_CIE').where(row => row.IDESP > 0).toArray()
    
    var countEscola = escola.length;
    var countDisciplinas = disciplinas.length
    
    var disciplinasArray = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < countDisciplinas; k++){
            
            if(escola[j].CODIGO_CIE === disciplinas[k].CODIGO_CIE){
                
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                    IDESP: escola[j].IDESP,
                    AUSENCIAS: escola[j].AUSENCIAS,
                    AULAS_SEM_DOCENTES: disciplinas[k].TOTAL_AULA_SEMANA,
                    ANO: escola[j].ANO,
                    
                    SECONDARY_KEY: escola[j].SECONDARY_KEY,
                    TERTIARY_KEY: escola[j].TERTIARY_KEY
                    
                };
                    
                disciplinasArray.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName = files[i].substr(0, files[i].length-4);
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath1, files[i]), JSON.stringify(disciplinasArray))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}
*/

 // Insere o total de matriculas nos arquivos estratificados do IDESP
/*
const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/Matricula';

const filesPair = [
                    ['IDESP_AI_2017.json','historico_matricula_2017_AI_Tot.csv'],
                    ['IDESP_AI_2018.json','historico_matricula_2018_AI_Tot.csv'],
                    ['IDESP_AF_2017.json','historico_matricula_2017_AF_Tot.csv'],
                    ['IDESP_AF_2018.json','historico_matricula_2018_AF_Tot.csv'],
                    ['IDESP_EM_2017.json','historico_matricula_2017_EM_Tot.csv'],
                    ['IDESP_EM_2018.json','historico_matricula_2018_EM_Tot.csv']
                  ]


for(let i of filesPair){
    
    console.log('Processando os arquivos: ' + i[0] + ' - ' + i[1]);
    
    var idesp = dataFrame.readFileSync(path.join(folderPath1, i[0])).parseJSON()
                    .where(row => row.IDESP > 0).toArray()
    
    var matriculas = dataFrame.readFileSync(path.join(folderPath2, i[1])).parseCSV()
                    .parseInts(['CODIGO_CIE','TOTAL_ALUNOS'])
                    .parseFloats(['MED_ALUNOS']).toArray()
    
    var countIdesp = idesp.length;
    var countMatriculas = matriculas.length
    
    var matriculasArray = [];
    
    for(let j = 0; j < countIdesp; j++){
        
        for(let k = 0; k < countMatriculas; k++){
            
            if(idesp[j].CODIGO_CIE === matriculas[k].CODIGO_CIE){
                
                let info = {
                    CODIGO_CIE: idesp[j].CODIGO_CIE,
                    ESCOLA: idesp[j].ESCOLA,
                    NIVEL_ENSINO: idesp[j].NIVEL_ENSINO,
                    IDESP: idesp[j].IDESP,
                    AUSENCIAS: idesp[j].AUSENCIAS,
                    AULAS_SEM_DOCENTES: idesp[j].AULAS_SEM_DOCENTES,
                    MATRICULAS: matriculas[k].TOTAL_ALUNOS,
                    MED_ALUNOS: matriculas[k].MED_ALUNOS,
                    ANO: idesp[j].ANO,
                    
                    SECONDARY_KEY: idesp[j].SECONDARY_KEY,
                    TERTIARY_KEY: idesp[j].TERTIARY_KEY
                    
                };
                    
                matriculasArray.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName = files[i].substr(0, files[i].length-4);
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath1, i[0]), JSON.stringify(matriculasArray))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}
*/
/*
 // Insere as informacoes dos servidores ativos nos arquivos estratificados do IDESP

const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/Servidores Ativos';


const files = fs.readdirSync(folderPath1)

const servidores = dataFrame.readFileSync(
                        path.join(folderPath2,'Calc_Tot_servidores_ativos_CIE.json'))
                        .parseJSON()
                        .toArray()


for(let i = 0; i < files.length; i++){

    console.log('Processando o arquivo ' + files[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files[i])).parseJSON()
                    .where(row => row.IDESP > 0).toArray()
    
    var countEscola = escola.length;
    var countServidores = servidores.length
    
    var servidoresArray = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < countServidores; k++){
            
            if(escola[j].CODIGO_CIE === servidores[k].CODIGO_CIE){
              
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                    IDESP: escola[j].IDESP,
                    AUSENCIAS: escola[j].AUSENCIAS,
                    AULAS_SEM_DOCENTES: escola[j].AULAS_SEM_DOCENTES,
                    MATRICULAS: escola[j].MATRICULAS,
                    MED_ALUNOS: escola[j].MED_ALUNOS,
                    MED_IDADE: servidores[k].MED_IDADE,
                    MED_EXPERIENCIA: servidores[k].MED_EXPERIENCIA,
                    ANO: escola[j].ANO,
                    
                    SECONDARY_KEY: escola[j].SECONDARY_KEY,
                    TERTIARY_KEY: escola[j].TERTIARY_KEY
                    
                };
                    
                servidoresArray.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName = files[i].substr(0, files[i].length-4);
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath1, files[i]), JSON.stringify(servidoresArray))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}
*/
/*
 // Insere as informacoes da carga horaria e da jornada nos arquivos estratificados do IDESP

const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/Carga Horaria';


const files = fs.readdirSync(folderPath1)

const cargaHoraria = dataFrame.readFileSync(
                        path.join(folderPath2,'Alt_BASE_CARGA_HOR_SALA_AULA_Porc.csv'))
                        .parseCSV().parseInts('CODIGO_CIE')
                        .parseFloats(['AULAS_LIVRES_TOTAL', 'JORNADA_C',
                                    'JORNADA_B','JORNADA_I','JORNADA_R'])
                        .toArray()


for(let i = 0; i < files.length; i++){

    console.log('Processando o arquivo ' + files[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files[i])).parseJSON()
                    .where(row => row.IDESP > 0).toArray()
    
    var countEscola = escola.length;
    var countCargaHoraria = cargaHoraria.length
    
    var cargaHorariaArray = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < countCargaHoraria; k++){
            
            if(escola[j].CODIGO_CIE === cargaHoraria[k].CODIGO_CIE){
              
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                    IDESP: escola[j].IDESP,
                    AUSENCIAS: escola[j].AUSENCIAS,
                    AULAS_SEM_DOCENTES: escola[j].AULAS_SEM_DOCENTES,
                    MATRICULAS: escola[j].MATRICULAS,
                    MED_ALUNOS: escola[j].MED_ALUNOS,
                    MED_IDADE: escola[j].MED_IDADE,
                    MED_EXPERIENCIA: escola[j].MED_EXPERIENCIA,
                    ANO: escola[j].ANO,
                    AULAS_LIVRES: cargaHoraria[k].AULAS_LIVRES_TOTAL,
                    JORNADA_C: cargaHoraria[k].JORNADA_C,
                    JORNADA_B: cargaHoraria[k].JORNADA_B,
                    JORNADA_I: cargaHoraria[k].JORNADA_I,
                    JORNADA_R: cargaHoraria[k].JORNADA_I,
                    
                    SECONDARY_KEY: escola[j].SECONDARY_KEY,
                    TERTIARY_KEY: escola[j].TERTIARY_KEY
                    
                };
                    
                cargaHorariaArray.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName = files[i].substr(0, files[i].length-4);
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath1, files[i]), JSON.stringify(cargaHorariaArray))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}

*/


/*
 // Insere as informacoes do numero de salas de aula 
 //nos arquivos estratificados do IDESP

const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath2 = '../DadosAbertos-SEDUC/page/database';


const files = fs.readdirSync(folderPath1)

const instalacoesFisicas = dataFrame.readFileSync(
                        path.join(folderPath2,'instalacoes_fisicas_UE.csv'))
                        .parseCSV().parseInts(['CODESC','TOT_SALAS_AULA'])
                        .toArray()

for(let i = 0; i < files.length; i++){

    console.log('Processando o arquivo ' + files[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files[i])).parseJSON()
                    .where(row => row.IDESP > 0).toArray()
    
    var countEscola = escola.length;
    var countInstalacoes = instalacoesFisicas.length
    
    var instalacoesFisicasArray = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < countInstalacoes; k++){
            
            if(escola[j].CODIGO_CIE === instalacoesFisicas[k].CODESC){
         
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                    IDESP: escola[j].IDESP,
                    AUSENCIAS: escola[j].AUSENCIAS,
                    AULAS_SEM_DOCENTES: escola[j].AULAS_SEM_DOCENTES,
                    MATRICULAS: escola[j].MATRICULAS,
                    MED_ALUNOS: escola[j].MED_ALUNOS,
                    MED_IDADE: escola[j].MED_IDADE,
                    MED_EXPERIENCIA: escola[j].MED_EXPERIENCIA,
                    ANO: escola[j].ANO,
                    AULAS_LIVRES: escola[j].AULAS_LIVRES_TOTAL,
                    JORNADA_C: escola[j].JORNADA_C,
                    JORNADA_B: escola[j].JORNADA_B,
                    JORNADA_I: escola[j].JORNADA_I,
                    JORNADA_R: escola[j].JORNADA_I,
                    SALAS_AULA: instalacoesFisicas[k].TOT_SALAS_AULA,
                    
                    SECONDARY_KEY: escola[j].SECONDARY_KEY,
                    TERTIARY_KEY: escola[j].TERTIARY_KEY
                    
                };
                    
                instalacoesFisicasArray.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName = files[i].substr(0, files[i].length-4);
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath1, files[i]), JSON.stringify(instalacoesFisicasArray))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}

*/


/*
// Verifica a quantidade de gestores nas escolas pelo desempenho do IDESP
// (melhores, intermediarias, piores)

//const folderPath1 = '../DadosAbertos-SEDUC/database_final/IDESP';
const folderPath2 = '../DadosAbertos-SEDUC/page/database';
const folderPath3 = '../DadosAbertos-SEDUC/database_final/Intermediarios';


const files = fs.readdirSync(folderPath2)
var ano2017, ano2018;
var fileName;

// Seleciona a presenca de gestores nos registros por escola
for(let i of files){
    console.log(i)
    
    fileName = i.toString().substr(0, i.toString().length-4) + '.json';        
    
    if(i.toString().includes('DIR') || i.toString().includes('PROF')){
        
        if(i.toString().includes('.csv')){
            if(i.toString().includes('VICE') && i.toString().includes('DIR')){
                
                ano2017 = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                    .where(row => row.ANO_2017 === 'SIM')
                    .select(row => ({
                        CODIGO_CIE: row.CODIGO_CIE,
                        ESCOLA: row.ESCOLA,
                        VICE_DIRETOR: 'SIM',
                        ANO: '2017',
                        SECONDARY_KEY: row.SECONDARY_KEY
                        })).toArray()
                
                fs.writeFileSync(path.join(folderPath3, '2017_' + fileName),JSON.stringify(ano2017))
                
                ano2018 = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                    .where(row => row.ANO_2018 === 'SIM')
                    .select(row => ({
                        CODIGO_CIE: row.CODIGO_CIE,
                        ESCOLA: row.ESCOLA,
                        VICE_DIRETOR: 'SIM',
                        ANO: '2018',
                        SECONDARY_KEY: row.SECONDARY_KEY
                        })).toArray()
                        
                fs.writeFileSync(path.join(folderPath3, '2018_' + fileName),JSON.stringify(ano2018))
            }
            
            if(i.toString().includes('DIR') && i.toString().includes('ESC')){
                
                ano2017 = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                    .where(row => row.ANO_2017 === 'SIM')
                    .select(row => ({
                        CODIGO_CIE: row.CODIGO_CIE,
                        ESCOLA: row.ESCOLA,
                        DIRETOR: 'SIM',
                        ANO: '2017',
                        SECONDARY_KEY: row.SECONDARY_KEY
                        })).toArray()
                
                fs.writeFileSync(path.join(folderPath3, '2017_' + fileName),JSON.stringify(ano2017))
                
                ano2018 = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                    .where(row => row.ANO_2018 === 'SIM')
                    .select(row => ({
                        CODIGO_CIE: row.CODIGO_CIE,
                        ESCOLA: row.ESCOLA,
                        DIRETOR: 'SIM',
                        ANO: '2018',
                        SECONDARY_KEY: row.SECONDARY_KEY
                        })).toArray()
            
                fs.writeFileSync(path.join(folderPath3, '2018_' + fileName),JSON.stringify(ano2018))
            }
            
            if(i.toString().includes('PRO')){
                
                ano2017 = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                    .where(row => row.ANO_2017 === 'SIM')
                    .select(row => ({
                        CODIGO_CIE: row.CODIGO_CIE,
                        ESCOLA: row.ESCOLA,
                        COORDENADOR: 'SIM',
                        ANO: '2017',
                        SECONDARY_KEY: row.SECONDARY_KEY
                        })).toArray()
                
                fs.writeFileSync(path.join(folderPath3, '2017_' + fileName),JSON.stringify(ano2017))
                
                ano2018 = dataFrame.readFileSync(path.join(folderPath2, i)).parseCSV()
                    .where(row => row.ANO_2018 === 'SIM')
                    .select(row => ({
                        CODIGO_CIE: row.CODIGO_CIE,
                        ESCOLA: row.ESCOLA,
                        COORDENADOR: 'SIM',
                        ANO: '2018',
                        SECONDARY_KEY: row.SECONDARY_KEY
                        })).toArray()
            
                fs.writeFileSync(path.join(folderPath3, '2018_' + fileName),JSON.stringify(ano2018))
                
            }
        }
    }
}

console.log("Terminou!!!")



// Reorganiza os registros dos gestores
const files2 = fs.readdirSync(folderPath3)

for(let j of files2){
    
    fileName = j.toString().substr(0, j.toString().length-5) + '.csv';        

    if(j.toString().includes('VICE') && j.toString().includes('DIR')){
        
        dataFrame.readFileSync(path.join(folderPath3, j)).parseJSON()
            .groupBy(row => row.CODIGO_CIE).select(group => ({
                CODIGO_CIE: group.first().CODIGO_CIE,
                ESCOLA: group.first().ESCOLA,
                VICE_DIRETOR: group.first().VICE_DIRETOR,
                ANO: group.first().ANO,
                SECONDARY_KEY: group.first().SECONDARY_KEY
            })).inflate()
            .asCSV().writeFileSync(path.join(folderPath3, '2_' + fileName))
    }
    
    if(j.toString().includes('DIR') && j.toString().includes('ESC')){
    
        dataFrame.readFileSync(path.join(folderPath3, j)).parseJSON()
            .groupBy(row => row.CODIGO_CIE).select(group => ({
                CODIGO_CIE: group.first().CODIGO_CIE,
                ESCOLA: group.first().ESCOLA,
                DIRETOR: group.first().DIRETOR,
                ANO: group.first().ANO,
                SECONDARY_KEY: group.first().SECONDARY_KEY
            })).inflate()
            .asCSV().writeFileSync(path.join(folderPath3, '2_' + fileName))
    }    
    
    if(j.toString().includes('PRO')){    
    
        dataFrame.readFileSync(path.join(folderPath3, j)).parseJSON()
            .groupBy(row => row.CODIGO_CIE).select(group => ({
                CODIGO_CIE: group.first().CODIGO_CIE,
                ESCOLA: group.first().ESCOLA,
                COORDENADOR: group.first().COORDENADOR,
                ANO: group.first().ANO,
                SECONDARY_KEY: group.first().SECONDARY_KEY
            })).inflate()
            .asCSV().writeFileSync(path.join(folderPath3, '2_' + fileName))
    }
}
    
*/

/*
// Insere a presenca de gestores nos arquivos estratificados do IDESP
// Calcula o numero de cada gestor por grupo

const folderPath1 = '../DadosAbertos-SEDUC/database_final/IDESP';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/Ausencias';
const folderPath3 = '../DadosAbertos-SEDUC/database_final/Intermediarios';

const files = fs.readdirSync(folderPath1)
const files2 = fs.readdirSync(folderPath3)

for(let i of files){
    var countDiretor = 0, countViceDir = 0, countCoordenador = 0;
    var countAno, countNivel, countGrupo;
    
    if(i.toString().includes('Head') || i.toString().includes('Interm') 
        || i.toString().includes('Tail')){
        
        console.log('Processando o arquivo ' + i);
        
        for(let j of files2){
            
            if(j.toString().includes('.csv')){
                
                if((i.toString().includes('2017') && j.toString().includes('2017')) ||
                    (i.toString().includes('2018') && j.toString().includes('2018'))){
                    
                    if(i.toString().includes('Head')) countGrupo = 'Melhores';
                    if(i.toString().includes('Interm')) countGrupo = 'Intermediarios'
                    if(i.toString().includes('Tail')) countGrupo = 'Piores';
                    
                    if(i.toString().includes('AI')) countNivel = 'Anos Iniciais';
                    if(i.toString().includes('AF')) countNivel = 'Anos Finais'
                    if(i.toString().includes('EM')) countNivel = 'Ensino Medio';
                    
                    if(i.toString().includes('2017')) countAno = '2017';
                    if(i.toString().includes('2018')) countAno = '2018';
                    
                    var gestores = dataFrame.readFileSync(path.join(folderPath3, j))
                    .parseCSV().parseInts('CODIGO_CIE').toArray()

                    var escola = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
                    .parseInts('CODIGO_CIE').toArray()
    
                    var countEscola = escola.length;
                    var countGestores = gestores.length
                    
                    var gestoresArray = [];
                    
                    if(j.toString().includes('VICE') && j.toString().includes('DIR')){
                        
                        for(let k = 0; k < countEscola; k++){
                            
                            for(let l = 0; l < countGestores; l++){
                                
                                if(escola[k].CODIGO_CIE === gestores[l].CODIGO_CIE){
                                    
                                    let info = {
                                        CODIGO_CIE: escola[k].CODIGO_CIE,
                                        ESCOLA: escola[k].ESCOLA,
                                        NIVEL_ENSINO: escola[k].NIVEL_ENSINO,
                                        IDESP: escola[k].IDESP,
                                        ANO: escola[k].ANO,
                                        VICE_DIRETOR: gestores[l].VICE_DIRETOR,
                                        
                                        SECONDARY_KEY: escola[k].SECONDARY_KEY,
                                        TERTIARY_KEY: escola[k].TERTIARY_KEY
                                        
                                    };
                                    gestoresArray.push(info);
                                    countViceDir++
                                    break;
                                }
                            }
                            continue;
                        }
                        let fileName = i.substr(0, i.length-4) + '_Vice_Dir';
                        
                        fs.writeFileSync(path.join(folderPath3, fileName + '.json'), 
                            JSON.stringify(gestoresArray))
                    }
                    
                    if(j.toString().includes('DIR') && j.toString().includes('ESC')){
                      
                      for(let k = 0; k < countEscola; k++){
                            
                            for(let l = 0; l < countGestores; l++){
                                
                                if(escola[k].CODIGO_CIE === gestores[l].CODIGO_CIE){
                                    
                                    let info = {
                                        CODIGO_CIE: escola[k].CODIGO_CIE,
                                        ESCOLA: escola[k].ESCOLA,
                                        NIVEL_ENSINO: escola[k].NIVEL_ENSINO,
                                        IDESP: escola[k].IDESP,
                                        ANO: escola[k].ANO,
                                        DIRETOR: gestores[l].DIRETOR,
                                        
                                        SECONDARY_KEY: escola[k].SECONDARY_KEY,
                                        TERTIARY_KEY: escola[k].TERTIARY_KEY
                                        
                                    };
                                    gestoresArray.push(info);
                                    countDiretor++
                                    break;
                                }
                            }
                            continue;
                        }
                        let fileName = i.substr(0, i.length-4) + '_Dir';
                        
                        fs.writeFileSync(path.join(folderPath3, fileName + '.json'), 
                            JSON.stringify(gestoresArray))
                    }  
                    
                    if(j.toString().includes('PRO')){
                        
                        for(let k = 0; k < countEscola; k++){
                            
                            for(let l = 0; l < countGestores; l++){
                                
                                if(escola[k].CODIGO_CIE === gestores[l].CODIGO_CIE){
                                    
                                    let info = {
                                        CODIGO_CIE: escola[k].CODIGO_CIE,
                                        ESCOLA: escola[k].ESCOLA,
                                        NIVEL_ENSINO: escola[k].NIVEL_ENSINO,
                                        IDESP: escola[k].IDESP,
                                        ANO: escola[k].ANO,
                                        COORDENADOR: gestores[l].COORDENADOR,
                                        
                                        SECONDARY_KEY: escola[k].SECONDARY_KEY,
                                        TERTIARY_KEY: escola[k].TERTIARY_KEY
                                        
                                    };
                                    gestoresArray.push(info);
                                    countCoordenador++
                                    break;
                                }
                            }
                            continue;
                        }
                        let fileName = i.substr(0, i.length-4) + '_Coord';
                        
                        fs.writeFileSync(path.join(folderPath3, fileName + '.json'), 
                            JSON.stringify(gestoresArray))
                    }
                }
            
                let fileName2 = i.substr(0, i.length-4) + '_Gest_Count';
                fs.writeFileSync(path.join(folderPath3, fileName2 + '.json'), 
                            JSON.stringify([{
                                ANO: countAno,
                                GRUPO: countGrupo,
                                NIVEL: countNivel,
                                DIRETOR: countDiretor,
                                VICE_DIRETOR: countViceDir,
                                COORDENADOR: countCoordenador
                            }]))
            }
        }
    }
}

var countGestArray_AI = []
var countGestArray_AF = []
var countGestArray_EM = []

for(let f of files2){
 
   
    if(f.toString().includes('AI') && f.toString().includes('Gest_Count')) {
        //console.log(f)
        let fileAI = dataFrame.readFileSync(path.join(folderPath3, f)).parseJSON()
        countGestArray_AI.push(fileAI);   
    }
    
    if(f.toString().includes('AF') && f.toString().includes('Gest_Count')) {
        let fileAF = dataFrame.readFileSync(path.join(folderPath3, f)).parseJSON()
        countGestArray_AF.push(fileAF);
    }

    if(f.toString().includes('EM') && f.toString().includes('Gest_Count')) {
        let fileEM = dataFrame.readFileSync(path.join(folderPath3, f)).parseJSON()
        countGestArray_EM.push(fileEM);
    }
    
}

var fileAI_1 = countGestArray_AI.shift();
fileAI_1.concat(countGestArray_AI).asJSON().writeFileSync(path.join(folderPath3, 'Gestores_Count_AI.json'))

var fileAF_1 = countGestArray_AF.shift();
fileAF_1.concat(countGestArray_AF).asJSON().writeFileSync(path.join(folderPath3, 'Gestores_Count_AF.json'))

var fileEM_1 = countGestArray_EM.shift();
fileEM_1.concat(countGestArray_EM).asJSON().writeFileSync(path.join(folderPath3, 'Gestores_Count_EM.json'))

*/

/*
// Insere as instalacoes fisicas nos arquivos estratificados do IDESP
// Calcula o numero de cada instalacao por grupo

const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios';
const folderPath2 = '../DadosAbertos-SEDUC/page/database';
const folderPath3 = '../DadosAbertos-SEDUC/database_final/Intermediarios/Instalacoes';

const files = fs.readdirSync(folderPath1)

for(let i of files){

    if(i.toString().includes('Head') || i.toString().includes('Interm') 
        || i.toString().includes('Tail')){
        
        console.log('Processando o arquivo ' + i);
        
        if(i.toString().includes('Head')) countGrupo = 'Melhores';
        if(i.toString().includes('Interm')) countGrupo = 'Intermediarios'
        if(i.toString().includes('Tail')) countGrupo = 'Piores';
                    
        if(i.toString().includes('AI')) countNivel = 'Anos Iniciais';
        if(i.toString().includes('AF')) countNivel = 'Anos Finais'
        if(i.toString().includes('EM')) countNivel = 'Ensino Medio';
                    
        var instalacoes = dataFrame.readFileSync(path.join(folderPath2, 'instalacoes_fisicas_UE.csv'))
            .parseCSV().parseInts('CODESC').toArray()

        var escola = dataFrame.readFileSync(path.join(folderPath1, i)).parseCSV()
            .parseInts('CODIGO_CIE').toArray()
    
        var countEscola = escola.length;
        var countInstalacoes = instalacoes.length
                    
        var instalacoesArray = [];
                    
        for(let k = 0; k < countEscola; k++){
                            
            for(let l = 0; l < countInstalacoes; l++){
                                
                if(escola[k].CODIGO_CIE === instalacoes[l].CODESC){
                                    
                    let info = {
                        CODIGO_CIE: escola[k].CODIGO_CIE,
                        ESCOLA: escola[k].ESCOLA,
                        NIVEL_ENSINO: escola[k].NIVEL_ENSINO,
                        IDESP: escola[k].IDESP,
                        GRUPO: countGrupo,
                        ANO: parseInt(escola[k].ANO),
                        
                        SALA_LEITURA: parseInt(instalacoes[l].SALA_LEITURA),
                        BIBLIOTECA: parseInt(instalacoes[l].BIBLIOTECA),
                        AUDITORIO: parseInt(instalacoes[l].AUDITORIO),
                        ANFITEATRO: parseInt(instalacoes[l].ANFITEATRO),
                        TEATRO: parseInt(instalacoes[l].TEATRO),
                        VIDEOTECA: parseInt(instalacoes[l].VIDEOTECA),
                        SALA_TV: parseInt(instalacoes[l].SALA_TV),
                        LAB_INFO: parseInt(instalacoes[l].LAB_INFO),
                        LAB_CIENCIAS: parseInt(instalacoes[l].LAB_CIENCIAS),
                        LAB_FISICA: parseInt(instalacoes[l].LAB_FISICA),
                        LAB_QUIMICA: parseInt(instalacoes[l].LAB_QUIMICA),
                        LAB_BIOLOGIA: parseInt(instalacoes[l].LAB_BIOLOGIA),
                        LAB_CIENCIA_FISICA_BIOLOGICA: parseInt(instalacoes[l].LAB_CIENCIA_FISICA_BIOLOGICA),
                        LAB_LINGUAS: parseInt(instalacoes[l].LAB_LINGUAS),
                        LAB_MULTIUSO: parseInt(instalacoes[l].LAB_MULTIUSO),
                        BRINQUEDOTECA: parseInt(instalacoes[l].BRINQUEDOTECA),
                        QUADRA_COBERTA: parseInt(instalacoes[l].QUADRA_COBERTA),
                        QUADRA_DESCOBERTA: parseInt(instalacoes[l].QUADRA_DESCOBERTA),
                        GINASIO: parseInt(instalacoes[l].GINASIO),
                        QUADRA_AREIA: parseInt(instalacoes[l].QUADRA_AREIA),
                        QUADRA_GRAMA: parseInt(instalacoes[l].QUADRA_GRAMA),
                        CAMPO_FUTEBOL: parseInt(instalacoes[l].CAMPO_FUTEBOL),
                        OFICINA: parseInt(instalacoes[l].OFICINA),
                        PLAYGROUND: parseInt(instalacoes[l].PLAYGROUND),
                        
                        SECONDARY_KEY: escola[k].SECONDARY_KEY,
                        TERTIARY_KEY: escola[k].TERTIARY_KEY
                        };
                    instalacoesArray.push(info);
                    break;
                }
            }
            continue;
        }
        let fileName = i.substr(0, i.length-4) + '_Instalacoes';
                        
        fs.writeFileSync(path.join(folderPath3, fileName + '.json'), 
            JSON.stringify(instalacoesArray))
    }
}          

*/

/*
const files2 = fs.readdirSync(folderPath3)
var countInstArray_AI = []
var countInstArray_AF = []
var countInstArray_EM = []


// Concatena todos os arquivos por nivel de ensino
for(let f of files2){
 
   
    if(f.toString().includes('AI')) {
        let fileAI = dataFrame.readFileSync(path.join(folderPath3, f)).parseJSON()
        countInstArray_AI.push(fileAI);   
    }
    
    if(f.toString().includes('AF')) {
        let fileAF = dataFrame.readFileSync(path.join(folderPath3, f)).parseJSON()
        countInstArray_AF.push(fileAF);
    }

    if(f.toString().includes('EM')) {
        let fileEM = dataFrame.readFileSync(path.join(folderPath3, f)).parseJSON()
        countInstArray_EM.push(fileEM);
    }
    
}

var fileAI_1 = countInstArray_AI.shift();
fileAI_1.concat(countInstArray_AI).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_AI.json'))

var fileAF_1 = countInstArray_AF.shift();
fileAF_1.concat(countInstArray_AF).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_AF.json'))

var fileEM_1 = countInstArray_EM.shift();
fileEM_1.concat(countInstArray_EM).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_EM.json'))

*/

/*

// Calcula a media de cada tipo de instalacao por 
for(let w of files2){
    
    dataFrame.readFileSync(path.join(folderPath3, w))
        .parseJSON()
        .groupBy(row => row.NIVEL_ENSINO)
        .select(group => ({
        GRUPO: group.first().GRUPO,
        NIVEL_ENSINO: group.first().NIVEL_ENSINO,
        ANO: group.first().ANO,
                        
        SALA_LEITURA: group.deflate(row => row.SALA_LEITURA).average().toFixed(2),
        BIBLIOTECA: group.deflate(row => row.BIBLIOTECA).average().toFixed(2),
        AUDITORIO: group.deflate(row => row.AUDITORIO).average().toFixed(2),
        ANFITEATRO: group.deflate(row => row.ANFITEATRO).average().toFixed(2),
        TEATRO: group.deflate(row => row.TEATRO).average().toFixed(2),
        VIDEOTECA: group.deflate(row => row.VIDEOTECA).average().toFixed(2),
        SALA_TV: group.deflate(row => row.SALA_TV).average().toFixed(2),
        LAB_INFO: group.deflate(row => row.LAB_INFO).average().toFixed(2),
        LAB_CIENCIAS: group.deflate(row => row.LAB_CIENCIAS).average().toFixed(2),
        LAB_FISICA: group.deflate(row => row.LAB_FISICA).average().toFixed(2),
        LAB_QUIMICA: group.deflate(row => row.LAB_QUIMICA).average().toFixed(2),
        LAB_BIOLOGIA: group.deflate(row => row.LAB_BIOLOGIA).average().toFixed(2),
        LAB_CIENCIA_FISICA_BIOLOGICA: group.deflate(row => row.LAB_CIENCIA_FISICA_BIOLOGICA).average().toFixed(2),
        LAB_LINGUAS: group.deflate(row => row.LAB_LINGUAS).average().toFixed(2),
        LAB_MULTIUSO: group.deflate(row => row.LAB_MULTIUSO).average().toFixed(2),
        BRINQUEDOTECA: group.deflate(row => row.BRINQUEDOTECA).average().toFixed(2),
        QUADRA_COBERTA: group.deflate(row => row.QUADRA_COBERTA).average().toFixed(2),
        QUADRA_DESCOBERTA: group.deflate(row => row.QUADRA_DESCOBERTA).average().toFixed(2),
        GINASIO: group.deflate(row => row.GINASIO).average().toFixed(2),
        QUADRA_AREIA: group.deflate(row => row.QUADRA_AREIA).average().toFixed(2),
        QUADRA_GRAMA: group.deflate(row => row.QUADRA_GRAMA).average().toFixed(2),
        CAMPO_FUTEBOL: group.deflate(row => row.CAMPO_FUTEBOL).average().toFixed(2),
        OFICINA: group.deflate(row => row.OFICINA).average().toFixed(2),
        PLAYGROUND: group.deflate(row => row.PLAYGROUND).average().toFixed(2), 
    })).inflate()
    .asJSON().writeFileSync(path.join(folderPath3, '2_'+w))
 

}

 */
 /*
const files2 = fs.readdirSync(folderPath3)
var countInstArray_AI_2017 = []
var countInstArray_AF_2017 = []
var countInstArray_EM_2017 = []

var countInstArray_AI_2018 = []
var countInstArray_AF_2018 = []
var countInstArray_EM_2018 = []

// Concatena os arquivos por nivel de ensino e por ano
for(let x of files2){
    if(x.toString().includes('2_Alt_IDESP_AI_2017')) {
        //console.log(f)
        let fileAI = dataFrame.readFileSync(path.join(folderPath3, x)).parseJSON()
        countInstArray_AI_2017.push(fileAI);   
    }
    
    if(x.toString().includes('2_Alt_IDESP_AF_2017')) {
        let fileAF = dataFrame.readFileSync(path.join(folderPath3, x)).parseJSON()
        countInstArray_AF_2017.push(fileAF);
    }

    if(x.toString().includes('2_Alt_IDESP_EM_2017')) {
        let fileEM = dataFrame.readFileSync(path.join(folderPath3, x)).parseJSON()
        countInstArray_EM_2017.push(fileEM);
    }
    
    if(x.toString().includes('2_Alt_IDESP_AI_2018')) {
        //console.log(f)
        let fileAI = dataFrame.readFileSync(path.join(folderPath3, x)).parseJSON()
        countInstArray_AI_2018.push(fileAI);   
    }
    
    if(x.toString().includes('2_Alt_IDESP_AF_2018')) {
        let fileAF = dataFrame.readFileSync(path.join(folderPath3, x)).parseJSON()
        countInstArray_AF_2018.push(fileAF);
    }

    if(x.toString().includes('2_Alt_IDESP_EM_2018')) {
        let fileEM = dataFrame.readFileSync(path.join(folderPath3, x)).parseJSON()
        countInstArray_EM_2018.push(fileEM);
    }

    
    
}

var fileAI_1 = countInstArray_AI_2017.shift();
fileAI_1.concat(countInstArray_AI_2017).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_AI_2017.json'))

var fileAF_1 = countInstArray_AF_2017.shift();
fileAF_1.concat(countInstArray_AF_2017).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_AF_2017.json'))

var fileEM_1 = countInstArray_EM_2017.shift();
fileEM_1.concat(countInstArray_EM_2017).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_EM_2017.json'))
    
var fileAI_2 = countInstArray_AI_2018.shift();
fileAI_2.concat(countInstArray_AI_2018).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_AI_2018.json'))

var fileAF_2 = countInstArray_AF_2018.shift();
fileAF_2.concat(countInstArray_AF_2018).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_AF_2018.json'))

var fileEM_2 = countInstArray_EM_2018.shift();
fileEM_2.concat(countInstArray_EM_2018).asJSON().writeFileSync(path.join(folderPath3, 'IDESP_Instalacoes_Fisicas_EM_2018.json'))

*/

/*
// Calculo da media da formacao dos PROFESSORES
// Duas formas de calcular

// PRIMEIRA
var licenciatura = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Formacao/base_formacao_Porc.csv')
    .parseCSV().parseFloats(['PORC_LICENCIATURA']).toArray()

var sum = 0;
var mean = 0;

console.log('Iniciando o processamento...')

for(let i of licenciatura){
    sum += i.PORC_LICENCIATURA;    
}

    mean = (sum / licenciatura.length).toFixed(2);

// SEGUNDA    
var mediaLicenc = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Formacao/base_formacao_Porc.csv')
                    .parseCSV().parseFloats(['PORC_LICENCIATURA'])
                    .getSeries('PORC_LICENCIATURA').average().toFixed(2)

    
fs.writeFileSync('../DadosAbertos-SEDUC/page/database/Formacao/base_formacao_Med.csv', JSON.stringify({MED_FORMACAO: mean}))

console.log(`Media 1: ${mean}`)

console.log(`Media 2: ${media}`)

    
console.log('Terminou!!!')
*/

/*
// Calcula a media, o minimo e maximo da idade e do tempo de experiencia docente

const folderPath1 = '../DadosAbertos-SEDUC/page/database/Servidores Ativos';
const folderPath2 = '../DadosAbertos-SEDUC/page/database';

var mediaIdade = dataFrame.readFileSync(path.join(folderPath1, 'Calc_Tot_servidores_ativos_CIE.json'))
                    .parseJSON().getSeries('MED_IDADE').average().toFixed(2)

var minIdade = dataFrame.readFileSync(path.join(folderPath1, 'Calc_Tot_servidores_ativos_CIE.json'))
                    .parseJSON().getSeries('MIN_IDADE').min()

var maxIdade = dataFrame.readFileSync(path.join(folderPath1, 'Calc_Tot_servidores_ativos_CIE.json'))
                    .parseJSON().getSeries('MAX_IDADE').max()

var mediaExp = dataFrame.readFileSync(path.join(folderPath1, 'Calc_Tot_servidores_ativos_CIE.json'))
                    .parseJSON().getSeries('MED_EXPERIENCIA').average().toFixed(2)

var minExp = dataFrame.readFileSync(path.join(folderPath1, 'Calc_Tot_servidores_ativos_CIE.json'))
                    .parseJSON().getSeries('MIN_EXPERIENCIA').min()

var maxExp = dataFrame.readFileSync(path.join(folderPath1, 'Calc_Tot_servidores_ativos_CIE.json'))
                    .parseJSON().getSeries('MAX_EXPERIENCIA').max()

var info = {
            DADO: 'Idade',
            MEDIA: parseFloat(mediaIdade),
            MINIMA: minIdade,
            MAXIMA: maxIdade
            };

var calc =[]

calc.push(info)

var info = {
            DADO: 'Experiencia',
            MEDIA: parseFloat(mediaExp),
            MINIMA: minExp,
            MAXIMA: maxExp
            }


calc.push(info)

fs.writeFileSync(path.join(folderPath1, 'Med_Min_Max_Idade_Experiencia.json'),
                    JSON.stringify(calc))
                    
console.log(`Media da idade: ${mediaIdade} - Minima: ${minIdade} - Maxima: ${maxIdade}`)

console.log(`Media da exp.: ${mediaExp} - Minima: ${minExp} - Maxima: ${maxExp}`)

*/


/*
// Insere as informacoes das disciplinas sem docentes e da carga horaria
// nos arquivos do SARESP

// DISCIPLINAS SEM DOCENTES
const folderPath1 = '../DadosAbertos-SEDUC/page/database/SARESP_LP';
const folderPath2 = '../DadosAbertos-SEDUC/page/database/SARESP_MAT';
const folderPath3 = '../DadosAbertos-SEDUC/database_final/Intermediarios';

const files_LP = fs.readdirSync(folderPath1)
const files_MAT = fs.readdirSync(folderPath2)

const filesAgg = ['../DadosAbertos-SEDUC/page/database/Disciplinas sem Docentes/disciplinas_sem_docentes_final_LP_Tot.csv',
                  '../DadosAbertos-SEDUC/page/database/Disciplinas sem Docentes/disciplinas_sem_docentes_final_MAT_Tot.csv',
                  '../DadosAbertos-SEDUC/page/database/Carga Horaria/Alt_BASE_CARGA_HOR_SALA_AULA_Porc.csv']
                  
const disciplinas_LP = dataFrame.readFileSync(filesAgg[0])
                        .parseCSV().parseInts(['CODIGO_CIE','TOTAL_AULA_SEMANA'])
                        .toArray()

const disciplinas_MAT = dataFrame.readFileSync(filesAgg[1])
                        .parseCSV().parseInts(['CODIGO_CIE','TOTAL_AULA_SEMANA'])
                        .toArray()

const cargaHoraria = dataFrame.readFileSync(filesAgg[2])
                        .parseCSV().parseInts(['CODIGO_CIE'])
                        .parseFloats(['AULAS_LIVRES_LP','AULAS_LIVRES_MAT'])
                        .toArray()

for(let i = 0; i < files_LP.length; i++){

    console.log('Processando o arquivo ' + files_LP[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files_LP[i])).parseCSV()
                    .parseInts(['CODIGO_CIE']).toArray()
    
    var countEscola = escola.length;
    var count_LP = disciplinas_LP.length
    
    var disciplinas_LP_Array = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < count_LP; k++){
            
            if(escola[j].CODIGO_CIE === disciplinas_LP[k].CODIGO_CIE){
         
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    SERIE_ANO: escola[j].SERIE_ANO,
                    DISCIPLINA: disciplinas_LP[k].DISCIPLINA,
                    
                    DESEMPENHO_MED: parseFloat(escola[j].DESEMPENHO_MED),
                    DESEMPENHO_MAX: parseFloat(escola[j].DESEMPENHO_MAX),
                    DESEMPENHO_MIN: parseFloat(escola[j].DESEMPENHO_MIN),
                    
                    ANO: parseInt(escola[j].ANO),
                    
                    AULAS_SEM_DOCENTES: disciplinas_LP[k].TOTAL_AULA_SEMANA,
                    
                };
                    
                disciplinas_LP_Array.push(info);
                break;
            }
        }
        continue;
    }
    let fileName_LP = files_LP[i].substr(0, files_LP[i].length-4)+'.json';
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath3, fileName_LP), JSON.stringify(disciplinas_LP_Array))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}

for(let i = 0; i < files_MAT.length; i++){

    console.log('Processando o arquivo ' + files_MAT[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath2, files_MAT[i])).parseCSV()
                    .parseInts(['CODIGO_CIE']).toArray()
    
    var countEscola = escola.length;
    var count_MAT = disciplinas_MAT.length
    
    var disciplinas_MAT_Array = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < count_MAT; k++){
            
            if(escola[j].CODIGO_CIE === disciplinas_MAT[k].CODIGO_CIE){
         
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    SERIE_ANO: escola[j].SERIE_ANO,
                    DISCIPLINA: disciplinas_MAT[k].DISCIPLINA,
                    
                    DESEMPENHO_MED: parseFloat(escola[j].DESEMPENHO_MED),
                    DESEMPENHO_MAX: parseFloat(escola[j].DESEMPENHO_MAX),
                    DESEMPENHO_MIN: parseFloat(escola[j].DESEMPENHO_MIN),
                    
                    ANO: parseInt(escola[j].ANO),
                    
                    AULAS_SEM_DOCENTES: disciplinas_MAT[k].TOTAL_AULA_SEMANA,
                    
                };
                    
                disciplinas_MAT_Array.push(info);
                break;
            }
        }
        continue;
    }
    let fileName_MAT = files_MAT[i].substr(0, files_MAT[i].length-4)+'.json';
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath3, fileName_MAT), JSON.stringify(disciplinas_MAT_Array))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}

*/

// CARGA HORARIA
const folderPath1 = '../DadosAbertos-SEDUC/database_final/Intermediarios/LP';
const folderPath2 = '../DadosAbertos-SEDUC/database_final/Intermediarios/MAT';
const folderPath3 = '../DadosAbertos-SEDUC/database_final/Intermediarios';

const files_LP = fs.readdirSync(folderPath1)
const files_MAT = fs.readdirSync(folderPath2)

const filesAgg = ['../DadosAbertos-SEDUC/page/database/Disciplinas sem Docentes/disciplinas_sem_docentes_final_LP_Tot.csv',
                  '../DadosAbertos-SEDUC/page/database/Disciplinas sem Docentes/disciplinas_sem_docentes_final_MAT_Tot.csv',
                  '../DadosAbertos-SEDUC/page/database/Carga Horaria/Alt_BASE_CARGA_HOR_SALA_AULA_Porc.csv']
                  

const cargaHoraria = dataFrame.readFileSync(filesAgg[2])
                        .parseCSV().parseInts(['CODIGO_CIE'])
                        .parseFloats(['AULAS_LIVRES_LP','AULAS_LIVRES_MAT'])
                        .toArray()

for(let i = 0; i < files_LP.length; i++){

    console.log('Processando o arquivo ' + files_LP[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath1, files_LP[i])).parseJSON()
                    .toArray()
    
    var countEscola = escola.length;
    var count_Carga_Horaria = cargaHoraria.length
    
    var disciplinas_LP_Array = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < count_Carga_Horaria; k++){
            
            if(escola[j].CODIGO_CIE === cargaHoraria[k].CODIGO_CIE){
         
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    SERIE_ANO: escola[j].SERIE_ANO,
                    DISCIPLINA: escola[j].DISCIPLINA,
                    
                    DESEMPENHO_MED: parseFloat(escola[j].DESEMPENHO_MED),
                    DESEMPENHO_MAX: parseFloat(escola[j].DESEMPENHO_MAX),
                    DESEMPENHO_MIN: parseFloat(escola[j].DESEMPENHO_MIN),
                    
                    ANO: parseInt(escola[j].ANO),
                    
                    AULAS_SEM_DOCENTES_LP: parseFloat(escola[j].AULAS_LIVRES),// AULAS_SEM_DOCENTES
                    
                    AULAS_LIVRES_LP: parseFloat(cargaHoraria[k].AULAS_LIVRES_LP),
                    
                    SECONDARY_KEY: cargaHoraria[k].SECONDARY_KEY,
                    TERTIARY_KEY: cargaHoraria[k].TERTIARY_KEY
                
                    
                };
                    
                disciplinas_LP_Array.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName_LP = files_LP[i].substr(0, files_LP[i].length-4)+'.json';
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath3, files_LP[i]), JSON.stringify(disciplinas_LP_Array))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}

for(let i = 0; i < files_MAT.length; i++){

    console.log('Processando o arquivo ' + files_MAT[i]);
    
    var escola = dataFrame.readFileSync(path.join(folderPath2, files_MAT[i])).parseJSON()
                    .toArray()
    
    var countEscola = escola.length;
    var count_Carga_Horaria = cargaHoraria.length
    
    var disciplinas_MAT_Array = [];
    
    for(let j = 0; j < countEscola; j++){
        
        for(let k = 0; k < count_Carga_Horaria; k++){
            
            if(escola[j].CODIGO_CIE === cargaHoraria[k].CODIGO_CIE){
         
                let info = {
                    CODIGO_CIE: escola[j].CODIGO_CIE,
                    ESCOLA: escola[j].ESCOLA,
                    SERIE_ANO: escola[j].SERIE_ANO,
                    DISCIPLINA: escola[j].DISCIPLINA,
                    
                    DESEMPENHO_MED: parseFloat(escola[j].DESEMPENHO_MED),
                    DESEMPENHO_MAX: parseFloat(escola[j].DESEMPENHO_MAX),
                    DESEMPENHO_MIN: parseFloat(escola[j].DESEMPENHO_MIN),
                    
                    ANO: parseInt(escola[j].ANO),
                    
                    AULAS_SEM_DOCENTES_MAT: parseFloat(escola[j].AULAS_LIVRES),// AULAS_SEM_DOCENTES
                    
                    AULAS_LIVRES_MAT: parseFloat(cargaHoraria[k].AULAS_LIVRES_MAT),
                    
                    SECONDARY_KEY: cargaHoraria[k].SECONDARY_KEY,
                    TERTIARY_KEY: cargaHoraria[k].TERTIARY_KEY
                };
                    
                disciplinas_MAT_Array.push(info);
                break;
            }
        }
        continue;
    }
    //let fileName_MAT = files_MAT[i].substr(0, files_MAT[i].length-4)+'.json';
    //fs.writeFileSync(path.join(folderPath1, fileName + '.json'), JSON.stringify(disciplinasArray))
    
    fs.writeFileSync(path.join(folderPath3, files_MAT[i]), JSON.stringify(disciplinas_MAT_Array))
    

    
    console.log('Terminou!!!');
    console.log('**************************************');

}
