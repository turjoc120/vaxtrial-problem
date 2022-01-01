// const persons = [
// { name: 'sunil', age: 21, temperature: 98 },
// { name: 'Biplap', age: 22, temperature: 980 },
// { name: 'Biplap', age: 32, temperature: 80 },
// { name: 'Biplap', age: 43, temperature: 80 },
// { name: 'Biplap', age: 51, temperature: 80 },
// ]

function vaxTrail(persons) {
    const result = { A: [], B: [], C: [], D: [] }

    ola.filter(i => {
        if (i.age >= 20 && i.age <= 30 && i.temperature < 100) {
            result.A.push(i)
        }
        else if (i.age >= 31 && i.age <= 40 && i.temperature < 100) {
            result.B.push(i)
        }
        else if (i.age >= 41 && i.age <= 50 && i.temperature < 100) {
            result.C.push(i)
        }
        else if (i.temperature >= 100) {
            result.D.push(i)
        }
    })
    return result

}

// console.log(vaxTrail(persons))