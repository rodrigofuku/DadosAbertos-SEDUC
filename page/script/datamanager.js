const dataFrame = require('data-forge');
require('data-forge-fs');

const fs = require('fs');
const path = require('path');
const folderPath = '../DadosAbertos-SEDUC/database/';

// Organiza o conjunto de pastas de database.
const folders = fs.readdirSync(folderPath);

// Variável para armazenar os caminhos dos arquivos    
var foldersPath = [];

// Cria o índice das chaves

const keysIndex = (folderPath, folders) => {
    
    var primKey = [];
    var tertKey = [];
    var pkey = 'PRIMARY_KEY';
   //var fonte = dataFrame.readFileSync('../DadosAbertos-SEDUC/database/ausencias_por_servidor/BASE_AUSENCIAS_0419.csv').parseCSV()
     //   .subset([primKey,tertKey]).asCSV().writeFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.csv');
        //inflate().asCSV().writeFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.csv');
         var selected = []; 
                 primKey = dataFrame.readFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.csv').parseCSV()
                                .getSeries('PRIMARY_KEY').distinct();
                
                primKey.forEach(value => {
                    tertKey = dataFrame.readFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.csv').parseCSV()
                                .where(row => {
                                    console.log(row.pkey);
                                    return row.pkey === value;
                                
                })
})
                 
                                
     /*       dataFrame.readFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_3.csv').parseCSV()
            .withSeries('PRIMARY_KEY', primKey).withSeries('TERTYARY_KEY', tertKey)
            .asCSV().writeFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_3.csv'); */
        console.log(primKey.toArray());
        console.log(tertKey.toArray());
/*    
        .getSeries('PRIMARY_KEY').forEach(priKey => {
            var tKey = 
                        .where(group => {
                            if(group.first() === priKey){
                                console.log(row.tertKey);
                                return row.tertKey;
                            }
                        })
                    })
        console.log(tKey);
        */
}    
    
    //foldersPath.push(path.join(folderPath, 'enderecos_de_escolas/11_Escolas_Coordenadas.csv'));
/*    foldersPath.push(path.join(folderPath, 'enderecos_de_escolas/escolas_enderecos_0.csv'));

    var fileNames = [];
    var keysFiles = [];
    var keys = {};
    
        for(let i of folders){
            if(!i.includes('keys')){
                
                var files = fs.readdirSync(path.join(folderPath, i));
            
                for (let j of files){
                    if(!j.includes('DIC')){
                        fileNames.push(j);
                        foldersPath.push(path.join(folderPath,i,j));
                    }
                }
            }
            
        }
        
*/        
 /*       
        
        foldersPath.map(pathFile => {
            fileNames.map(fileName => {
                if(pathFile.includes(fileName)){
                    
                    let columns = dataFrame.readFileSync(pathFile).parseCSV()
                        .getColumnNames();
                        
                        let primaryKey = 0, secondaryKey = 0, tertiaryKey = 0;
                        
                        columns.map(column => {
                            if(column === 'PRIMARY_KEY') primaryKey = 1;
                            //else primaryKey = 0;
                        });
                        
                        columns.map(column => {
                            if(column === 'SECONDARY_KEY') secondaryKey = 1;
                            //else secondaryKey = 0;
                        });
                        
                        columns.map(column => {
                            if(column === 'TERTYARY_KEY') tertiaryKey = 1;
                            //else tertiaryKey = 0;
                        });
                        
                
                        keys = {'fileName':fileName,
                        'PRIMARY_KEY':primaryKey,
                        'SECONDARY_KEY':secondaryKey,
                        'TERTYARY_KEY':tertiaryKey}
                        
                        keysFiles.push(keys);
                    
                }
            })
        })
        //console.log(keys);
      //  dataFrame.readFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.json').parseJSON()
    //    .withSeries(keysFiles).asJSON(keysFiles).writeFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.json');
        fs.writeFileSync('../DadosAbertos-SEDUC/database/keys/keys_index_2.json', JSON.stringify(keysFiles));
            console.log('Arquivo gravado!');
            
        console.log(JSON.stringify(keysFiles));
    

//keyIndex()         

   let index = dataFrame.readFileSync(foldersPath[0]).parseCSV()
                .subset(['NM_COMPLETO_ESCOLA', 'nomedep', 'PRIMARY_KEY','SECONDARY_KEY'])
                .asCSV().writeFileSync(path.join(folderPath,'keys/keys_index_all.csv'));
        
                console.log('Ok!');
}
*/

