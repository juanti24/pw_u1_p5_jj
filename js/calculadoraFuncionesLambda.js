const sumar = (n1,n2) => n1+n2;


const sumarCompleto=()=>{
    var resultado = parsear('idnumero1') + parsear ('idnumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;

    }

const restarCompleto=() => {
    var resultado = parsear('idnumero1') - parsear ('idnumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;     
}

const dividirCompleto=() => {
    var resultado = parsear('idnumero1') / parsear ('idnumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;     
}


const multiplicarCompleto=() => {
    var resultado = parsear('idnumero1') * parsear ('idnumero2')
    console.log(resultado)
    document.getElementById('idResultado2').innerText= resultado;         
}

const parsear=(id) => parseInt(document.getElementById(id).value);

function conceptosJS(){
    let var1 = 10;
    let var1Texto='Texto1';
    console.log(var1);
    console.log(var1Texto);

    /**Var es un tipo de dato que esta quedando en desuso */
    var var2 = 10;
    var var2Texto='Texto2'
    console.log(var2);
    console.log(var2Texto);

    const const1=10;
    const const1Texto='Texto3'
    console.log(const1);
    console.log(const1Texto);

    //declaracion de arreglos

    const diasSemana=["Lunes", "Martes", "Miercoles","Jueves","Viernes"];
    console.log(diasSemana)

}


const cambiarImagen=() => {
    document.getElementById('idimg1').src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg'
    
}