const dataFrame = require('data-forge');
require('data-forge-fs');

const fs = require('fs');
const path = require('path');

/*
const diretor_ausencias_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_AUSENCIAS_0419.csv').parseCSV()

const diretor_ausencias_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_AUSENCIAS_1119.csv').parseCSV()

const diretor_servidores_ativos_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419.csv').parseCSV()

const diretor_servidores_ativos_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119.csv').parseCSV()


const diretor_formacao_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419a.csv').parseCSV()

const diretor_formacao_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119a.csv').parseCSV()
*/

/*
// Seleciona as informacoes dos diretores de escola
console.log('Iniciando o processamento...');

diretor_ausencias_1.where(row => row.NOME_CARGO_EXERC.toString().includes('DIRETOR DE ESCOLA'))
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_AUSENCIAS_0419.csv')

diretor_ausencias_2.where(row => row.NOME_CARGO_EXERC.toString().includes('DIRETOR DE ESCOLA'))
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_AUSENCIAS_1119.csv')

console.log('Continuando...');

diretor_servidores_ativos_1.where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_SERVIDORES_ATIVOS_0419.csv')

diretor_servidores_ativos_2.where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_SERVIDORES_ATIVOS_1119.csv')

console.log('Continuando...');

diretor_formacao_1.where(row => row.NMCARGO_E.toString().includes('DIRETOR DE ESCOLA'))
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_FORMACAO_0419.csv')

diretor_formacao_2.where(row => row.NMCARGO_E.toString().includes('DIRETOR DE ESCOLA'))
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_FORMACAO_1119.csv')

console.log('Terminou!!!');
*/

/*

const diretor_ausencias_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_AUSENCIAS_0419.csv').parseCSV()

const diretor_ausencias_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_AUSENCIAS_1119.csv').parseCSV()

const diretor_servidores_ativos_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_SERVIDORES_ATIVOS_0419.csv').parseCSV()

const diretor_servidores_ativos_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_SERVIDORES_ATIVOS_1119.csv').parseCSV()

const diretor_formacao_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_FORMACAO_0419.csv').parseCSV()

const diretor_formacao_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/BASE_FORMACAO_1119.csv').parseCSV()
*/

/*
// Calculo das medias, dos minimos e dos maximos dos diretores
console.log('Iniciando o processamento - Idade...');

var media_idade = diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
                    .parseInts(['IDADE'])
                    .where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
                    .getSeries('IDADE').average().toFixed(2);
                    
var min_idade = diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
                    .parseInts(['IDADE'])
                    .where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
                    .getSeries('IDADE').min();
                    
var max_idade = diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
                    .parseInts(['IDADE'])
                    .where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
                    .getSeries('IDADE').max();

console.log('Iniciando o processamento - Experiencia...');

var media_experiencia = diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
                    .parseInts(['ANOS_TRAB_CARGO_C'])
                    .where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
                    .getSeries('ANOS_TRAB_CARGO_C').average().toFixed(2);
                    
var min_experiencia = diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
                    .parseInts(['ANOS_TRAB_CARGO_C'])
                    .where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
                    .getSeries('ANOS_TRAB_CARGO_C').min();
                    
var max_experiencia = diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
                    .parseInts(['IDADE'])
                    .where(row => row.NOMECAR_E.toString().includes('DIRETOR DE ESCOLA'))
                    .getSeries('ANOS_TRAB_CARGO_C').max();

var diretorArray = [];

var info = {
            DADO: 'Idade',
            MED_IDADE_DIR: parseFloat(media_idade),
            MIN_IDADE_DIR: min_idade,
            MAX_IDADE_DIR: max_idade
            }

diretorArray.push(info);        

info = {
            DADO: 'Experiencia',
            MED_EXP_DIR: parseFloat(media_experiencia),
            MIN_EXP_DIR: min_experiencia,
            MAX_EXP_DIR: max_experiencia
            }

diretorArray.push(info);        

fs.writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/Med_Min_Max_Idade_Exp_Diretor.json',
                    JSON.stringify(diretorArray));

console.log('Terminou!!!');
*/

