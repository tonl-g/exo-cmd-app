/* En vous basant sur l'exemple du cours showStars.js, écrire un programme pyramid.js qui prend 2 arguments sur la ligne de commande:

le nombre d'éléments qui sera la base de la pyramide
une string (un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *. */

const chalk = require('chalk')

const showStars = (nbStars) => {
    for (let i = 1; i <= nbStars; i += 1) {
      console.log(chalk.blue(str.repeat(i)))
    }
  }

  if (process.argv.length !== 4) {
    console.log(chalk.red('usage: node stars.js number and string'))
    process.exit(1)
  }

  if (isNaN(process.argv[2])) {
    console.log(chalk.red(`Error: ${process.argv[2]} is not a number.`))
    process.exit(1)
  }

  let nb = Number(process.argv[2])
  let str = (process.argv[3])
  showStars(nb)



