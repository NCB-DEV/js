//console.log('je suis en route')
/*
je suis présent
je suis en paix
*/

// var, let, const
var num = 0;
var name = "jules est à l' ";
name += "hopital";
console.log(name)
var ident = 'belle';
console.log(ident.length);
console.log(ident[1]);
console.log(ident[ident.length -1]);
let ecole = `Saint Luc est une école ${ident}`;
let prov = " l'école " + ecole + " est située dans la ville de Kinshasa";
console.log(prov) 
console.log(ecole)
const pi = 3.14;

num = num + 2; // num += 2;
console.log(num)

/*pi = 2.14;
console.log(pi)
*/
// +,-,/,*,%
 var soust = num - 5;
 soust -= 3;
 console.log(soust)

 var mult = soust * 2;
 mult *= 2;
 console.log(mult);
 
 var div = mult / 2;
 div /= 2;
 console.log(div)

 var modulo = div % 2;
 modulo %= 5;
 console.log(modulo);

 var tab = [];
 console.log(tab);
 var tab1 = [1,2,3,4,5,6];
 tab1 =[1,2,3]
 console.log(tab1);
 console.log(tab1[4])
 console.log(tab1[6]= 45, tab1);
 var tab2 = [[1,2,3],['paris','londres','quebec']];
 console.log(tab2);
 console.log(tab2[1][2]);
 var tab3 = ["a","b","c"];
 tab3.push("d","e");
 tab3.pop();
 tab3.shift();
 tab3.unshift(5);
 console.log(tab3)

 
 /* les operateurs de comparaison: <,<=,>,>=
 les operateurs logiques: && ,||, !=
 3 == '3'
 3 === '3'
 */

 // les functions
 // function sans parametre
function ourFunction(){
    console.log('sois le bienvenu');
}

ourFunction();

// function avec argument et parametre
function calcul(a,b){
    console.log(a-b);
}

var myGlobal = 10;

function fun(){
    localVar = 15;
    console.log(localVar)
}
function fun1(){
    var output ="";
    if(typeof myGlobal != "undefined") {
        output += " myGlobal " + myGlobal;
    } 
    /* 
    if(typeof myGlobal != "undefined"){
        output += " localvar " + localVar;
    }*/
    console.log(output);
}

fun();
fun1();

calcul(10,5);

// avec return
function nombre(num){
    return num + 25;
}

console.log(nombre(2));
function affichage(isItTrue){
    if(isItTrue){
        return "c'est vrai";
    }
    return "c'est faux";
}

console.log(affichage(false));


function test(val){
    if(val === 12){
        return 'egal'
    }
    return 'pas egal'
}

console.log(test('12'));

//

/*les conditions 
else if*/
 
function calcul(a,b){
    if(a - b === 5){
        return 'great'
    }
    else if(a -b == 0){
        return 'nul'
    } else{
        return 'pret';
    }
}

console.log(calcul(10,0));

var names = ['jules','john','christ'];
function tableau(a,b){
    if(a === 1){
        return names[0];
    } else if(a === b - 2){
        return names[1]
    } 
      return 'rien';
}

console.log(tableau(2,4))

// switch
function cas(val){
    switch(val){
        case 1:
            return 'bonjour';
            break;
        case 2:
            return 'midi';
            break
        case 3: 
            return 'soir';
            break;
        default:
            return 'le soleil';
            break;
    }
}

console.log(cas(300));

// les boucles : while loop & for loop

var chiffre = 0;
while(chiffre < 5) {
    chiffre ++;
    console.log(chiffre);
}

for(let i = 0;i < 5; i++){
    console.log(i);
}

// string methods
let fruits ='banane,apple,orange,blackberry';
let moreFruits = 'banana\napple';
console.log(moreFruits)
console.log(fruits.indexOf('e'));
console.log(fruits.slice(2,5));
console.log(fruits.replace('ban',5));
console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
console.log(fruits.charAt(2));
console.log(fruits.split(''));
console.log(fruits.split(','));

// array methods
let ville = ['paris','kin','matadi'];
for(let i =0; i < ville.length; i++){
    console.log(ville[i]);
}

console.log(ville.toString());
console.log(ville.reverse());
console.log(ville.join('-'));
console.log(ville.slice(1,2));

let pays = ['france','usa'];
console.log(pays.concat(ville));

let empty = [];
for(let num =0; num <= 10; num ++){
    empty.push(num);
}
console.log(empty);
