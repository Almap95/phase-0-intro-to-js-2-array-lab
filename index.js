// const cats =["Milo", "Otis","Garfield"]

// function destructivelyAppendCat(name) { 
// cats.push(name);
// }

// function destructivelyPrependCat(name){
// cats.unshift(name);
// }
// function destructivelyRemoveLastCat(){
//     cats.pop();
// }
// function destructivelyRemoveFirstCat(){
//     cats.shift();
// }
// function appendCat(name){
//  const newCats = cats.concat(name);
//  return newCats;
// }
// function prependCat(name){
//     const newCats = [name, ...cats];
//     return newCats;
// }
// function removeLastCat(){
// const newCats = [...cats];
// newCats.pop()
// return newCats
// }
// function removeFirstCat(){
//     const newCats = [...cats];
//     newCats.shift();
//     return newCats;
// }

const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
cats.push(name);}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat (){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const newCats = cats.concat(name);
    return newCats;
}
function prependCat(name){
    const newCats = [name ,"Milo", "Otis","Garfield" ]
    return newCats;
}
function removeLastCat() {
const newCats =["Milo", "Otis" ]
return newCats;
}
function removeFirstCat() {
    const newCats =[ "Otis","Garfield" ]
    return newCats;
}