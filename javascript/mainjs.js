
//Select by ID
//let div= document.getElementById("datos");// get element by.. es un metodo del objeto document.. lo pongo en una constante para poder usarlo
// console.log (div);// me muestra ese elemento que identifiqu'e con el ID... en este caso el div, el ID es unico para cada elemento, no lo puedo repetir
//let explicacion= document.getElementById( "parrafo");
// console.log (explicacion);

// console.dir (document);// me muestra atrubutos de todo el html

// console. dir (document.body); // me trae todos los atributos del body

// Selector por tagname
// const divs= document.getElementsByTagName('div');
// console.log(divs);

// selector por clases
// const paises= document.getElementsByClassName('pais'); //ME muestra todos los elementos a los que les haya puesto esa clase, como una coleccion de html
// console.log(paises);

//const lista= document.getElementsByClassName('lista')
//const paises= document.getElementsByClassName('pais'); //por parecesrse a un array la puedo recorrer con un for of
// for (const pais of paises) {
//     console.log (pais); // con esto me muestra cada lista, pero no el nombre del pais
// //    console.log (pais. textContent); // estoy accediento al nodo texto, para ver el nombre de cada pais
// //     console.log (pais.innerText); //hace lo mismo que textContent
// }

// console.log (paises[1].innerText); // tambien puedo buscar posiciones de ese array o coleccion de html

// paises[2].innerText= "Camboya"; // puedo modificar el texto desde JS ( no necesito console log)
//  paises[2].innerHTML= "<h1> camboya</h1>"; // puedo modificar una estructura html, no solo el texto.. incluso le puedo agregar clases que tenga en el css

 //crear nodos que no existen el el html
 //const parrafo= document.createElement ('p');
// parrafo.innerText="creando un parrafo que no esxiste en index";// con innertext le agrego el contenido o el nodo texto
//document.body.append(parrafo);// el metodo append le pide a un elemento que se haga cargo de lo que cree... aca lo agrega al final del body
//  datos.appendChild(parrafo);// appendchils hace lo mismo que append y ac'a se lo di a un id que habia creado mas arriba y as'i aparece en el medio
 
//para remover cualquier elemento desde js usamos remove
//datos.remove();// remov'i poniendo el ID de un div.. no remueve poniendo la clase  o la tag
//prueba.remove();
  //para llenar una lista vacia9 (ul) con un array desde JS ver video (1h;38 minutos)
  //para ver concatenado y interpolacion/template (1h;45 minutos)
// CLASE 10 EVENTOS
//addEventListener (EVENTO)(FUNCION) ADDEVENT ES QUIEN ESCUCHA EL EVENTO Y LO EJECUTA SOBRE UN DETERMINADO ELEMENTO

const parrafo= document.getElementById("parrafo");
console.log(parrafo);

// parrafo.addEventListener(("click"),()=>{
//         alert("probando el evento click");
// });

// esto tambien se puede hacer con el prefijo on.. agregado al evento *en lugar de addEventLisener.. decidir cual se va a usar
//  parrafo.onclick= ()=>{
//    alert("probando el evento click con on");
// }

// tambien se puede hacer poniendo el evento (por ejemplo onclick) como atributo en el codigo html, no usarla porque mezcla logiuca, es poco mantenible

//otros eventos con el mouse
// parrafo.addEventListener("mousedown",()=>{
//     console.log("presionaste el mouse");
// });
// parrafo.addEventListener("mouseup",()=>{
//     console.log("soltaste el mouse");
// });
parrafo.addEventListener("mouseenter",()=>{
    console.log("entraste al parrafo");
});
parrafo.addEventListener("mouseleave",()=>{
    console.log("saliste del parrafo");
});
parrafo.addEventListener("mouseenter",()=>{
    parrafo.style.backgroundImage= "url";
});








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
// function validar(nota){
//     if ( isNaN (nota) ||nota<0 || nota >11){
//         alert("Recargue la pagina e Ingrese una nota valida");
//         // corte = false;
//         }
// }
// // let prom=0;

//     function Alumnado (nombre, curso, edad){
//         this.nombre=nombre;
//         this.curso=curso;
//         this.edad=edad;
//         this.calcularPromedio= function(){
//             let sum = 0;//variable que ira sumando las notas ingresadas
//             let contador = 0; // variable que contara las notas
//             let nota=0;
//             // let corte = true; //variable booleana adicional, creada para que no muestre el promedio cuando no es valida la nota


//             do {
//                 nota= parseInt(prompt("INgrese las notas. Ingrese '11' cuando haya ingresado todas las notas disponibles para hacer el promedio"));
//                 validar(nota); 
//                 if (nota!= 11 ) {
//                 sum= sum + nota;
//                 contador= contador + 1; 
//                 }   
//                 } while (nota>=0 && nota<=10 && nota != 11);  
//              return sum/contador; // le estoy pidiendo que retorne el promedio
            
//                 }
              
//             }
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
        //     const matricula=[];
        //     for(let i=0; i<3;i++){
        //         let nombre= prompt ("ingrese nombre del alumno");
        //         let curso= prompt ("Ingrese, con un numero, el curso al que pertenece");
        //         let edad= prompt ("Ingrese la edad del alumno");
               
        //       let alumno1= new Alumnado (nombre, curso, edad);
            
        //        let prom= alumno1.calcularPromedio();// el objeto alumno llama al metodo y lo guarda en una variable 
        //        alumno1.promedio=prom;
        //       console.log(alumno1);
                
        //     matricula.push(alumno1);// otra forma de agregar a alumno 1 a un array;
            
        //     }
        //     console.log(matricula);
        //     console.table (matricula);// muestra el array en forma de tabla

        //     // for(const elemento of matricula){ // merecorre el array y con el console muestra todos los objetos que tiene mi array
        //     //     console.log (elemento);
        //     // }
        //        let nombreIngresado= prompt("ingrese el nombre del alumno que desea encontrar en matricula")
        //    const filtrarPorNombre= matricula.filter(el=> el.nombre.includes (nombreIngresado) ) ;  // encontrar un alumno        
        //     console.log(filtrarPorNombre);

        //     const filtrarPorAprobado= matricula.filter(el=> el.promedio>=7);
        //     console.log( filtrarPorAprobado);
                

               
            
     
                        
        


