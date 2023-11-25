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
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5]="Sabado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    console.log(diasSemana)
    diasSemana.unshift("Feriado")
    console.log(diasSemana)
    const edades=[1,2,3,4,5]
    console.log(edades)
    const edades2 = [6,7,8]
    const edadesFinales=edades.concat(edades2)
    console.log(edadesFinales)


    for(const dia of diasSemana){
        console.log(dia)
        if(dia === 'Martes'){
            console.log('martes dos por uno')
        }
    }

    //Declaracion de Objetos
    //Se declara directamente el objetos instanciado, no la clase
    //El objeto se lo declara con el esquema clave:valor
    //Nomenclatura en formato Json

    const estudiante = {
        nombre:"Juan",
        apellido:"Jumbo",
        edad:34,
        genero:"M",
        ciudad:"Quito"
    }

    console.log(estudiante);
    console.log(estudiante.apellido)
    estudiante.nombre="Andres"
    console.log(estudiante.nombre);

    const persona={
        nombre:"Juan",
        apellido:"Jumbo",
        edad:26,
        direccion:{
            callePrincipal:"America",
            calleSecundaria:"11 de Junio",
            numeracion:"Oe3-24",
            barrio:"La Magdalena"
        }
    }

    console.log(persona);
    console.log(persona.direccion);
    console.log(persona.direccion.numeracion);

    //Arreglo de 4 pacienntes que tenga 3 atributos



    const pacienntes={
        nombre:"Paciente1",
        datosPaciente1:{
            id:"id1",
            edad:"14",
            sexo:"M"
        },
        nombre:"Paciente2",
        datosPaciente2:{
            id:"id2",
            edad:"18",
            sexo:"M"
        },
        nombre:"Paciente3",
        datosPaciente3:{
            id:"id3",
            edad:"17",
            sexo:"M"
        },

        nombre:"Paciente4",
        datosPaciente4:{
            id:"id4",
            edad:"16",
            sexo:"M"
        },


       

    }

    console.log(pacienntes);
    console.table(pacienntes);

    //Arreglo

    const pacientes= [{nombre:"Juan",apellido:"Jumbo"},{nombre:"Juan1",apellido:"Jumbo1"}]
    console.table(pacientes)

    //Desestructuración
    //En el arreglo lo vamos a dividir en partes
    
    const diasSemana2 = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
    const [dia1,dia2,dia3,dia4,dia5] = diasSemana2
    console.log(dia1)
    console.log(dia5)

    const [d1,d2,d3,d4,d5] = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
    console.log(d2);
    console.log(d4);

    //Desestructuración
    //En los objetos
    const vehiculo={marca:"Toyota",modelo:"Prius",anio:2022}
    const {marca,modelo,anio} = vehiculo;
    console.log(marca);
    console.log(anio);
    
    //Objeto que tenga como atributo otro objeto

    const estudiante1 = {nombre:"Juan",apellido:"Jumbo",direccion:{calle1:"11 de Junio"}}
    const {nombre,apellido,direccion} = estudiante1;
    console.log(direccion);
    console.log(direccion.calle1);


}


const cambiarImagen=() => {
    document.getElementById('idimg1').src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg'
    
}