/*
diretor_ausencias_1
    .subset(['CIE_ESCOLA','UA_EXERC','NOME_UA_EXERC','NOME_CARGO_EXERC',
                'CATEG_E','TOT_DIAS_AUSENCIAS','TOTAL_DIAS_MES'])
    .parseInts(['CIE_ESCOLA','TOT_DIAS_AUSENCIAS','TOTAL_DIAS_MES'])
    .groupBy(row => row.CIE_ESCOLA).select(group => ({
        CODIGO_CIE: group.first().CIE_ESCOLA,
        CODIGO_UA: group.first().UA_EXERC,
        ESCOLA: group.first().NOME_UA_EXERC,
        CARGO: group.first().NOME_CARGO_EXERC,
        AUSENCIAS: (group.deflate(row => row.TOT_DIAS_AUSENCIAS).average()/group.deflate(row => row.TOTAL_DIAS_MES).average()*100).toFixed(2),
    })).orderBy(row => row.CODIGO_CIE).inflate()
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_1.csv')


diretor_ausencias_2
    .subset(['CIE_ESCOLA','UA_EXERC','NOME_UA_EXERC','NOME_CARGO_EXERC',
                'CATEG_E','TOT_DIAS_AUSENCIAS','TOTAL_DIAS_MES'])
    .parseInts(['CIE_ESCOLA','TOT_DIAS_AUSENCIAS','TOTAL_DIAS_MES'])
    .groupBy(row => row.CIE_ESCOLA).select(group => ({
        CODIGO_CIE: group.first().CIE_ESCOLA,
        CODIGO_UA: group.first().UA_EXERC,
        ESCOLA: group.first().NOME_UA_EXERC,
        CARGO: group.first().NOME_CARGO_EXERC,
        AUSENCIAS: (group.deflate(row => row.TOT_DIAS_AUSENCIAS).average()/group.deflate(row => row.TOTAL_DIAS_MES).average()*100).toFixed(2),
    })).orderBy(row => row.CODIGO_CIE).inflate()
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_2.csv')



   
diretor_servidores_ativos_1
    .subset(['UA_E','NOMEUA_E','IDADE','ANOS_TRAB_CARGO_C',
                'NOMECAR_E'])
        .parseInts(['UA_E','IDADE','ANOS_TRAB_CARGO_C'])
        .groupBy(row => row.UA_E).select(group => ({
            CODIGO_UA: group.first().UA_E,
            ESCOLA: group.first().NOMEUA_E,
            CARGO: group.first().NOMECAR_E,
            IDADE: group.deflate(row => row.IDADE).average().toFixed(2),
            EXPERIENCIA: group.deflate(row => row.ANOS_TRAB_CARGO_C).average().toFixed(2)
        })).orderBy(row => row.CODIGO_CIE).inflate()
        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_1.csv')

diretor_servidores_ativos_2
    .subset(['UA_E','NOMEUA_E','IDADE','ANOS_TRAB_CARGO_C',
                'NOMECAR_E'])
        .parseInts(['UA_E','IDADE','ANOS_TRAB_CARGO_C'])
        .groupBy(row => row.UA_E).select(group => ({
            CODIGO_UA: group.first().UA_E,
            ESCOLA: group.first().NOMEUA_E,
            CARGO: group.first().NOMECAR_E,
            IDADE: group.deflate(row => row.IDADE).average().toFixed(2),
            EXPERIENCIA: group.deflate(row => row.ANOS_TRAB_CARGO_C).average().toFixed(2)
        })).orderBy(row => row.CODIGO_UA).inflate()
        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_2.csv')
*/

/*
const diretor_ausencias_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_1.csv').parseCSV()

const diretor_ausencias_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_2.csv').parseCSV()

const diretor_servidores_ativos_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_1.csv').parseCSV()

const diretor_servidores_ativos_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_2.csv').parseCSV()

diretor_ausencias_1.concat(diretor_ausencias_2)
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_3.csv')

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_3.csv')  
    .parseCSV().parseInts(['CODIGO_CIE','CODIGO_UA','AUSENCIAS'])
    .groupBy(row => row.CODIGO_CIE)
    .select(group => ({
        CODIGO_CIE: group.first().CODIGO_CIE,
        CODIGO_UA: group.first().CODIGO_UA,
        ESCOLA: group.first().ESCOLA,
        CARGO: group.first().CARGO,
        AUSENCIAS: group.deflate(row => row.AUSENCIAS).average().toFixed(2)
    })).orderBy(row => row.CODIGO_UA).inflate()
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_3.csv')

diretor_servidores_ativos_1.concat(diretor_servidores_ativos_2)
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_3.csv')

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_3.csv')  
    .parseCSV().parseInts(['CODIGO_UA','IDADE', 'EXPERIENCIA'])
    .groupBy(row => row.CODIGO_UA)
    .select(group => ({
        CODIGO_UA: group.first().CODIGO_UA,
        ESCOLA: group.first().ESCOLA,
        CARGO: group.first().CARGO,
        IDADE: group.deflate(row => row.IDADE).average().toFixed(2),
        EXPERIENCIA: group.deflate(row => row.EXPERIENCIA).average().toFixed(2)
    })).orderBy(row => row.CODIGO_UA).inflate()
    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_3.csv')
*/

