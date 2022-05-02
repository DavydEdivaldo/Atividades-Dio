function verificaPalindromo(string) {
    if (!string){
         throw "String invalida";
    }else{
        return string === string.split('').reverse().join();
    }
   
}

function tryCatchExemplo(string){
    try {
        verificaPalindromo(string)
    } catch (e) {
        console.log(e)//pode usar o 'throw e' tbm, só ira mudar a mensassem de erro
    }
    finally{
        console.log('A string enviada foi: ' + string);
    }
}

tryCatchExemplo('');