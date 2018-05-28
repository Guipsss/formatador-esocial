let fileContent = document.querySelector('#file-content');
let submit = document.querySelector('#submit');
let content;

let format = () => {
    content = fileContent.value;
    content = content.split("\n");
    let rows = new Array(content.length - 2);

    for(i = 0; i < rows.length; i++) {
        rows[i] = content[i];
        rows[i] = rows[i].split(";");
        console.log(rows[i]);
    }
    console.log(rows);
}

document.addEventListener('DOMContentLoaded', () => {
    submit.addEventListener('click', event => {
        event.preventDefault();
        format(); 
    });
});