/*
const diretor_ausencias = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_ausencias_3.csv').parseCSV()
                            .parseInts(['CODIGO_CIE','CODIGO_UA']).toArray()

const diretor_servidores_ativos = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/Intermediarios/diretor_servidores_ativos_3.csv').parseCSV()
                                    .parseInts(['CODIGO_UA']).toArray()

const files = fs.readdirSync('../DadosAbertos-SEDUC/page/database/Intermediarios/IDESP')

for(let i of files){
    
        console.log('Processando o arquivo ' + i);
        
        var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/Intermediarios/IDESP', i))
                        .parseJSON().toArray()
        
        var countEscola = escola.length;
        var countAusencias = diretor_ausencias.length
        
        var ausencias = [];
        
        for(let j = 0; j < countEscola; j++){
            
            for(let k = 0; k < countAusencias; k++){
                
                if(escola[j].CODIGO_CIE === diretor_ausencias[k].CODIGO_CIE){
                    
                    let info = {
                        CODIGO_CIE: escola[j].CODIGO_CIE,
                        CODIGO_UA: diretor_ausencias[k].CODIGO_UA,
                        ESCOLA: diretor_ausencias[k].ESCOLA,
                        NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                        IDESP: escola[j].IDESP,
                        AUSENCIAS: diretor_ausencias[k].AUSENCIAS,
                        };
                        
                    ausencias.push(info);
                    break;
                }
            }
            continue;
        }

        
        fs.writeFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios', i), JSON.stringify(ausencias))
}        

for(let i of files){
    
        console.log('Processando o arquivo ' + i);
        
        var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios', i))
                        .parseJSON().toArray()
        
        var countEscola = escola.length;
        var countServidores = diretor_servidores_ativos.length
        
        var servidores = [];
        
        for(let j = 0; j < countEscola; j++){
            
            for(let k = 0; k < countServidores; k++){
                
                if(escola[j].CODIGO_UA === diretor_servidores_ativos[k].CODIGO_UA){
                    
                    let info = {
                        CODIGO_CIE: escola[j].CODIGO_CIE,
                        CODIGO_UA: diretor_servidores_ativos[k].CODIGO_UA,
                        ESCOLA: escola[j].ESCOLA,
                        NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                        IDESP: escola[j].IDESP,
                        AUSENCIAS: parseFloat(escola[j].AUSENCIAS),
                        IDADE: parseFloat(diretor_servidores_ativos[k].IDADE),
                        EXPERIENCIA: parseFloat(diretor_servidores_ativos[k].EXPERIENCIA)
                    };
                        
                    servidores.push(info);
                    break;
                }
            }
            continue;
        }

        
        fs.writeFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios', 'Final_'+i), JSON.stringify(servidores))
}

*/

