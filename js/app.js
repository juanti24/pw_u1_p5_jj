console.log("elementos Vue");
console.log(Vue);

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
        }

    },
    watch:{

    },
    data(){
        return{
            mensaje:'Hola mundo desde Vue.JS',
            valor: 100
            
        }
    }
})


app.mount('#myApp')