/* Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande par le maitre du jeu. Le programme s'exécutera tant que l'utilisateur n'aura pas trouvé le bon nombre. Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument de la ligne de commande du programme à son lancement, les messages suivant lui apparaîtront:

si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert
Utiliser readline-sync pour l'interaction avec l'utilisateur. */

const readlineSync = require('readline-sync')
const chalk = require('chalk')

let start = readlineSync.question('please usage: node guessNumber.js number to find a magic number')

const MAGIC_NUMBER = 15

const findMagicNumber = (nb) => {
    if (nb < MAGIC_NUMBER) {
    console.log(chalk.red(`Le number est plus petit que le magic number!`))

    } else if (nb > MAGIC_NUMBER) {
        console.log(chalk.red(`Le number est plus grand que le magic number!`))
    
    } else {
        console.log(chalk.green(`Vous avez trouvé le magic number!`))
    }
}

  if (process.argv.length !== 3) {
    console.log(chalk.red('usage: node guessNumber.js number to find a magic number'))
    process.exit(1)
  }

  if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Error: ${process.argv[2]} is not a number.`))
    process.exit(1)
  }

  let nb = Number(process.argv[2])

findMagicNumber(nb)
