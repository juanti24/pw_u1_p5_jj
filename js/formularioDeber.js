console.log("elementos Vue");
console.log(Vue);

const app = new Vue({
    el: '#myApp',
    data() {
        return {
            lista: [],
            nombre: '',
            apellido: '',
            edad: null,
            cedula: '',
            semestre: null
        };
    },
    methods: {
        agregarEstudiante() {
            if (this.nombre && this.apellido && this.edad && this.cedula && this.semestre) {
                this.lista.push({
                    nombre: this.nombre,
                    apellido: this.apellido,
                    edad: this.edad,
                    cedula: this.cedula,
                    semestre: this.semestre
                });
                this.nombre = '';
                this.apellido = '';
                this.edad = null;
                this.cedula = '';
                this.semestre = null;
            }
        }
    }
})

app.mount('#myApp')