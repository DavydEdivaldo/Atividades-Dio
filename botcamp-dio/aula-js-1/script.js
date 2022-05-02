/*
function getAdmins(map){
    let admins=[];
for([key, value] of map){
    if (value==='Admin') {
        admins.push(key);
    }
}
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));
*/ //dijite 'node script.js' no terminal para executar essa função

//parte 2 da atv
const meuArray=[30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];// sem o '[...] retornaria 'set{e os numeros}' o '[...]'trasforma isso em array.
}
console.log(valoresUnicos(meuArray));