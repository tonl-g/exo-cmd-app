/* Un état vous demande d'écrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prénom et nom correspondant:

Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
Si l'âge est supérieur ou égal à 18 lui afficher:

prenom nom, vous êtes majeur, vous pouvez voter
Utiliser readline-sync pour l'interaction avec l'utilisateur */

const chalk = require('chalk')

const canVote = (firstName, lastName, age) => {
    if (age < 18) {
    console.log(chalk.red(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter!`))
} else { (age >= 18) 
    console.log(chalk.blue(console.log(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter!`)))
}
}

if (process.argv.length !== 5) {
    console.log(chalk.red('usage: node majorityTest.js firstName, lastName and age'))
    process.exit(1)
  }

  if (isNaN(process.argv[4])) {
    console.log(chalk.red(`Error: ${process.argv[2]} is not a number.`))
    process.exit(1)
  }

let firstName = (process.argv[2])
let lastName = (process.argv[3])
let age = (process.argv[4])

canVote(firstName, lastName, age)