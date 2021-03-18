/* Ecrivez un script sayMyName.js qui prend en argument de la ligne de commande une string et affiche un message comme ci-dessous:

% node sayMyName.js Sofiane
My name is Sofiane. */

const chalk = require('chalk')

/* const name = process.argv[2]
console.log(chalk.blue(`My name is ${name}!`)) */

if (process.argv.length != 3) {
    console.log(`usage: node sayMyName.js only one name`)
    process.exit(1) // exit the program with code status 1
  }
  let name = process.argv[2]
  console.log(chalk.blue(`My name is ${name}!`))