/*
const files = fs.readdirSync('../DadosAbertos-SEDUC/page/database/gestores/intermediarios')

var formacaoArray = []

for(let i of files){
    
    var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios',i))
                    .parseCSV().parseInts(['CIE_ESCOLA', 'UA_EXERC']).toArray()
    
    for(let j = 0; j < escola.length; j++){                
    
        var formacao = '';
        var countFormacao = 0;
        
        if(escola[j].FORMACAO.toString().includes('ENSINO MÉDIO')){
                
                formacao = 'ENSINO MÉDIO';
                countFormacao++;
            }   
        
        if(escola[j].FORMACAO.toString().includes('LICENCIATURA') || 
            escola[j].FORMACAO.toString().includes('BACHARELADO') ||
            escola[j].FORMACAO.toString().includes('TECNÓLOGO')){
                
                formacao = 'GRADUAÇÃO';
                countFormacao++;
            }
             
        if(escola[j].FORMACAO.toString().includes('ESPECIALIZAÇÃO')){
                
                formacao = 'ESPECIALIZAÇÃO';
                countFormacao++;
            }   
            
        if(escola[j].FORMACAO.toString().includes('MESTRADO')){
                
                formacao = 'MESTRADO';
                countFormacao++;
            }   
            
        if(escola[j].FORMACAO.toString().includes('DOUTORADO')){
                
                formacao = 'DOUTORADO';
                countFormacao++;
            }   
        
        var info = {
                     CODIGO_CIE: escola[j].CIE_ESCOLA,
                     CODIGO_UA: escola[j].UA_EXERC,
                     ESCOLA: escola[j].NOME_UA_EXERC,
                     NIVEL_FORMACAO: formacao,
                     NUM_FORMACAO: countFormacao
                    }
        
        formacaoArray.push(info)
    }
}

fs.writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/diretores_formacao.json',
        JSON.stringify(formacaoArray))
        
*/

/*
dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/diretores_formacao.json')
    .parseJSON().groupBy(row => row.CODIGO_CIE).select(group => ({
        CODIGO_CIE: group.first().CODIGO_CIE,
        ESCOLA: group.first().ESCOLA,
        NUM_FORMACAO: group.deflate(row => row.NUM_FORMACAO).average().toFixed(2)
    })).orderBy(row => row.CODIGO_CIE).inflate()
    .asJSON().writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/diretores_formacao_2.json')

*/