keysIndex(folderPath, folders);


// Cria os campos e os códigos usados como chave primária, secundária e terciária
const keys = (folders) => {
    let nomeEscolas = ['NM_COMPLETO_ESCOLA','NOME_UA_EXERC','NOMEESC','NOMESC','NOME_UNID_ADM','NOMEUA_C','NOMEUA_E', 'NOME_ESCOLA', 'ESCOLA'];
    let nomeDEs = [/*'de',*/ 'NOMEDE','DE_EXERC','DE','DIRETORIA','NOMEDE_C','NOMEDE_E', 'NOME_DIRETORIA'];
    let regioes = ['REGIAO_EXERC','REGIAO','REGIAO_C','REGIAO_E'];
    
    for(let i of folders){
        let files = fs.readdirSync(path.join(folderPath, i));
        
        for (let j of files){
            if(!j.includes('DIC')){
                foldersPath.push(path.join(folderPath,i,j));
                
            }
        }
        
    }
    
    
    var nomeEscola = [];
    var nomeDE = [];
    var regiao = [];
    //let x = 0;
   // let start = 500001;
    //let end = 921766;
    
    
    for(let k of foldersPath){
        console.log(foldersPath.length)
        console.log(foldersPath[x]);
        
        dataFrame.readFileSync(foldersPath[x]).parseCSV()//.between(start, end)
            .getColumnNames().forEach(columnName => {
                nomeEscolas.forEach(escola => {
                    if(escola === columnName) {
                        console.log(escola);
                        nomeEscola = dataFrame.readFileSync(foldersPath[x]).parseCSV()
                                     .getSeries(escola).between(start, end).select(value => {
                    
                                console.log(value);    
                                var modified = value;
                                
                                if(modified.includes('EEI')) modified = modified.replace('EEI','');
                                if(modified.includes('EE')) modified = modified.replace('EE','');
                                if(modified.includes('E.E.')) modified = modified.replace('E.E.','');
                                if(modified.includes('E. E.')) modified = modified.replace('E. E. ','');
                                
                                if(modified.includes(' E ')) modified = modified.replace(/ E /g,'');
                                if(modified.includes(' DA ')) modified = modified.replace(/ DA /g,'');
                                if(modified.includes(' DE ')) modified = modified.replace(/ DE /g,'');
                                if(modified.includes(' DI ')) modified = modified.replace(/ DI /g,'');
                                if(modified.includes(' DO ')) modified = modified.replace(/ DO /g,'');
                                if(modified.includes(' DU ')) modified = modified.replace(/ DU /g,'');
                            
                                if(modified.includes('PROFESSOR')) modified = modified.replace('PROFESSOR','');
                                if(modified.includes('PROF')) modified = modified.replace('PROF','');
                                if(modified.includes('PRO')) modified = modified.replace(/PRO/g,'');
                                
                                if(modified.includes('PROFESSORA')) modified = modified.replace('PROFESSORA','');
                                if(modified.includes('PROFA')) modified = modified.replace('PROFA','');
                                
                                if(modified.includes('DOUTOR')) modified = modified.replace('DOUTOR','');
                                if(modified.includes('DR')) modified = modified.replace(/DR/g,'');
                                
                                if(modified.includes('ENGENHEIRO')) modified = modified.replace('ENGENHEIRO','');
                                if(modified.includes('ENG')) modified = modified.replace(/ENG/g,'');
                                
                                if(modified.includes('VEREADOR')) modified = modified.replace('VEREADOR','');
                                if(modified.includes('VER')) modified = modified.replace(/VER/g,'');
                                
                                if(modified.includes('IRMA')) modified = modified.replace('IRMA','');
                                
                                if(modified.includes('PRESIDENTE')) modified = modified.replace('PRESIDENTE','');
                                
                                if(modified.includes('PREFEITO')) modified = modified.replace('PREFEITO','');
                                if(modified.includes('PREF')) modified = modified.replace(/PREF/g,'');
                                
                                if(modified.includes('CORONEL')) modified = modified.replace('CORONEL','');
                                if(modified.includes('CEL')) modified = modified.replace(/CEL/g,'');
                                
                                if(modified.includes('MINISTRO')) modified = modified.replace('MINISTRO','');
                                
                                if(modified.includes('MS')) modified = modified.replace(/MS/g,'');
                                
                                if(modified.includes('EDITOR')) modified = modified.replace('EDITOR','');
                                
                                if(modified.includes('SENADOR')) modified = modified.replace('SENADOR','');
                                if(modified.includes('SEN')) modified = modified.replace(/SEN/g,'');
                                
                                if(modified.includes('PF')) modified = modified.replace('PF','');
                                
                                if(modified.includes('PFA')) modified = modified.replace('PFA','');
                                
                                if(modified.includes('SUP')) modified = modified.replace(/SUP/g,'');
                                
                                if(modified.includes('DEPUTADO')) modified = modified.replace('DEPUTADO','');
                                if(modified.includes('DEP')) modified = modified.replace(/DEP/g,'');
                                
                                if(modified.includes('JUNIOR')) modified = modified.replace('JUNIOR','');
                                if(modified.includes('JR')) modified = modified.replace('JR','');
                                
                                if(modified.includes('REVER')) modified = modified.replace(/REVER/g,'');
                                if(modified.includes('REV')) modified = modified.replace(/REV/g,'');
                                
                                if(modified.includes('DOM')) modified = modified.replace('DOM','');
                                
                                if(modified.includes('DONA')) modified = modified.replace('DONA','');
                                
                                if(modified.includes('CAPITAO')) modified = modified.replace('CAPITAO','');
                                if(modified.includes('CAP')) modified = modified.replace(/CAP/g,'');
                                
                                if(modified.includes('PADRE')) modified = modified.replace('PADRE','');
                                if(modified.includes('PE')) modified = modified.replace(/PE/g,'');
                                
                                if(modified.includes('PASTOR')) modified = modified.replace('PASTOR','');
                                
                                if(modified.includes('GOVERNADOR')) modified = modified.replace('GOVERNADOR','');
                                if(modified.includes('GOV')) modified = modified.replace(/GOV/g,'');
                                
                                if(modified.includes('DESEMBARGADOR')) modified = modified.replace('DESEMBARGADOR','');
                                if(modified.includes('DESEMB')) modified = modified.replace(/DESEMB/g,'');
                                
                                if(modified.includes('MONSENHOR')) modified = modified.replace('MONSENHOR','');
                                if(modified.includes('MONS')) modified = modified.replace(/MONS/g,'');
                                
                                if(modified.includes('BRIGADEIRO')) modified = modified.replace('BRIGADEIRO','');
                                
                                if(modified.includes('SOLDADO')) modified = modified.replace('SOLDADO','');
                                
                                if(modified.includes('GENERAL')) modified = modified.replace('GENERAL','');
                                
                                if(modified.includes('ALMIRANTE')) modified = modified.replace('ALMIRANTE','');
                                
                                if(modified.includes('BARAO')) modified = modified.replace('BARAO','');
                                
                                if(modified.includes('CONSELHEIRO')) modified = modified.replace('CONSELHEIRO','');
                                
                                if(modified.includes('.')) modified = modified.replace(/\./g,' ');
                                if(modified.includes('-')) modified = modified.replace(/-/g,'');
                                if(modified.includes(' ')) modified = modified.replace(/ /g,'');
                                
                                return modified;
                                
                        })
                            dataFrame.readFileSync(foldersPath[x]).parseCSV()//.between(start, end)
                            .withSeries('PRIMARY_KEY', nomeEscola).asCSV().writeFileSync('../DadosAbertos-SEDUC/div/disciplinas_sem_docentes_associados/Atribuicao_Parte_4.csv');//.writeFileSync(foldersPath[x]);
                            //x++;
                    }
                })
            })
            console.log('PRIMARY_KEY done!');
//    }  

     //x = 30; Retornar ****************************** historico_de_matricula_por_turma(verificar divisao)
   // let start = 500001;
    //let end = 921766;
    
            //problema - 10, 11,  16, 28, 29
    for(let k in foldersPath){
        
        console.log(foldersPath.length)
        console.log(foldersPath[k]);
    
         dataFrame.readFileSync(foldersPath[k]).parseCSV()
            .getColumnNames().forEach(columnName => {
                nomeDEs.forEach(diretoria => {
                    if(diretoria === columnName){
                        nomeDE = dataFrame.readFileSync(foldersPath[k]).parseCSV()
                                     .getSeries(diretoria).select(value => {
                        
                                console.log(value);
                                var modified = value;
                                
                                if(modified.includes('D.E.REG.')) modified = modified.replace('D.E.REG. ','');
                                
                                return modified;
                                
                            })
                                dataFrame.readFileSync(foldersPath[k]).parseCSV()
                                .withSeries('SECONDARY_KEY', nomeDE).asCSV().writeFileSync(foldersPath[k]);
                               // x++;
                    }
                })
            })
        console.log('SECONDARY_KEY done!');    
    }  

        //x = 30;
        //problema - null
    //for(let k of foldersPath){   
        console.log(foldersPath.length)
        console.log(foldersPath[x]);
       
       dataFrame.readFileSync(foldersPath[x]).parseCSV()
            .getColumnNames().forEach(columnName => {
                regioes.forEach(reg => {
                    if(reg === columnName) {
                        regiao = dataFrame.readFileSync(foldersPath[x]).parseCSV()
                                     .getSeries(reg).select(value => {
                        
                                console.log(value);
                                var modified = value;
                                
                                return modified;
                                
                            })
                            dataFrame.readFileSync(foldersPath[x]).parseCSV()
                            .withSeries('TERTYARY_KEY', regiao).asCSV().writeFileSync(foldersPath[x]);
                         //   x++;
                    }
                })
            })
            
        console.log('TERTYARY_KEY done!');
            
    } 

console.log('Terminou!');

} 
//keys(folders); 


// Organiza o conjunto de caminhos para os arquivos com as informações 
// sobre os campos de cada conjunto de dados.
const dic = (folders) => {
    for(let i of folders){
        let files = fs.readdirSync(path.join(folderPath, i));
        for (let j of files){
            if(j.includes('DIC')){
                foldersPath.push(path.join(folderPath,i,j));
            }
        }
    }
}
//dic(folders);
//console.log(foldersPath);

// Constroi arquivo com as informações sobre os campos de cada conjunto 
// de dados.
const separator = '\n **************************************************************************************************************************** \n\n\n'
const json = () => {
    dic(folders);
    for(let csv of foldersPath){
        console.log(csv);
        let data = dataFrame.readFileSync(csv, 'utf-8').parseCSV();
        fs.appendFileSync('../DadosAbertos-SEDUC/DIC_all.json', csv+'\n');
        fs.appendFileSync('../DadosAbertos-SEDUC/DIC_all.json', '\n'+data.toString()+'\n');
        fs.appendFileSync('../DadosAbertos-SEDUC/DIC_all.json', separator);
        console.log(csv);
        console.log('Gravado com sucesso!');
        }
    }
//json();

