//console.log("Hola mundo");

let myDouble  = 2.1;

//console.log(myDouble);

myDouble = myDouble + parseInt("1");

//console.log(myDouble);

let a = 1;
let b = 1;
/*
if (a == b)
    console.log(a + "a es igual a "+b);
else
console.log(a + "a NO es igual a "+b);
*/

let url = "www.us.es";
// el ${} se utiliza pa poder meter variables dentro de un literal sin el coñazo de tener q utilizar el ""+ variable +"" 
let myStr3 = `<a href="${url}"></a>`;

function log (m){
    console.log(m);
}

//log("mi log")

let myObj = new Object();
//Puedo declarar directamente crear variables del objeto en el momento y darles valores
myObj.id = 1;
myObj.name = "pepe";
myObj.p = true;
//Crear un mapa seria tan facil como utilizar su constructor al igual que para otros muchos tipos
let myMap = new Map();

//Con lo que mas vamos a trabajar son los arrays y hay varias formas de inicializarlos

let myArray = new Array();  //Con el constructor
let myArray2 = []; //Directamente vacio
let myArray3 = [1,2,3,4];  //Directamente con valores (Los valores no tienen porq ser del mismo tipo, pueden ser de distinto)

/*
myArray3.forEach(function f(n){
    log(`n = ${n}`);
});

myArray3.forEach((n) => {
    log(`n = ${n}`);
});
*/

//myArray3.forEach((n) => log(`n = ${n}`));

// o si quiero simplemente llamar a un metodo ya creado se puede hacer
/*
myArray3.forEach(log);

myArray3.map((v) => (v+1))
        .forEach(log);


        //Puedo definir un objeto tambien de la siguiente manera
*/
let contact = {
    name : "pepe",
    phone: 12345
};
//log(contact.name);

let contactList = [{
    name: "pepe",
    phone: 12345
},{
    name: "luis",
    phone: 67890
}];
// el ,null,2 es pa q se vea mejor el resultado del stringify
log(JSON.stringify(contactList,null,2));

//L04