/*
const files = fs.readdirSync('../DadosAbertos-SEDUC/page/database/gestores')
const diretores_formacao = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/diretores_formacao_2.json')
                                .parseJSON().parseFloats(['NUM_FORMACAO']).toArray()
for(let i of files){
    
    if(i.toString().includes('Final')){
        
        console.log('Processando o arquivo ' + i);
        var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores', i))
                        .parseJSON().toArray()
        
        var countEscola = escola.length;
        var countDiretor = diretores_formacao.length
        
        var diretor = [];
        
        for(let j = 0; j < countEscola; j++){
            
            for(let k = 0; k < countDiretor; k++){
                
                if(escola[j].CODIGO_CIE === diretores_formacao[k].CODIGO_CIE){
                    
                    let info = {
                        CODIGO_CIE: escola[j].CODIGO_CIE,
                        CODIGO_UA: escola[j].CODIGO_UA,
                        ESCOLA: escola[j].ESCOLA,
                        NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                        IDESP: escola[j].IDESP,
                        AUSENCIAS: escola[j].AUSENCIAS,
                        IDADE: escola[j].IDADE,
                        EXPERIENCIA: escola[j].EXPERIENCIA,
                        NUM_FORMACAO: diretores_formacao[k].NUM_FORMACAO
                    
                    };
                        
                    diretor.push(info);
                    break;
                }
            }
            continue;
        }

        
        fs.writeFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios', 'Diretor_'+i), JSON.stringify(diretor))

    }
    
}

*/
/*
const files = fs.readdirSync('../DadosAbertos-SEDUC/page/database/IDESP')
const diretores_formacao = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/gestores/diretores_formacao.json')
                                .parseJSON().toArray()
for(let i of files){
    
    if(i.toString().includes('Melhores') || 
        i.toString().includes('Intermediarios') ||
        i.toString().includes('Piores')){
        
        console.log('Processando o arquivo ' + i);
        var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/IDESP', i))
                        .parseCSV().parseInts('CODIGO_CIE').toArray()
        
        var countEscola = escola.length;
        var countDiretor = diretores_formacao.length
        
        var diretor = [];
        
        for(let j = 0; j < countEscola; j++){
            
            for(let k = 0; k < countDiretor; k++){
                
                if(escola[j].CODIGO_CIE === diretores_formacao[k].CODIGO_CIE){
                    
                    let info = {
                        CODIGO_CIE: escola[j].CODIGO_CIE,
                        ESCOLA: escola[j].ESCOLA,
                        NIVEL_ENSINO: escola[j].NIVEL_ENSINO,
                        IDESP: escola[j].IDESP,
                        NIVEL_FORMACAO: diretores_formacao[k].NIVEL_FORMACAO,
                        NUM_FORMACAO: diretores_formacao[k].NUM_FORMACAO
                    };
                        
                    diretor.push(info);
                    break;
                }
            }
            continue;
        }
        let fileName = 'Formacao_' + i.substr(0, i.length-4) + '.json'
        
        fs.writeFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios', fileName), JSON.stringify(diretor))

    }
    
}

*/
/*
const files = fs.readdirSync('../DadosAbertos-SEDUC/page/database/gestores/intermediarios')

var formacaoArray = []

for(let i of files){
    
    if(i.toString().includes('Melhores') || 
        i.toString().includes('Intermediarios') ||
        i.toString().includes('Piores')){
        
        console.log('Processando o arquivo ' + i);
        var escola = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/gestores/intermediarios', i))
                        .parseJSON().toArray()
        
        var countEscola = escola.length;
        
        var countEnsinoMedio = 0;
        var countGraduacao = 0;
        var countEspecializacao = 0;
        var countMestrado = 0;
        var countDoutorado = 0;
        var nivelEnsino = '';
        var ano = 0;
        var grupo = '';
        
        if(i.toString().includes('Melhores')) grupo = 'Melhores';
        
        if(i.toString().includes('Intermediarios')) grupo = 'Intermediarios';
        
        if(i.toString().includes('Piores')) grupo = 'Piores';
        
        if(i.toString().includes('_AI_')) nivelEnsino = 'Anos Iniciais';
        
        if(i.toString().includes('_AF_')) nivelEnsino = 'Anos Finais';
        
        if(i.toString().includes('_EM_')) nivelEnsino = 'Ensino Medio';
        
        if(i.toString().includes('2017')) ano = 2017;
        
        if(i.toString().includes('2018')) ano = 2018;
        
        
        for(let j = 0; j < escola.length; j++){
            
            if(escola[j].NIVEL_FORMACAO.toString().includes('ENSINO MÉDIO')){
                countEnsinoMedio++;
            }
            
            if(escola[j].NIVEL_FORMACAO.toString().includes('GRADUAÇÃO')){
                countGraduacao++;
            }
            
            if(escola[j].NIVEL_FORMACAO.toString().includes('ESPECIALIZAÇÃO')){
                countEspecializacao++;
            }
            
            if(escola[j].NIVEL_FORMACAO.toString().includes('MESTRADO')){
                countMestrado++;
            }
            
            if(escola[j].NIVEL_FORMACAO.toString().includes('DOUTORADO')){
                countDoutorado++;
            }
        }
        
        var info = {
               NIVEL_ENSINO: nivelEnsino,
               ANO: ano,
               GRUPO: grupo,
               ENSINO_MEDIO: countEnsinoMedio,
               GRADUACAO: countGraduacao,
               ESPECIALIZACAO: countEspecializacao,
               MESTRADO: countMestrado,
               DOUTORADO: countDoutorado
        }
        
        formacaoArray.push(info)
    }
}
        fs.writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/intermediarios/formacao_diretores_IDESP.json', 
        JSON.stringify(formacaoArray))

*/
/*
dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419.csv').parseCSV()
                                        .where(row => row.NOMECAR_E.toString().includes('DIRETOR'))
                                        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_2.csv')

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119.csv').parseCSV()
                                        .where(row => row.NOMECAR_E.toString().includes('DIRETOR'))
                                        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_2.csv')



dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_2.csv').parseCSV()
                    .where(row => row.SEXO.toString().includes('M'))
                    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_3_1.csv')



dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_2.csv').parseCSV()
                    .where(row => row.SEXO.toString().includes('F'))
                    .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_3_2.csv')



dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_2.csv').parseCSV()
.where(row => row.SEXO.toString().includes('M'))
.asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_3_1.csv')

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_2.csv').parseCSV()
.where(row => row.SEXO.toString().includes('F'))
.asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_3_2.csv')

*/

