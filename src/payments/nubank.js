const nubank = require('node-bank');

await nubank.start();
await nubank.login({
    cpf: '__cpf',
    pass: '__password'
})

let arr = await nubank.events.findAll({
    name: 'Github.com',
    events: arr.events
});