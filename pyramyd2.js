/* Améliorer le programme pyramid.js précédent en ajoutant un paramètre optionnel sur la ligne de commande qui devra arriver à la fin de la ligne de la commande: -r. Si ce paramètre est présent la pyramide devra être affichée à l'envers.

node pyramid.js 5 A -r
AAAAA
AAAA
AAA
AA
A */

const chalk = require('chalk')

const showStars = (nbStars) => {
    for (let i = 1; i <= nbStars; i += 1) {
    console.log(chalk.blue(str.repeat(i)))
    }
}

const reverseShowStars = (nbStars) => {
    for (let i = 1; i >= nbStars; i -= 1) {
    console.log(chalk.blue(str.repeat(i)))
    }
} 


if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Error: ${process.argv[2]} is not a number.`))
    process.exit(1)
}

let nb = Number(process.argv[2])
let str = (process.argv[3])
let rev = (process.argv[4])

reverseShowStars(nb, str, rev)
showStars(nb, str)







