const fish = { name: 'Hilsha the king', id: 25, dress: 'silver', mobile: 017776, address: 'chandpur', price: 9000 };
// const address = fish.address;
// const mobile = fish.mobile;
// const price = fish.price;
// const { name, id, dress, mobile, address, price } = fish;
// // console.log(address, 'r elish big size', price, 'taka per kg');
// console.log(name, id, dress, mobile, address)

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
const { name, work, ceo } = company;
console.log(name, work, ceo);
