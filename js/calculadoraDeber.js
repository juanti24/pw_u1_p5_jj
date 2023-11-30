function entrada(valor) {
    var result = document.getElementById('resultado');
    result.value += valor;
}

function limpiarEntrada() {
    var result = document.getElementById('resultado');
    result.value = '';
}

function calculoResultado() {
    var result = document.getElementById('resultado');
    var expTemp = result.value;


    var resultFinal = eval(expTemp);
    result.value = resultFinal;

}