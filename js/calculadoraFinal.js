function entrada(valor) {
    var result = document.getElementById('Resultado');
    result.value += valor;
}

function limpiarEntrada() {
    var result = document.getElementById('Resultado');
    result.value = '';
}

function calculoResultado() {
    var result = document.getElementById('Resultado');
    var expTemp = result.value;


    var resultFinal = eval(expTemp);
    result.value = resultFinal;

}