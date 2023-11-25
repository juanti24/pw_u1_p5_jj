



function sumarNumerosCompleto(){
            var n1= parseInt(document.getElementById('idnumero1').value);
            var n2= parseInt(document.getElementById('idnumero2').value);
            console.log('funcion sumarNumeros' + n1)
            console.log('funcion sumarNumeros' + n2)
            var resultado = n1 + n2
            console.log(resultado)
            document.getElementById('idResultado2').innerText= resultado;     
}

function restarNumeros(){
    var n1= parseInt(document.getElementById('idnumero1').value);
    var n2= parseInt(document.getElementById('idnumero2').value);
    console.log('funcion sumarNumeros' + n1)
    console.log('funcion sumarNumeros' + n2)
    var resultado = n1 - n2
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;     

}

function multiplicarNumeros(){
    var n1= parseInt(document.getElementById('idnumero1').value);
    var n2= parseInt(document.getElementById('idnumero2').value);
    console.log('funcion sumarNumeros' + n1)
    console.log('funcion sumarNumeros' + n2)
    var resultado = n1 * n2
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;     
}

function dividirNumeros(){
    var n1= parseInt(document.getElementById('idnumero1').value);
    var n2= parseInt(document.getElementById('idnumero2').value);
    console.log('funcion sumarNumeros' + n1)
    console.log('funcion sumarNumeros' + n2)
    var resultado = n1 / n2
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;     
}

function cambiarImagen(){

    "document.getElementById('idimg1').src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg'"
}