const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name;
        }
    };
};

newPerson = person();
console.log(newPerson.getName());
console.log(newPerson.setName('Carlos'));
console.log(newPerson.getName());