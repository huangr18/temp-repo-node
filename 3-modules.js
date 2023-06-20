// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const uncleBobby = require('./6-alternative')
// console.log(names)
// console.log(uncleBobby)
require('./7-mind-grenade')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)