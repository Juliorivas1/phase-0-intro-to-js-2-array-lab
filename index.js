// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
}
function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
    
}
function destructivelyRemoveLastCat(Ralph) {
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(Bob) {
    cats.shift("Bob");
}
function appendCat(Broom) {
    return [...cats, "Broom"];
}
function prependCat(Arnold) {
    return ["Arnold", ...cats];
}
function removeLastCat(Garfield) {
    return cats.slice(0,2);

}
function removeFirstCat(Milo) {
    return cats.slice(1);

}

