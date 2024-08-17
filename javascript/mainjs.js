
// let sum = 0;//variable que ira sumando las notas ingresadas
// let contador = 0; // variable que contara las notas
// let prom;// variable que guardara el promedio
// let nota=0;
// let corte = true; //variable booleana adicional, creada para que no muestre el promedio cuando no es valida la nota

// function validar(nota){
//      if ( isNaN (nota) ||nota<0 || nota >11){
//          alert("Recargue la pagina e Ingrese una nota valida");
//          corte = false;
//          }
// }

//  do {
//      nota= parseInt(prompt("INgrese las notas. Ingrese '11' cuando haya ingresado todas las notas disponibles para hacer el promedio"));
//       validar(nota); 
//     if (nota!= 11 ) {
//      sum= sum + nota;
//      contador= contador + 1; 
//      }   
//     } while (nota>=0 && nota<=10 && nota != 11);  

// prom = sum/(contador);

// if (corte==true) {
//     if (prom >=7 ) {
//         console.log("El promedio es de  " + prom + "  : El alumno esta aprobado");
//      }
//       else {        
//        console.log( "El alumno esta desaprobado porque su promedio es: " + prom );                   
//      }

// }else { 
//     alert("No se puede calcular el promedio")}
function validar(nota){
    if ( isNaN (nota) ||nota<0 || nota >11){
        alert("Recargue la pagina e Ingrese una nota valida");
        // corte = false;
        }
}
// let prom=0;

    function Alumnado (nombre, curso, edad){
        this.nombre=nombre;
        this.curso=curso;
        this.edad=edad;
        this.calcularPromedio= function(){
            let sum = 0;//variable que ira sumando las notas ingresadas
            let contador = 0; // variable que contara las notas
            let nota=0;
            // let corte = true; //variable booleana adicional, creada para que no muestre el promedio cuando no es valida la nota


            do {
                nota= parseInt(prompt("INgrese las notas. Ingrese '11' cuando haya ingresado todas las notas disponibles para hacer el promedio"));
                validar(nota); 
                if (nota!= 11 ) {
                sum= sum + nota;
                contador= contador + 1; 
                }   
                } while (nota>=0 && nota<=10 && nota != 11);  
             return sum/contador; // le estoy pidiendo que retorne el promedio
            
                }
              
            }
            // procedimiento para crear el objeto alumno 1 con su promedio de notas
        //     let nombre= prompt ("ingrese nombre del alumno");
        //     let curso= prompt ("Ingrese, con un numero, el curso al que pertenece");
        //     let edad= prompt ("INgrese la edad del alumno");
           
        //   const alumno1= new Alumnado (nombre, curso, edad);
        //   console.log(alumno1);
        //    const prom= alumno1.calcularPromedio();// el objeto alumno llama al metodo y lo guarda en una variable 
        //    alumno1.promedio=prom;
        //   console.log(alumno1);
        // //   for(const propiedad in alumno1){  // bucle para revisar  las propiedades que le quedaron a mi objeto
        // //     console.log(propiedad);// solo me muestra las claves, el titulo de esas propiedades "nombre, edad, etc"
        // //     console.log(alumno1[propiedad]);// as'i me muestra los valores que esas propiedades tienen en mi objeto
        // //   }

        //     //  const matricula=[alumno1];// forma de meter al objeto alumnio1 en un array
        //     //  console.log(matricula);
        //     const matricula=[];  
        
        //     matricula.push(alumno1);// otra forma de agregar a alumno 1 a un array;
        //     console.log(matricula);

            // INtentando agregar mas de un alumno por prompt (3 alumnos) a un array llamado matricula
            const matricula=[];
            for(let i=0; i<3;i++){
                let nombre= prompt ("ingrese nombre del alumno");
                let curso= prompt ("Ingrese, con un numero, el curso al que pertenece");
                let edad= prompt ("Ingrese la edad del alumno");
               
              let alumno1= new Alumnado (nombre, curso, edad);
            
               let prom= alumno1.calcularPromedio();// el objeto alumno llama al metodo y lo guarda en una variable 
               alumno1.promedio=prom;
              console.log(alumno1);
                
            matricula.push(alumno1);// otra forma de agregar a alumno 1 a un array;
            
            
            console.log(matricula);
            console.table (matricula);// muestra el array en forma de tabla

            // for(const elemento of matricula){ // merecorre el array y con el console muestra todos los objetos que tiene mi array
            //     console.log (elemento);
            // }
               let nombreIngresado= prompt("ingrese el nombre del alumno que desea encontrar en matricula")
           const filtrarPorNombre= matricula.filter(el=> el.nombre.includes (nombreIngresado) ) ;  // encontrar un alumno        
            console.log(filtrarPorNombre);

            const filtrarPorAprobado= matricula.filter(el=> el.promedio>=7);
            console.log( filtrarPorAprobado);
                

               
            
     
                        
        


