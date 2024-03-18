let nombre = prompt("ingrese un nombre de un alumno");

let materias = 4
let contador = materias;
let notafinal = 0;
let aprobo;

while(contador > 0){
    let nota = parseInt(prompt("ingrese una nota del 1 al 10 para la materia"));
    notafinal = notafinal + nota;
    contador--;
}

aprobo = notafinal / materias;

if(aprobo >= 7){
    alert("el alumno " + nombre + " aprobo el año");
}else {
    alert("el alumno " + nombre + " desaprobo el año");

}