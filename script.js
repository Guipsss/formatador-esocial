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
    }

    let array = new Array(rows.length);

    for(j = 0; j < array.length; j++) {
        array[j] = {
            CPF                     : rows[j][0],
            NIS                     : rows[j][1],
            NOME                    : rows[j][2],
            DN                      : rows[j][3],
            COD_NIS_INV             : rows[j][4],
            COD_CPF_INV             : rows[j][5],
            COD_NOME_INV            : rows[j][6],
            COD_DN_INV              : rows[j][7],
            COD_CNIS_NIS            : rows[j][8],
            COD_CNIS_DN             : rows[j][9],
            COD_CNIS_OBITO          : rows[j][10],
            COD_CNIS_CPF            : rows[j][11],
            COD_CNIS_CPF_NAO_INF    : rows[j][12],
            COD_CPF_NAO_CONSTA      : rows[j][13],
            COD_CPF_NULO            : rows[j][14],
            COD_CPF_CANCELADO       : rows[j][15],
            COD_CPF_SUSPENSO        : rows[j][16],
            COD_CPF_DN              : rows[j][17],
            COD_CPF_NOME            : rows[j][18],
            COD_ORIENTACAO_CPF      : rows[j][19],
            COD_ORIENTACAO_NIS      : rows[j][20]
        }
    }

    document.querySelector('#result').innerHTML = `
        ${array.map(i => `
            <tr>
                <td>${i.CPF}</td>
                <td>${i.NIS}</td>
                <td>${i.NOME}</td>
                <td>${i.DN}</td>
                <td>${i.COD_NIS_INV}</td>
                <td>${i.COD_CPF_INV}</td>
                <td>${i.COD_NOME_INV}</td>
                <td>${i.COD_DN_INV}</td>
                <td>${i.COD_CNIS_NIS}</td>
                <td>${i.COD_CNIS_DN}</td>
                <td>${i.COD_CNIS_OBITO}</td>
                <td>${i.COD_CNIS_CPF}</td>
                <td>${i.COD_CNIS_CPF_NAO_INF}</td>
                <td>${i.COD_CPF_NAO_CONSTA}</td>
                <td>${i.COD_CPF_NULO}</td>
                <td>${i.COD_CPF_CANCELADO}</td>
                <td>${i.COD_CPF_SUSPENSO}</td>
                <td>${i.COD_CPF_DN}</td>
                <td>${i.COD_CPF_NOME}</td>
                <td>${i.COD_ORIENTACAO_CPF}</td>
                <td>${i.COD_ORIENTACAO_NIS}</td>
            </tr>
        `).join('')}
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', event => {
        event.preventDefault();
        format(); 
    });
});