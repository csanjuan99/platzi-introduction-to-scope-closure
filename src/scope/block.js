const fruits = () => {
    if (true) {
        var fruits1 = 'Apple';
        let fruits2 = 'Banana';
        const fruits3 = 'Kiwi';
        console.log(fruits2, fruits3)
    }
    console.log(fruits1)
}
fruits();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

var y = 1;
{
    var y = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
};

anotherFunction();