console.log("elementos Vue");
console.log(Vue);


const estudiantes = [ {nombre:'Juan', apellido:'Jumbo'},
{nombre:'Andres', apellido:'Jumbo'},
{nombre:'Pepe', apellido:'Jumbo'},
{nombre:'Luis', apellido:'Jumbo'},
{nombre:'Xavier', apellido:'Jumbo'}]

console.log(estudiantes);
console.table(estudiantes)


const app=Vue.createApp({
    
   /*template: `
    <h1>Hola Mundo</h1>
    <h1>Desde App.js</h1>
    <h1>{{1+1}}</h1>
    <p>{{[1,2,3,4,5,6,7,8]}} </p>
    <p>{{true?'Verdadero':'Falso'}} </p>
    `*/

    methods:{
        cambiarMensaje(){
            console.log("Se esta cambiando el mensaje"),
            console.log(this.mensaje),
            this.mensaje='Valor cambiado'
        },

        sumar(){
           console.log(this.valor++);
        },

        agregarEstudiante(){
            console.log("Agregando Estudiante");
            //this.lista.unshift(estu)
            this.lista.push({nombre:this.nombre, apellido:this.apellido})
        },

        presionandoTecla(event){
            console.log("presionando......");
            console.log(event.charCode)
        },

        valor(event){
            console.log("Ingereso al metodo");
            if(event.charCode===13){
                agregarEstudiante()
            }
        }

    },
    watch:{

    },
    data(){
        return{
            mensaje:'Hola mundo desde Vue.JS',
            valor: 100,
            lista: estudiantes,
            nombre: null,
            apellido: null
            
        }
    }
})


app.mount('#myApp')