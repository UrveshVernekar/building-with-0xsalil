const arrayOne = [
    {
        name: "Salil",
        age: 24,
        place: "Goa"
    },
    {
        name: "Sam",
        age: 23,
        place: "Nigeria"
    }
]

let people = arrayOne.filter(person => {
    return person.age >= 18;
})

console.log(people);