/*

var sexoMasc_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_3_1.csv')
                    .parseCSV().count()

var sexoFem_1 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_0419_3_2.csv')
                    .parseCSV().count()
                    
var sexoMasc_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_3_1.csv')
                    .parseCSV().count()
                    
var sexoFem_2 = dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_SERVIDORES_ATIVOS_1119_3_2.csv')
                    .parseCSV().count()

var mediaMasc = parseInt((sexoMasc_1 + sexoMasc_2) / 2)

var mediaFem = parseInt((sexoFem_1 + sexoFem_2) / 2)

var sum = mediaMasc + mediaFem

var porcMasc = (mediaMasc / sum * 100).toFixed(2)
var porcFem = (mediaFem / sum * 100).toFixed(2)

fs.writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/gestores_sexo.json', 
JSON.stringify([{ TOTAL: sum, MASCULINO: mediaMasc, FEMININO: mediaFem, PORC_MASC: porcMasc, PORC_FEM: porcFem}]))
*/
/*

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419a.csv').parseCSV()
                                        .where(row => row.NMCARGO_E.toString().includes('DIRETOR'))
                                        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419_2.csv')

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119a.csv').parseCSV()
                                        .where(row => row.NMCARGO_E.toString().includes('DIRETOR'))
                                        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119_2.csv')

var files = ['../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419_2.csv',
'../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119_2.csv']

var formacao = []

for(let i of files){
            
        var escola = dataFrame.readFileSync(i).parseCSV()
                    .toArray()
        
        var countEnsinoMedio = 0;
        var countGraduacao = 0;
        var countEspecializacao = 0;
        var countMestrado = 0;
        var countDoutorado = 0;

        for(let j = 0; j < escola.length; j++){
            
            if(escola[j].FORMACAO.toString().includes('ENSINO MÉDIO')){
                countEnsinoMedio++;
            }
            
            if(escola[j].FORMACAO.toString().includes('LICENCIATURA') ||
                escola[j].FORMACAO.toString().includes('BACHARELADO') ||
                escola[j].FORMACAO.toString().includes('TECNÓLOGO')){
                countGraduacao++;
            }
            
            if(escola[j].FORMACAO.toString().includes('ESPECIALIZAÇÃO')){
                countEspecializacao++;
            }
            
            if(escola[j].FORMACAO.toString().includes('MESTRADO')){
                countMestrado++;
            }
            
            if(escola[j].FORMACAO.toString().includes('DOUTORADO')){
                countDoutorado++;
            }
        }
        console.log(countGraduacao)
        var info = { 
                    ENSINO_MEDIO: parseInt(countEnsinoMedio),
                    GRADUACAO: parseInt(countGraduacao),
                    ESPECIALIZACAO: parseInt(countEspecializacao),
                    MESTRADO: parseInt(countMestrado), 
                    DOUTORADO: parseInt(countDoutorado)
                }
                formacao.push(info)
}

var mediaEM = ((formacao[0].ENSINO_MEDIO + formacao[1].ENSINO_MEDIO)/2).toFixed(2)
var mediaGrad = ((formacao[0].GRADUACAO + formacao[1].GRADUACAO)/2).toFixed(2)
var mediaEsp = ((formacao[0].ESPECIALIZACAO + formacao[1].ESPECIALIZACAO)/2).toFixed(2)
var mediaMest = ((formacao[0].MESTRADO + formacao[1].MESTRADO)/2).toFixed(2)
var mediaDout = ((formacao[0].DOUTORADO + formacao[1].DOUTORADO)/2).toFixed(2)


var porcEM = (mediaEM/6479*100).toFixed(2)
var porcGrad = (mediaGrad/6479*100).toFixed(2)
var porcEsp = (mediaEsp/6479*100).toFixed(2)
var porcMest = (mediaMest/6479*100).toFixed(2)
var porcDout = (mediaDout/6479*100).toFixed(2)



fs.writeFileSync('../DadosAbertos-SEDUC/page/database/gestores/gestores_formacao_total.json', 
JSON.stringify([{   ENSINO_MEDIO: mediaEM, 
                    GRADUACAO: mediaGrad, 
                    ESPECIALIZACAO: mediaEsp, 
                    MESTRADO: mediaMest, 
                    DOUTORADO: mediaDout,
                    PORC_EM: porcEM,
                    PORC_GRAD: porcGrad,
                    PORC_ESP: porcEsp,
                    PORC_MEST: porcMest,
                    PORC_DOUT: porcDout
}]))

*/

