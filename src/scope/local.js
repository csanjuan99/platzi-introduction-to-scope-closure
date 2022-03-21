const helloWorld = () => {
    const hello = "Hello";
    console.log(hello,"I'm local");
}
helloWorld();
console.log(hello, "I'm global");

// Ambito lexico
var scope = "I'm global";
const functionScope = () => {
    var scope = "I'm just a local!"
    const func = () => {
        return scope
    }
    console.log(func())
}

console.log(scope);
functionScope();
