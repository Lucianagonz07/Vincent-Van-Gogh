
function suma() {

    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria');
    let estudiante = 200 - 200 * 0.80;
    let general = 200;
    let Trainee = 200 - 200 * 0.50;
    let Junior = 200 - 200 * 0.15;

   let totalAPagar = 0;

   if (cantidad > 0) {
      if (categoria.value == 1) {
      totalAPagar = cantidad * estudiante;
   } else if (categoria.value == 2) {
      totalAPagar = cantidad * Trainee;
   } else if (categoria.value == 3) {
      totalAPagar = cantidad * Junior;
   } else if (categoria.value == 0) {
      totalAPagar = cantidad * general;
   }
   } else {
      alert('Ingrese un número positivo');
   }

   document.getElementById('totalPag').innerText = 'Total a Pagar: $ ' + totalAPagar;
   //return totalAPagar;
   //console.log('el total a pagar es ' + totalAPagar);
 }

 //function limpiar() {
   //document.getElementById('totalPag').textContent = 'Total a Pagar: $ ';
   //document.getElementById('formulario').reset();
 //}
 
 
 function limpiar() {
   const formulario = document.getElementById('formulario');
   formulario.reset();
   const parrafo = document.getElementById('totalPag');
       parrafo.textContent = 'Total a Pagar: $';
 }
var botonBorrar= document.getElementById("btnLimpiar");
 //botonBorrar.addEventListener('click', limpiar)


 //var y = document.getElementById('btnLimpiar');
 //y.addEventListener('click', limpiar);

 //var q = document.getElementById('btnResumen');
 //q.addEventListener('click', suma);