/*
dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419a.csv').parseCSV()
                                        .where(row => row.NMCARGO_E.toString().includes('PROFESSOR'))
                                        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419_2.csv')

dataFrame.readFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119a.csv').parseCSV()
                                        .where(row => row.NMCARGO_E.toString().includes('PROFESSOR'))
                                        .asCSV().writeFileSync('../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119_2.csv')

var files = ['../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_0419_2.csv',
'../DadosAbertos-SEDUC/page/database/BASE_FORMACAO_1119_2.csv']

var formacao = []

for(let i of files){
            
        var escola = dataFrame.readFileSync(i).parseCSV()
                    .toArray()
        
        var countEnsinoMedio = 0;
        var countGraduacao = 0;
        var countEspecializacao = 0;
        var countMestrado = 0;
        var countDoutorado = 0;

        for(let j = 0; j < escola.length; j++){
            
            if(escola[j].FORMACAO.toString().includes('ENSINO MÉDIO')){
                countEnsinoMedio++;
            }
            
            if(escola[j].FORMACAO.toString().includes('LICENCIATURA') ||
                escola[j].FORMACAO.toString().includes('BACHARELADO') ||
                escola[j].FORMACAO.toString().includes('TECNÓLOGO')){
                countGraduacao++;
            }
            
            if(escola[j].FORMACAO.toString().includes('ESPECIALIZAÇÃO')){
                countEspecializacao++;
            }
            
            if(escola[j].FORMACAO.toString().includes('MESTRADO')){
                countMestrado++;
            }
            
            if(escola[j].FORMACAO.toString().includes('DOUTORADO')){
                countDoutorado++;
            }
        }
        console.log(countGraduacao)
        var info = { 
                    ENSINO_MEDIO: parseInt(countEnsinoMedio),
                    GRADUACAO: parseInt(countGraduacao),
                    ESPECIALIZACAO: parseInt(countEspecializacao),
                    MESTRADO: parseInt(countMestrado), 
                    DOUTORADO: parseInt(countDoutorado)
                }
                formacao.push(info)
}

var mediaEM = ((formacao[0].ENSINO_MEDIO + formacao[1].ENSINO_MEDIO)/2).toFixed(2)
var mediaGrad = ((formacao[0].GRADUACAO + formacao[1].GRADUACAO)/2).toFixed(2)
var mediaEsp = ((formacao[0].ESPECIALIZACAO + formacao[1].ESPECIALIZACAO)/2).toFixed(2)
var mediaMest = ((formacao[0].MESTRADO + formacao[1].MESTRADO)/2).toFixed(2)
var mediaDout = ((formacao[0].DOUTORADO + formacao[1].DOUTORADO)/2).toFixed(2)


var porcEM = (mediaEM/187907*100).toFixed(2)
var porcGrad = (mediaGrad/187907*100).toFixed(2)
var porcEsp = (mediaEsp/187907*100).toFixed(2)
var porcMest = (mediaMest/187907*100).toFixed(2)
var porcDout = (mediaDout/187907*100).toFixed(2)



fs.writeFileSync('../DadosAbertos-SEDUC/page/database/professores/professores_formacao_total.json', 
JSON.stringify([{   ENSINO_MEDIO: mediaEM, 
                    GRADUACAO: mediaGrad, 
                    ESPECIALIZACAO: mediaEsp, 
                    MESTRADO: mediaMest, 
                    DOUTORADO: mediaDout,
                    PORC_EM: porcEM,
                    PORC_GRAD: porcGrad,
                    PORC_ESP: porcEsp,
                    PORC_MEST: porcMest,
                    PORC_DOUT: porcDout
}]))
*/

const files = ['IDESP_AI_2018.json','IDESP_AI_2017.json',
'IDESP_AF_2018.json','IDESP_AF_2017.json',
'IDESP_EM_2018.json','IDESP_EM_2017.json']

var quantEscolas = []

for(let i of files){
    
    console.log(i)
    var escolas = dataFrame.readFileSync(path.join('../DadosAbertos-SEDUC/page/database/IDESP', i))
                    .parseJSON().count()
                    console.log('Escolas: '+escolas)
        
        var info = {
                    ESCOLAS: i.substr(0, i.length-4),
                    NUM_ESCOLAS: escolas
        }
        
        quantEscolas.push(info)
    
}
fs.writeFileSync('../DadosAbertos-SEDUC/page/database/IDESP/quantidade_escolas_IDESP.json',
                JSON.stringify(quantEscolas))
                
                