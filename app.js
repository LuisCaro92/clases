let lista = ["manzana", "pera", "durazno", "frutilla"]
console.log(lista);


//agregar elemntos a un array
//lista.push("sandia","melon",1)
//console.log(lista);

//let nuevalista=lista.concat("sandia","melon");
//console.log(nuevalista)

//eliminar elementos


//elimina el ultimo
//lista.pop()
//console.log(lista)


//elimina el primero
//lista.shift()
//console.log(lista)

//Editar el Array

//lista[1]="kiwi"
//console.log(lista)

let findeElemnt= (array, elemento)=>{

if (array.includes(elemento)){

    return " Si existe el elemnto";
}else{

    return "no existe el elmento";
}

}
console.log(findeElemnt(lista,"durazno"))