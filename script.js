let fileContent = document.querySelector('#file-content');
let submit = document.querySelector('#submit');
let content;
let table = document.querySelector('#result');
let tableCont;
let tableRows;
let tableCols;

let format = () => {
    content = fileContent.value;
    content = content.split("\n");
    let rows = new Array(content.length - 2);

    for(i = 0; i < rows.length; i++) {
        rows[i] = content[i];
        rows[i] = rows[i].split(";");
        //console.log(rows[i]);
    }
    //console.log(rows);

    let array = new Array(rows.length - 1);

    for(j = 0; j < array.length; j++) {
        array[j] = {
            CPF                     : rows[j+1][0],
            NIS                     : rows[j+1][1],
            NOME                    : rows[j+1][2],
            DN                      : rows[j+1][3],
            COD_NIS_INV             : rows[j+1][4],
            COD_CPF_INV             : rows[j+1][5],
            COD_NOME_INV            : rows[j+1][6],
            COD_DN_INV              : rows[j+1][7],
            COD_CNIS_NIS            : rows[j+1][8],
            COD_CNIS_DN             : rows[j+1][9],
            COD_CNIS_OBITO          : rows[j+1][10],
            COD_CNIS_CPF            : rows[j+1][11],
            COD_CNIS_CPF_NAO_INF    : rows[j+1][12],
            COD_CPF_NAO_CONSTA      : rows[j+1][13],
            COD_CPF_NULO            : rows[j+1][14],
            COD_CPF_CANCELADO       : rows[j+1][15],
            COD_CPF_SUSPENSO        : rows[j+1][16],
            COD_CPF_DN              : rows[j+1][17],
            COD_CPF_NOME            : rows[j+1][18],
            COD_ORIENTACAO_CPF      : rows[j+1][19],
            COD_ORIENTACAO_NIS      : rows[j+1][20]
        }
    }

    console.log(array);
}

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', event => {
        event.preventDefault();
        format(); 
    });
});