const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, y, z } = myObject;
console.log(x, y, z);
// array call as like array
const company = {
    name: 'Gp',
    ceo: {
        food: 'chinese', dress: 'formal', shoe: 'black', address: 'Dhaka'
    },
    work: {
        work: 'website development',
        employee: 22,
        framework: 'react'
    }
}
console.log(company.ceo?.work?.food);
