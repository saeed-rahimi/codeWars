"use strict"
function abbrevName(name){

    return name.split(" ").map(e=>e[0].toUpperCase()).join(".")

}
console.log((abbrevName("Sam Harris"), "S.H"));
